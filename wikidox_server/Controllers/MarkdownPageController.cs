using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WikiDoxServer.Models;
using Microsoft.EntityFrameworkCore;
using WikiDoxServer.Dto;

namespace WikiDoxServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MarkdownPageController : Controller
    {
        public Context _context;
        public MarkdownPageController(Context context)
        {
            _context = context;
        }


        [HttpPost]
        [Route("GetMarkupPage")]
        public String GetMarkupPage([FromBody]PageDto page)
        {
            Globals.getAuth(page.session);
            return _context.MarkdownPages.Where(a => a.url == page.url).Single().text;
        }

        public bool isPrevPageExisting(String url)
        {
            int r = url.LastIndexOf(':');            
            if(r>0)
            {
                String prevPages = url.Substring(0, r);
                if (_context.MarkdownPages.Where(a => a.url == prevPages).Count() == 0)
                {
                    return false;
                }
                else
                {
                    return true;
                }
                
            }
            return true;
        }

        public bool isPageExisting(String prevPages)
        {
                if (_context.MarkdownPages.Where(a => a.url == prevPages).Count() == 0)
                {
                    return false;
                }
                else
                {
                    return true;
                }
        }

        public void genTempPrevPage(String prevPages, long idNode)
        {
            if (_context.MarkdownPages.Where(a => a.url == prevPages).Count() == 0)
            {
                MarkdownPages p = new MarkdownPages();
                p.idUserPublisher = 1;
                p.groupWhitelist = false;
                p.userWhitelist = false;
                p.url = prevPages;
                p.text = "";
                p.idNode = idNode;
                _context.MarkdownPages.Add(p);
                _context.SaveChanges();
            }
        }

        [HttpPost]
        [Route("DeletePage")]
        public String DeletePage([FromBody] PageDto page)
        {
            if (Globals.getAuth(page.session).canEdit!=1)
                throw new Exception();
            String url = page.url;
            if (_context.MarkdownPages.Where(a => a.url == url).Count() > 0)
            {
                SyncController.lastSync = DateTime.Now;
                MarkdownPages p = _context.MarkdownPages.Where(a => a.url == url).ToList()[0];
                long idNode = p.idNode;
                if (_context.NodeCapsule.FromSql($"SELECT * FROM NodeCapsule WHERE Nodeid={idNode}").Count() >0)
                {
                    throw new Exception();
                }
                else
                {
                    
                    
                    
                    Node.NodeCapsule nc= _context.NodeCapsule.Where(a =>a.idNode == idNode).ToList()[0];
                    Node n = _context.Node.Where(a => a.id == idNode).ToList()[0];
                    _context.MarkdownPages.Remove(p);
                    _context.SaveChanges();
                    _context.Node.Remove(n);
                    _context.SaveChanges();
                    _context.NodeCapsule.Remove(nc);
                    _context.SaveChanges();
                    
                    //_context.NodeCapsule.FromSql("DELETE FROM NodeCapsule WHERE idNode={0}", idNode);
                }
            }
            else
            {
                throw new Exception();
            }
            return "OK";
        }

        [HttpPost]
        [Route("SaveMarkupPage")]
        public String SaveMarkupPage([FromBody]PageDto page)
        {

            UserDataDto auth= Globals.getAuth(page.session);
            if (auth.canEdit==1)
            {
                SyncController.lastSync = DateTime.Now;

                
                        String text = page.text;
                        if (_context.MarkdownPages.Where(a => a.url == page.url).Count() == 0)
                        {
                            MarkdownPages p = new MarkdownPages();
                            p.idUserPublisher = 1;
                            p.groupWhitelist = false;
                            p.userWhitelist = false;
                            p.url = page.url;
                            if(page.text.Contains("{\\rtf1"))
                                p.text = Sync.ConvertRTFToHTML(page.text.Replace("{\"body\":\"", "").Replace("\\n\"}", "").Replace("\\n", "")).Replace("ouicompat", ""); 
                            else
                                p.text = page.text.Replace("{\"body\":\"", "").Replace("\\n\"}", "").Replace("\\n", "");
                            p.idNode = getNode(p.url, p.url, page.weight);
                            _context.MarkdownPages.Add(p);
                            _context.SaveChanges();                        

                    }
                        else
                        {
                            MarkdownPages mpage = _context.MarkdownPages.Where(a => a.url == page.url).Single();
                            Node n=_context.Node.Where(a=>a.id==mpage.idNode).Single();
                            n.weight= page.weight;
                            if (text.Contains("{\\rtf1"))
                                mpage.text = Sync.ConvertRTFToHTML(text.Replace("{\"body\":\"", "").Replace("\\n\"}", "").Replace("\\n", "")).Replace("ouicompat", "");
                            else
                            mpage.text = text.Replace("{\"body\":\"", "").Replace("\\n\"}", "").Replace("\\n", "");
                            _context.Node.Update(n);
                            _context.MarkdownPages.Update(mpage);
                            _context.SaveChanges();
                        }
                    
                    return "true";
                
            }
            else
            {
                throw new Exception();
            }
        }

        public long getNode(String path, String initialPath, int weight)
        {
            
            if(!isPrevPageExisting(path))
            {
                int r = path.LastIndexOf(':');
                String prevPages = path.Substring(0, r);
                
                long id=getNode(prevPages,initialPath, weight);
                
                MarkdownPages p = new MarkdownPages();
                p.idUserPublisher = 1;
                p.groupWhitelist = false;
                p.userWhitelist = false;
                p.url = prevPages;
                p.text = "";
                p.idNode = id;
                _context.MarkdownPages.Add(p);
                _context.SaveChanges();                               
                
            }


            String[] elements = path.Split(':');
            String[] elements_new = elements; /*new string[elements.Count() - 1];
            for (int i = 0; i < elements.Count() - 1; i++)
                elements_new[i] = elements[i];*/
            Node root = _context.Node.Where(a => a.id == 1).Single();

        //    String[] elements_new = path.Split(':');


            Console.WriteLine("????SDF??" + root.children.Count());
            Node subnode = root;
            bool found = false;
            foreach(String element in elements_new)
            {
                found = true;
                long subnodeId=subnode.id;
                List<Node.NodeCapsule> children = _context.NodeCapsule.FromSql($"SELECT * FROM NodeCapsule WHERE Nodeid={subnodeId}").ToList();
                subnode.children = children;
                Node subnode_new=addNode(element, subnode);
                if (subnode_new.id == 0)
                {
                    Console.WriteLine("");
                    Console.WriteLine("LOG:"+subnode_new.id.ToString());
                    Console.WriteLine("");
                                        
                    _context.Node.Add(subnode_new);
                    _context.SaveChanges();
                    subnode_new.weight = weight;
                    Node.NodeCapsule n = new Node.NodeCapsule(subnode_new);
                    subnode.children.Add(n);
                    _context.Node.Update(subnode);
                    _context.SaveChanges();
                }                                                                         
                subnode = _context.Node.Where(a => a.id == subnode_new.id).Single(); 
            }
            if(!found)
            {
                Node new_node = new Node();
                new_node.name = path;
                _context.Node.Add(new_node);
                _context.SaveChanges();

                Node.NodeCapsule n = new Node.NodeCapsule(new_node);
                
                root.children.Add(n);
                _context.Node.Update(root);
                _context.SaveChanges();

                subnode = new_node;
            }
           // if(!isPageExisting(path))
             //   genTempPrevPage(path, subnode.id);
            return subnode.id;
        }


        

        [HttpPost]
        [Route("GetPathById")]
        public String GetPathById([FromBody]IdDto id)
        {
            Globals.getAuth(id.session);
            MarkdownPages n=_context.MarkdownPages.Where(a => a.id == id.id - 100000).Single();
            return n.url;
        }



        [HttpGet("{session}")]
        [Route("GetNodes")]
        public IEnumerable<TreeDTO> getNodes([FromQuery]String session)
        {
            //Globals.getAuth(session);
            TreeDTO rootDTO = new TreeDTO();
            rootDTO.id = 0;
            rootDTO.label = "Start";


            
           
                
                Node root = _context.Node.Where(a => a.id == 1).Single();




                Console.WriteLine("????SDF??" + root.children.Count());
                Node subnode = root;
                int count = 0;
                TreeDTO ret = iterateChildren(subnode, rootDTO, ref count,true); 



            return rootDTO.children;
        }



        private TreeDTO iterateChildren(Node subnode, TreeDTO treeDTO, ref int count, bool isroot)
        {
            if (subnode.id == 1)
            {
                TreeDTO newDto = new TreeDTO();
                newDto.id = 100001;
                newDto.label = "--root--";
                treeDTO.children.Add(newDto);
            }
            long subnodeId = subnode.id;
            List<Node.NodeCapsule> children = _context.NodeCapsule.FromSql($"SELECT * FROM NodeCapsule WHERE Nodeid={subnodeId}").ToList();
            if (children.Count > 0)
            {
                long idNode = subnode.id;
                subnode.children = children;

                foreach (Node.NodeCapsule capsule in subnode.children)
                {                    
                    Node node = _context.Node.Where(a => a.id == capsule.idNode).Single();
                    
                    TreeDTO newDto = new TreeDTO();

                    long bla;
                    
                        if (_context.MarkdownPages.Where(a => a.idNode == capsule.idNode).Count() > 0)
                        {
                            MarkdownPages p = _context.MarkdownPages.Where(a => a.idNode == capsule.idNode).Single();
                            newDto.id = 100000 + p.id;
                        }
                    
                    newDto.label = node.name;
                        treeDTO.children.Add(newDto);
                    
                        idNode = capsule.idNode;
                    count++;
                   
                        iterateChildren(node, newDto, ref count,isroot);                        
                                 
                    }                                
            }
           /* else
            {
                if (_context.NodeCapsule.FromSql("SELECT * FROM NodeCapsule WHERE idNode={0} AND nodeID='1'", subnode.id).Count() == 0)
                {
                    List<MarkdownPages> p = _context.MarkdownPages.Where(a => a.idNode == subnode.id).ToList();
                    foreach (MarkdownPages p1 in p)
                    {
                        TreeDTO newD = new TreeDTO();


                        newD.id = 100000 + p1.id;
                        newD.label = p1.url.Split(':')[p1.url.Split(':').Count() - 1];
                        count++;
                        treeDTO.children.Add(newD);
                    }
                }
             
            }
            */
            return treeDTO;
        }


        public Node addNode(String element, Node subnode)
        {
            SyncController.lastSync = DateTime.Now;
            Console.WriteLine("==== SUBSUBNODE COUNT: === " + subnode.children.Count().ToString());
            foreach (Node.NodeCapsule subsubnodeC in subnode.children)
            {
                Console.WriteLine("==== SUBSUBNODE ID: === " + subsubnodeC.idNode);
                Node subsubnode = _context.Node.Where(a=>a.id== subsubnodeC.idNode).Single();
                
                if (subsubnode.name == element)
                {
                    Console.WriteLine("==== FOUND ===");
                    return subsubnode;
                }
            }
            Node new_node= new Node();
            new_node.name = element;            

            return new_node;
        }

        [HttpPost]
        [Route("GetIdByPath")]
        public long GetIdByPath([FromBody]PageDto page)
        {
            if (_context.MarkdownPages.Where(a => a.url == page.url).Count() > 0)
            {
                MarkdownPages n = _context.MarkdownPages.Where(a => a.url == page.url).Single();
                return n.idNode;
            }
            return -1;
        }
    }

    
}
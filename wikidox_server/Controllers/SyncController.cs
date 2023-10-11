using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using WikiDoxServer.Dto;
using WikiDoxServer.Models;

namespace WikiDoxServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SyncController : Controller
    {
        public static DateTime lastSync=DateTime.Now;
        Context _context;
        public SyncController(Context context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("GetMarkupPage")]
        public String GetMarkupPage([FromBody] PageDto page)
        {
            Globals.getAuth(page.session);
            return _context.MarkdownPages.Where(a => a.url == page.url).Single().text;
        }

        [HttpGet("{session}")]
        [Route("GetLastSync")]
        public String getLastSync([FromQuery] String session)
        {
            return lastSync.ToLongTimeString();
        }

        [HttpGet("{session}")]
        [Route("GetNodes")]
        public SyncDTO getNodes([FromQuery] String session)
        {
            Globals.getAuth(session);
            SyncDTO rootDTO = new SyncDTO();
            rootDTO.ID = "1";
            rootDTO.name = "Root";



          
            Node root = _context.Node.Where(a => a.id == 1).Single();




            Console.WriteLine("????SDF??" + root.children.Count());
            Node subnode = root;
            int count = 0;
            SyncDTO ret = iterateChildren(subnode, rootDTO, ref count, true);
            int weight = _context.Node.Max(a => a.weight)+1;



            return rootDTO;
        }


        int weight;
        private SyncDTO iterateChildren(Node subnode, SyncDTO SyncDTO, ref int count, bool isroot)
        {

            long subnodeId = subnode.id;
            List<Node.NodeCapsule> children = _context.NodeCapsule.FromSql($"SELECT * FROM NodeCapsule WHERE Nodeid={subnodeId}").ToList();
            if (children.Count > 0)
            {
                long idNode = subnode.id;
                subnode.children = children;

                foreach (Node.NodeCapsule capsule in subnode.children)
                {
                    Node node = _context.Node.Where(a => a.id == capsule.idNode).Single();

                    SyncDTO newDto = new SyncDTO();

                    long bla;

                    if (_context.MarkdownPages.Where(a => a.idNode == capsule.idNode).Count() > 0)
                    {
                        MarkdownPages p = _context.MarkdownPages.Where(a => a.idNode == capsule.idNode).Single();
                        newDto.data = p.text;                        
                    }

                    newDto.ID = node.id.ToString();

                    newDto.name = node.name;
                    newDto.weight = node.weight;
                    if(newDto.weight==0)
                    {
                        newDto.weight = weight;
                        weight++;
                    }

                    newDto.focus = node.focus==1;
                    
                    SyncDTO.children.Add(newDto);

                    idNode = capsule.idNode;
                    count++;

                    iterateChildren(node, newDto, ref count, isroot);

                }
            }
            /* else
             {
                 if (_context.NodeCapsule.FromSql("SELECT * FROM NodeCapsule WHERE idNode={0} AND nodeID='1'", subnode.id).Count() == 0)
                 {
                     List<MarkdownPages> p = _context.MarkdownPages.Where(a => a.idNode == subnode.id).ToList();
                     foreach (MarkdownPages p1 in p)
                     {
                         SyncDTO newD = new SyncDTO();


                         newD.id = 100000 + p1.id;
                         newD.label = p1.url.Split(':')[p1.url.Split(':').Count() - 1];
                         count++;
                         SyncDTO.children.Add(newD);
                     }
                 }

             }
             */
            return SyncDTO;
        }

    }
}

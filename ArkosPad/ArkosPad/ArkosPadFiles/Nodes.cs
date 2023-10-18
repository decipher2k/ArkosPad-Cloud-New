using RicherTextBoxDemo.DtO;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Windows.Forms;
using System.Xml;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace RicherTextBoxDemo.ArkosPadFiles
{
    class Nodes
    {
        //We use this in the export and the saveNode 
        //functions, though it's only instantiated once.
        private StreamWriter sr;

  
        public static void exportNodeToMindmap(TreeNodeCollection tnc, StreamWriter sr)
        {

            foreach (TreeNode node in tnc)
            {
                
                    String tpl = "";
                    if (Globals.data[((XmlNodeData)node.Tag).ID.ToString()].data.Trim().Length>1)
                    {
                        tpl = File.ReadAllText("templates\\mm_details_node.mm");
                        tpl = tpl.Replace("$$$NODE$$$", node.Text);
                        tpl = tpl.Replace("$$$TAG$$$", node.Tag.ToString());

                    RicherTextBox.RicherTextBox tb = new RicherTextBox.RicherTextBox();
                    tb.Rtf = Globals.data[((XmlNodeData)node.Tag).ID].data;
                    tpl = tpl.Replace("$$$TEXT$$$","\r\n"+tb.Text.Replace("\"","\\\"")+"\r\n");
                    }
                    else
                    {
                        tpl = File.ReadAllText("templates\\mm_std_node.mm");
                        tpl = tpl.Replace("$$$NODE$$$", node.Text);
                        tpl = tpl.Replace("$$$TAG$$$", node.Tag.ToString());
                    }

                    sr.Write(tpl);

                    if(node.Nodes.Count>0)
                        exportNodeToMindmap(node.Nodes, sr);

                    sr.WriteLine("</node>");
                }
                 
        }



        public static void saveNode(TreeNodeCollection tnc, StreamWriter sr, bool resetFocus=false, bool importFiles=false)
        {
            foreach (TreeNode node in tnc)
            {
                    if (Globals.isCloud || importFiles)
                {
                    if (!importFiles)
                    {
                        String id = ((XmlNodeData)node.Tag).ID;
                        Sync.UpdateOrAddNode(Globals.data[((XmlNodeData)node.Tag).ID].data, Globals.data[((XmlNodeData)node.Tag).ID].weight, node);
                        PageDto dto = new PageDto() { session = Globals.cloudSession, url = Sync.getUrlFromTreeNode(node) };
                        String idNode = Sync.HttpPost(Newtonsoft.Json.JsonConvert.SerializeObject(dto), "/api/MarkdownPage/GetIdByPath");
                        foreach (FileItem f in Globals.data[id].files)
                        {
                            Sync.UploadFile(Globals.tempDir + "\\_dat\\" + f.filepath, int.Parse(idNode), f.caption);
                        }
                    }
                    else
                    {
                        String id = ((XmlNodeData)node.Tag).ID;
                        List<FileDto.fileCapsule> fc = Sync.GetFiles(int.Parse(id));
                        if (fc != null)
                        {
                            foreach (FileDto.fileCapsule f in fc)
                            {
                                int fileId = f.file.id;
                                
                                Sync.DownloadFile(fileId, Globals.tempDir + "\\_dat\\" + f.file.encName);
                                Globals.data[id].files.Add(new FileItem() { caption = f.file.fileName, filepath = f.file.encName, idCloud = fileId });
                            }
                        }
                    }
                }

                if (resetFocus)
                {
                    Globals.data[((XmlNodeData)node.Tag).ID].focus = false;
                    node.NodeFont = new System.Drawing.Font(SystemFonts.DefaultFont, FontStyle.Regular);
                }
                else if (Globals.data[((XmlNodeData)node.Tag).ID].focus)
                {
                    node.NodeFont = new System.Drawing.Font(SystemFonts.DefaultFont, FontStyle.Bold);
                }

                //If we have child nodes, we'll write 
                //a parent node, then iterrate through
                //the children
                if (node.Nodes.Count > 0)
                {
                    if(!Globals.isCloud)
                        sr.WriteLine("<ID" + ((XmlNodeData)node.Tag).ID + " name=\""+node.Text + "\" tag=\"" + ((XmlNodeData)node.Tag).ID + "\" focus=\"" + (Globals.data[((XmlNodeData)node.Tag).ID].focus?"1":"0") +"\">");

                    saveNode(node.Nodes, sr,resetFocus,importFiles);

                    if (!Globals.isCloud)
                        sr.WriteLine("</ID" + ((XmlNodeData)node.Tag).ID + ">");
                }
                else //No child nodes, so we just write the text
                {
                    if (!Globals.isCloud)
                    {
                        sr.WriteLine("<ID" + ((XmlNodeData)node.Tag).ID + " name=\"" + node.Text + "\" tag=\"" + ((XmlNodeData)node.Tag).ID + "\" focus=\"" + (Globals.data[((XmlNodeData)node.Tag).ID].focus ? "1" : "0") + "\">");
                        sr.WriteLine("</ID" + ((XmlNodeData)node.Tag).ID + ">");
                    }
                }

                
            }
        }

        //Open the XML file, and start to populate the treeview
        
        //This function is called recursively until all nodes are loaded
        public void addTreeNode(XmlNode xmlNode, TreeNode treeNode, Dictionary<String, TreeItem> data, String activeNode=null)
        {
            XmlNode xNode= xmlNode;
            TreeNode tNode;
            XmlNodeList xNodeList;

           

            if (xmlNode.HasChildNodes) //The current node has children
            {
                xNodeList = xmlNode.ChildNodes;
                

                for (int x = 0; x <= xNodeList.Count - 1; x++)
                //Loop through the child nodes
                {
                    String id;
      
                    xNode = xmlNode.ChildNodes[x];

                    if (xNode.Name != "Root")
                    {
                        id = xNode.Name.Replace("ID", "");
                    }
                    else
                    {
                        id = "1";
                    }

                    TreeNode n = new TreeNode(xNode.Attributes[0].Value);
                    n.Tag = new XmlNodeData() { ID = id, focus = xNode.Attributes[2].Value == "1" ? true : false, weight = Globals._maxWeight+1 };
                    Globals._maxWeight++;
                    treeNode.Nodes.Add(n);
                    tNode = treeNode.Nodes[x];

                    
                    if (id == activeNode)
                    {
                        treeNode.TreeView.SelectedNode = treeNode;
                    }

                    if (xmlNode.Attributes.Count > 2)
                    {
                        if (xNode.Attributes[2].Value == "1")
                        {

                            n.NodeFont = new System.Drawing.Font(SystemFonts.DefaultFont, FontStyle.Bold);
                        }
                        else
                        {
                            n.NodeFont = new System.Drawing.Font(SystemFonts.DefaultFont, FontStyle.Regular);
                        }
                    }
                    addTreeNode(xNode, tNode,data, activeNode);                  
                }
                var items = treeNode.Nodes.Cast<TreeNode>().OrderBy(x1 => ((XmlNodeData)x1.Tag).weight).ToList();
                treeNode.Nodes.Clear();
                treeNode.Nodes.AddRange(items.ToArray());
            }
            else //No children, so add the outer xml (trimming off whitespace)
            {
                String id = xmlNode.Name.Replace("ID", "");
                if (id == activeNode)
                {
                    treeNode.TreeView.SelectedNode = treeNode;
                }

                if (xmlNode.Attributes.Count > 2)
                {
                    if (xNode.Attributes[2].Value == "1")
                    {

                        treeNode.NodeFont = new System.Drawing.Font(SystemFonts.DefaultFont, FontStyle.Bold);
                    }
                    else
                    {
                        treeNode.NodeFont = new System.Drawing.Font(SystemFonts.DefaultFont, FontStyle.Regular);
                    }
                }
                if (xNode.Attributes.Count > 0)
                {
                    treeNode.Text = xNode.Attributes[0].Value;
                    treeNode.Tag = new XmlNodeData() { ID = id, focus = xNode.Attributes[2].Value == "1" ? true : false, weight = Globals._maxWeight + 1 };
                    Globals._maxWeight++;
                }               
            }
        }

        public static Dictionary<String, TreeItem> addTreeNodeSync(SyncDTO xmlNode, TreeNode treeNode, Dictionary<String, TreeItem> data, String activeNode = null)
        {
            SyncDTO xNode = xmlNode;
            TreeNode tNode;
            List<SyncDTO> xNodeList;

            TreeItem item = new TreeItem();
            item.weight = xmlNode.weight;
            item.name = xmlNode.name;
            if (xmlNode.data.Trim().Length > 0)
            {
                item.data = Sync.toRtf(xmlNode.data);
            }
            else
            {
                item.data = "";
            }

            item.focus = xmlNode.focus;
            if(xmlNode.ID!="1")
                data.Add(xmlNode.ID, item);


            if (xmlNode.children.Count>0) //The current node has children
            {
                xNodeList = xmlNode.children;


                for (int x = 0; x <= xNodeList.Count - 1; x++)
                //Loop through the child nodes
                {
                    String id = xmlNode.ID;
                    xNode = xmlNode.children[x];
                    TreeNode n = new TreeNode(xNode.name);
                    n.Tag = new XmlNodeData() { ID = xNode.ID, focus = xNode.focus, weight = xNode.weight };
                    
                    treeNode.Nodes.Add(n);
                    tNode = treeNode.Nodes[x];


                    if (id == activeNode)
                    {
                        treeNode.TreeView.SelectedNode = treeNode;
                    }

                    
                        if (xNode.focus)
                        {

                            n.NodeFont = new System.Drawing.Font(SystemFonts.DefaultFont, FontStyle.Bold);
                        }
                        else
                        {
                            n.NodeFont = new System.Drawing.Font(SystemFonts.DefaultFont, FontStyle.Regular);
                        }
                    
                    data=addTreeNodeSync(xNode, tNode, data, activeNode);
                }
                var items = treeNode.Nodes.Cast<TreeNode>().OrderBy(x1 => ((XmlNodeData)x1.Tag).weight).ToList();
                treeNode.Nodes.Clear();
                treeNode.Nodes.AddRange(items.ToArray());
            }
            else //No children, so add the outer xml (trimming off whitespace)
            {
                String id = xmlNode.ID;
                if (id == activeNode)
                {
                    treeNode.TreeView.SelectedNode = treeNode;
                }

              
                    if (xNode.focus)
                    {

                        treeNode.NodeFont = new System.Drawing.Font(SystemFonts.DefaultFont, FontStyle.Bold);
                    }
                    else
                    {
                        treeNode.NodeFont = new System.Drawing.Font(SystemFonts.DefaultFont, FontStyle.Regular);
                    }
               

                treeNode.Text = xNode.name;
                treeNode.Tag = new XmlNodeData() { ID = xNode.ID, focus = xNode.focus, weight = xNode.weight };
            
            }
            return data;
        }       
    }
}

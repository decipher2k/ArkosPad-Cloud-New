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

namespace RicherTextBoxDemo
{
    class SaveLoad
    {
        //We use this in the export and the saveNode 
        //functions, though it's only instantiated once.
        private StreamWriter sr;

  
        public static void exportNodeToMindmap(TreeNodeCollection tnc, StreamWriter sr)
        {

            foreach (TreeNode node in tnc)
            {
                
                    String tpl = "";
                    if (MainForm.data[((XmlNodeData)node.Tag).ID.ToString()].data.Trim().Length>1)
                    {
                        tpl = File.ReadAllText("templates\\mm_details_node.mm");
                        tpl = tpl.Replace("$$$NODE$$$", node.Text);
                        tpl = tpl.Replace("$$$TAG$$$", node.Tag.ToString());

                    RicherTextBox.RicherTextBox tb = new RicherTextBox.RicherTextBox();
                    tb.Rtf = MainForm.data[((XmlNodeData)node.Tag).ID].data;
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



        public static void saveNode(TreeNodeCollection tnc, StreamWriter sr, bool resetFocus=false)
        {
            foreach (TreeNode node in tnc)
            {
                if (MainForm.isCloud)
                    Sync.UpdateOrAddNode(MainForm.data[((XmlNodeData)node.Tag).ID].data, MainForm.data[((XmlNodeData)node.Tag).ID].weight, node);


                if (resetFocus)
                {
                    MainForm.data[((XmlNodeData)node.Tag).ID].focus = false;
                    node.NodeFont = new System.Drawing.Font(SystemFonts.DefaultFont, FontStyle.Regular);
                }
                else if (MainForm.data[((XmlNodeData)node.Tag).ID].focus)
                {
                    node.NodeFont = new System.Drawing.Font(SystemFonts.DefaultFont, FontStyle.Bold);
                }

                //If we have child nodes, we'll write 
                //a parent node, then iterrate through
                //the children
                if (node.Nodes.Count > 0)
                {
                    if(!MainForm.isCloud)
                        sr.WriteLine("<ID" + ((XmlNodeData)node.Tag).ID + " name=\""+node.Text + "\" tag=\"" + ((XmlNodeData)node.Tag).ID + "\" focus=\"" + (MainForm.data[((XmlNodeData)node.Tag).ID].focus?"1":"0") +"\">");

                    saveNode(node.Nodes, sr,resetFocus);

                    if (!MainForm.isCloud)
                        sr.WriteLine("</ID" + ((XmlNodeData)node.Tag).ID + ">");
                }
                else //No child nodes, so we just write the text
                {
                    if (!MainForm.isCloud)
                    {
                        sr.WriteLine("<ID" + ((XmlNodeData)node.Tag).ID + " name=\"" + node.Text + "\" tag=\"" + ((XmlNodeData)node.Tag).ID + "\" focus=\"" + (MainForm.data[((XmlNodeData)node.Tag).ID].focus ? "1" : "0") + "\">");
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
                    if (xmlNode.Name != "Root")
                    {
                        id = xmlNode.Name.Replace("ID", "");
                    }
                    else
                    {
                        id = "1";
                    }
                    xNode = xmlNode.ChildNodes[x];
                    TreeNode n = new TreeNode(xNode.Attributes[0].Value);
                    n.Tag = new XmlNodeData() { ID = id, focus = xNode.Attributes[2].Value == "1" ? true : false, weight = TreeItem.maxWeight+1 };
                    TreeItem.maxWeight++;
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

                treeNode.Text = xNode.Attributes[0].Value;
                treeNode.Tag= new XmlNodeData() { ID = id, focus = xNode.Attributes[2].Value == "1" ? true : false, weight = TreeItem.maxWeight + 1 };
                TreeItem.maxWeight++;
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
            item.data = Sync.toRtf(xmlNode.data);
            item.focus = xmlNode.focus;
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

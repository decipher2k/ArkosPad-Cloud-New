using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Text;
using System.Windows.Forms;
using System.Xml;

namespace RicherTextBox
{
    class SaveLoad
    {
        //We use this in the export and the saveNode 
        //functions, though it's only instantiated once.
        private StreamWriter sr;

        
        

        //Open the XML file, and start to populate the treeview
        
        //This function is called recursively until all nodes are loaded
        public static void addTreeNode(XmlNode xmlNode, TreeNode treeNode, String activeNode=null)
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
                    xNode = xmlNode.ChildNodes[x];
                    TreeNode n = new TreeNode(xNode.Attributes[0].Value);
                    n.Tag = xNode.Attributes[1].Value;
                    treeNode.Nodes.Add(n);
                    tNode = treeNode.Nodes[x];

                    String id = xmlNode.Name.Replace("ID", "");
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
                    addTreeNode(xNode, tNode,activeNode);
                }
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
            }
        }

       

    }
}

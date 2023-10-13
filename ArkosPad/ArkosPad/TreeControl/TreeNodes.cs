using RicherTextBoxDemo.DtO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace RicherTextBoxDemo.TreeControl
{
    public class TreeNodes
    {
        public static void moveNodeUp(TreeNode node)
        {
            String origID = ((XmlNodeData)node.Tag).ID;
            TreeItem origData = Globals.data[origID];

            int iPreviousID = -1;
            TreeNode previousNode = null;

            if (node.Index >= 1)
            {
                previousNode = node.Parent.Nodes[node.Index - 1];

                iPreviousID = int.Parse(((XmlNodeData)previousNode.Tag).ID);

                if (iPreviousID != -1)
                {
                    int tmpWeight = Globals.data[origID].weight;
                    Globals.data[origID].weight = Globals.data[iPreviousID.ToString()].weight;
                    Globals.data[iPreviousID.ToString()].weight = tmpWeight;
                    /*
                    if (treeView1.SelectedNode.Parent.Nodes.ContainsKey(iPreviousID.ToString()))
                    {
                        TreeItem previousData = Globals.data[iPreviousID.ToString()];


                        Globals.data.Remove(iPreviousID.ToString());
                        Globals.data.Remove(origID);

                        Globals.data.Add(origID, previousData);
                        Globals.data.Add(iPreviousID.ToString(), origData);

                        int tmpWeight = Globals.data[origID].weight;
                        Globals.data[origID].weight = Globals.data[iPreviousID.ToString()].weight;
                        Globals.data[iPreviousID.ToString()].weight = tmpWeight;
                    }*/

                    if (Globals.isCloud)
                    {
                        Sync.UpdateOrAddNode(Globals.data[origID].data, Globals.data[origID].weight, node);
                        Sync.UpdateOrAddNode(Globals.data[iPreviousID.ToString()].data, Globals.data[iPreviousID.ToString()].weight, node.Parent.Nodes[node.Index - 1]);
                    }
                    else
                    {
                        MoveUp(node);
                    }
                }



                //MoveUp(treeView1.SelectedNode);
                Globals.notSaved = true;
            }
            //ArkosPadFiles.Files.exportToXml(_filename);
        }

        public static void moveNodeDown(TreeNode node)
        {
            String origID = ((XmlNodeData)node.Tag).ID;
            TreeItem origData = Globals.data[origID];

            int iPreviousID = -1;
            TreeNode previousNode = null;

            if (node.Parent.Nodes.Count > node.Index + 1)
            {
                previousNode = node.Parent.Nodes[node.Index + 1];

                iPreviousID = int.Parse(((XmlNodeData)previousNode.Tag).ID);

                if (iPreviousID != -1)
                {
                    int tmpWeight = Globals.data[origID].weight;
                    Globals.data[origID].weight = Globals.data[iPreviousID.ToString()].weight;
                    Globals.data[iPreviousID.ToString()].weight = tmpWeight;
                    /*
                    if (treeView1.SelectedNode.Parent.Nodes.ContainsKey(iPreviousID.ToString()))
                    {
                        TreeItem previousData = Globals.data[iPreviousID.ToString()];


                        Globals.data.Remove(iPreviousID.ToString());
                        Globals.data.Remove(origID);

                        Globals.data.Add(origID, previousData);
                        Globals.data.Add(iPreviousID.ToString(), origData);

                        int tmpWeight = Globals.data[origID].weight;
                        Globals.data[origID].weight = Globals.data[iPreviousID.ToString()].weight;
                        Globals.data[iPreviousID.ToString()].weight = tmpWeight;
                    }*/
                }


                if (Globals.isCloud)
                {
                    Sync.UpdateOrAddNode(Globals.data[origID].data, Globals.data[origID].weight, node);
                    Sync.UpdateOrAddNode(Globals.data[iPreviousID.ToString()].data, Globals.data[iPreviousID.ToString()].weight, node.Parent.Nodes[node.Index + 1]);
                }
                else
                {
                    MoveDown(node);
                }
                Globals.notSaved = true;
            }
            // ArkosPadFiles.Files.exportToXml(_filename);
        }
        //https://stackoverflow.com/questions/2203975/move-node-in-tree-up-or-down
        public static void MoveUp(System.Windows.Forms.TreeNode node)
        {
            TreeNode parent = node.Parent;
            System.Windows.Forms.TreeView view = node.TreeView;
            if (parent != null)
            {
                int index = parent.Nodes.IndexOf(node);
                if (index > 0)
                {
                    parent.Nodes.RemoveAt(index);
                    parent.Nodes.Insert(index - 1, node);
                }
            }
            else if (node.TreeView.Nodes.Contains(node)) //root node
            {
                int index = view.Nodes.IndexOf(node);
                if (index > 0)
                {
                    view.Nodes.RemoveAt(index);
                    view.Nodes.Insert(index - 1, node);
                }
            }

        }

        public static void MoveDown(System.Windows.Forms.TreeNode node)
        {
            TreeNode parent = node.Parent;
            System.Windows.Forms.TreeView view = node.TreeView;
            if (parent != null)
            {
                int index = parent.Nodes.IndexOf(node);
                if (index < parent.Nodes.Count - 1)
                {
                    parent.Nodes.RemoveAt(index);
                    parent.Nodes.Insert(index + 1, node);
                }
            }
            else if (view != null && view.Nodes.Contains(node)) //root node
            {
                int index = view.Nodes.IndexOf(node);
                if (index < view.Nodes.Count - 1)
                {
                    view.Nodes.RemoveAt(index);
                    view.Nodes.Insert(index + 1, node);
                }
            }
            if(Globals.isCloud) 
                Sync.UpdateOrAddNode(Globals.data[((XmlNodeData)node.Tag).ID].data, Globals.data[((XmlNodeData)node.Tag).ID].weight, node);
        }
    }
}

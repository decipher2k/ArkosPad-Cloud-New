using RicherTextBox;
using RicherTextBoxDemo.ArkosPadFiles;
using RicherTextBoxDemo.DtO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;
using System.Xml;

namespace RicherTextBoxDemo.TreeControl
{
    public class TreeView
    {
       
        private System.Windows.Forms.TreeView treeView1;
        
        public TreeView(System.Windows.Forms.TreeView treeView1)
        {            
            this.treeView1 = treeView1;   
        }

        
        public void loadTreeData(RicherTextBox.RicherTextBox richerTextBox1)
        {
            TreeNode n = treeView1.SelectedNode;
            if (n != null && n.Tag != null)
            {
                String tag = ((XmlNodeData)n.Tag).ID;
                if (n.Tag != null && tag != "1")
                {
                    TreeItem i = Globals.data[tag];
                    if (richerTextBox1.Text.Trim().Length > 0)
                    {
                        if (i.data != richerTextBox1.Rtf)
                        {
                            i.data = richerTextBox1.Rtf;
                            if(Globals.isCloud)
                                Sync.UpdateOrAddNode(Globals.data[((XmlNodeData)n.Tag).ID].data, Globals.data[((XmlNodeData)n.Tag).ID].weight, n);
                        }
                    }
                    else
                    {
                        if (i.data != "")
                        {
                            i.data = "";
                            if (Globals.isCloud)
                                Sync.UpdateOrAddNode(Globals.data[((XmlNodeData)n.Tag).ID].data, Globals.data[((XmlNodeData)n.Tag).ID].weight, n);
                        }
                    }

                    i.data = richerTextBox1.Rtf;
                    Globals.data[tag] = i;

                    if (Globals._filename != "")
                    {
                        new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1,Globals._filename);
                    }
                }
            }
        }

        public void populateTreeview(RicherTextBox.RicherTextBox richerTextBox1, System.Windows.Forms.ListView listView1, String filename = "", String idInit="")
        {
            richerTextBox1.File = filename;

            OpenFileDialog dlg = new OpenFileDialog();

            OpenFile f = new OpenFile();
            if (filename != "" || f.ShowDialog() == DialogResult.OK)
            {

                Globals.isCloud = f.isCloud;


                if (f.isCloud)
                {
                    Globals.cloudSession = f.session;
                    Globals.cloudURL = f.url;
                    MainForm.instance.runMainThread();
                }
                else
                {
                    treeView1.Nodes.Clear();
                    bool mdlg = false;
                    if (filename == "")
                    {
                        mdlg = true;
                        filename = f.file;
                        Globals._zipFileName = filename;
                        if (!Globals.isCloud)
                            new ArkosPadFiles.Files(treeView1).loadFiles(filename);
                        filename = new ArkosPadFiles.Files(treeView1).getXmlFromFilename(filename);
                        richerTextBox1.File = filename;
                        Globals._filename = filename;
                    }

                    try
                    {
                        if (!System.IO.File.Exists(Globals.tempDir + "\\data.dat") && mdlg)
                        {
                            MessageBox.Show(MainForm.instance, ".dat file not found.", "Error");
                        }
                        else
                        {
                            Globals.data = DataStorage.DeSerializeNow(Globals.tempDir + "\\data.dat");
                            XmlDocument xDoc = new XmlDocument();
                            xDoc.Load(filename);
                            treeView1.Nodes.Clear();
                            treeView1.Nodes.Add(new
                              TreeNode(xDoc.DocumentElement.Name));
                            TreeNode tNode = new TreeNode();
                            tNode = (TreeNode)treeView1.Nodes[0];
                            new Nodes().addTreeNode(xDoc.DocumentElement, tNode, Globals.data, idInit);
                            treeView1.ExpandAll();
                            listView1.Clear();
                            Globals._filename = filename;
                            MainForm.instance.setFormCaption();

                            foreach (TreeItem itm in Globals.data.Values)
                            {
                                if (itm.weight > Globals._maxWeight)
                                    Globals._maxWeight = itm.weight;
                            }
                        }
                    }
                    catch (XmlException xExc)
                    {
                        MessageBox.Show(xExc.Message);
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(ex.Message);
                    }
                }
            }
        }

        public void removeNode(TreeNode node)
        {
            while (node.Nodes.Count > 0)
                removeNode(node.Nodes[0]);
            Globals.data.Remove(((XmlNodeData)node.Tag).ID);
            node.Remove();

        }
    }
}

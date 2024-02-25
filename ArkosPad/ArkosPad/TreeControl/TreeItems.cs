using RicherTextBoxDemo.Attachments;
using RicherTextBoxDemo.DtO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace RicherTextBoxDemo.TreeControl
{
    public class TreeItems
    {
        public static void SelectedItem(MainForm mainForm, System.Windows.Forms.ListView listView1, System.Windows.Forms.TreeView treeView1, Dictionary<string, TreeItem> data)
        {

            if (mainForm.getSelectedNode() != null)
            {
                TreeNode n = mainForm.getSelectedNode();
                if (!Globals.isCloud)
                {
                    new Files(listView1, treeView1).updateFileList(mainForm);
                }
                else
                {
                    if (n.Tag != null)
                    {
                        List<FileDto.fileCapsule> files = Sync.GetFiles(int.Parse(((XmlNodeData)n.Tag).ID));
                        foreach (FileDto.fileCapsule file in files)
                        {
                            ListViewItem item = new ListViewItem();
                            item.Text = file.file.fileName;
                            item.Tag = file.file.id;
                            mainForm.addLbFile(item);
                        }
                    }
                }

                if (n.Tag != null)
                {
                    string tag = ((XmlNodeData)n.Tag).ID;
                    if (data.ContainsKey(tag))
                    {
                        string m_data = data[tag].data;
                        mainForm.setRtfContent(m_data);
                    }
                }
                else
                {
                    mainForm.setRtfContent("");
                }
            }
        }

        char[] ascii = new char[] { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' };

        public void addItem(System.Windows.Forms.TreeView treeView1, RicherTextBox.RicherTextBox richerTextBox1)
        {
            New n = new New();
            if (n.ShowDialog() == DialogResult.OK)
            {
                Globals.notSaved = true;
                String name = n.mName;

                String tmpName = name.ToLower();
                char c=tmpName.First();
                if(!ascii.Contains(c))
                {
                    MessageBox.Show(MainForm.instance, "The item name must begin with a letter.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }

                bool found = false;

                foreach (TreeNode n1 in treeView1.SelectedNode.Nodes)
                {
                    if (n1.Text == name)
                        found = true;
                }

                if (!found)
                {
                    int weight = int.Parse(n.Weight);
                    TreeItem ti = new TreeItem();
                    ti.name = name;
                    ti.weight = Globals._maxWeight + 1;
                    Globals._maxWeight++;
                    ti.data = "";
                    int id = Misc.Tools.getNextID();
                    Globals.data.Add(id.ToString(), ti);
                    TreeNode sel = treeView1.SelectedNode;
                    TreeNode newNode = new TreeNode();
                    newNode.Name = name + id.ToString();
                    newNode.Text = name;
                    newNode.Tag = new XmlNodeData() { ID = id.ToString(), focus = false, weight = ti.weight };


                    if (sel != null)
                    {
                        sel.Nodes.Add(newNode);
                        sel.Expand();
                    }
                    else
                    {
                        treeView1.Nodes.Add(newNode);
                        treeView1.ExpandAll();
                    }

                    if (Globals.isCloud)
                    {
                        Sync.UpdateOrAddNode(" ", ti.weight, newNode);
                        treeView1.Nodes.Remove(newNode);
                    }
                }
            }

            if (Globals._filename != "")
            {
                new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1,Globals._filename);
            }
        }
    }
}

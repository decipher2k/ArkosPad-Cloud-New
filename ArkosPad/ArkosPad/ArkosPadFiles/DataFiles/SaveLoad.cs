using RicherTextBox;
using RicherTextBoxDemo.DtO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Media;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace RicherTextBoxDemo.ArkosPadFiles.DataFiles
{
    public class SaveLoad
    {
        private TreeView treeView1;
        public SaveLoad(TreeView treeView1) 
        { 
            this.treeView1=treeView1;
        }
        public  void saveFile(RicherTextBox.RicherTextBox richerTextBox1)
        {
            TreeNode n = treeView1.SelectedNode;
            if (n != null && n.Tag != null)
            {
                String tag = ((XmlNodeData)n.Tag).ID;
                TreeItem i = Globals.data[tag];
                if (richerTextBox1.Text.Trim().Length > 0)
                    i.data = richerTextBox1.Rtf;
                else
                    i.data = "";
                Globals.data[tag] = i;

                if (Globals._filename != "")
                {
                    new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1,Globals._filename);
                }
                else
                {
                    new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1);
                }
                new ArkosPadFiles.Files(treeView1).saveFiles();
                SystemSounds.Beep.Play();
            }
        }

        public  void uploadToCloud()
        {
            if (!Globals.isCloud)
            {
                if (MessageBox.Show(MainForm.instance, "Warning! This will delete all content saved in the cloud!\nContinue?", "Warning", MessageBoxButtons.YesNo, MessageBoxIcon.Exclamation) == DialogResult.Yes)
                {
                    if (!Globals.isCloud)
                    {
                        OpenFileDialog dlg = new OpenFileDialog();

                        OpenFile f = new OpenFile(true);
                        if (f.ShowDialog() == DialogResult.OK)
                        {

                            Globals.isCloud = f.isCloud;

                            if (f.isCloud)
                            {
                                Globals.cloudSession = f.session;
                                Globals.cloudURL = f.url;
                            }
                        }

                        if (Globals.isCloud)
                        {
                            Sync.Clear();
                            foreach (TreeNode node in treeView1.Nodes)
                            {
                                StreamWriter sr = new StreamWriter(Globals.tempDir+"\\..\\tmp",false, System.Text.Encoding.UTF8);
                                Nodes.saveNode(node.Nodes, sr, false);
                                sr.Close();
                            }
                            MainForm.instance.runMainThread();
                        }
                    }
                }
            }
            else
            {
                MessageBox.Show(MainForm.instance, "You are allready connected to the cloud.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }
}

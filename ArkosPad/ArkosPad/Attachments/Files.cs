using RicherTextBoxDemo.DtO;
using RicherTextBoxDemo.TreeControl;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace RicherTextBoxDemo.Attachments
{
    public class Files
    {
        System.Windows.Forms.ListView listView1;
        System.Windows.Forms.TreeView treeView1;
        public Files(System.Windows.Forms.ListView listView1, System.Windows.Forms.TreeView treeView1) 
        {
            this.listView1 = listView1;
            this.treeView1 = treeView1;
        }

        public  void updateFileList(MainForm mainForm)
        {
            mainForm.clearLbFiles();
            string selectedFile = "";
            if (mainForm.getSelectedNode() != null)
            {
                TreeNode n = mainForm.getSelectedNode();
                if (n.Tag != null)
                {
                    string tag = ((XmlNodeData)n.Tag).ID;
                    if (Globals.data.ContainsKey(tag))
                    {
                        List<FileItem> fileItem = Globals.data[tag].files;
                        foreach (FileItem item in fileItem)
                        {
                            mainForm.addLbFile(item.caption);
                        }
                    }
                }
            }
        }

        public  void addFile(RicherTextBox.RicherTextBox richerTextBox1)
        {
            if (!Globals.isCloud)
            {
                if (!Directory.Exists((Globals.tempDir + "\\_dat")))
                    Directory.CreateDirectory(Globals.tempDir + "\\_dat");
            }

            AddFileDialog dlg = new AddFileDialog();
            if (dlg.ShowDialog() == DialogResult.OK)
            {
                String caption = dlg.caption;
                String file = dlg.file;
                if (treeView1.SelectedNode != null)
                {
                    TreeNode n = treeView1.SelectedNode;
                    if (n.Tag != null)
                    {
                        String tag = ((XmlNodeData)n.Tag).ID;
                        if (Globals.data.ContainsKey(tag))
                        {
                            //    if (Globals.data.Values.Where(a => a.name == caption).Count() > 0)
                            //  {
                            //    MessageBox.Show(MainForm.instance, "An item with that caption does allready exist.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                            // }
                            //else
                            {
                                try
                                {
                                    if (!Globals.isCloud)
                                    {
                                        String m_data = Globals.data[tag].data;
                                        String origName = file;
                                        file = new ArkosPadFiles.Files(treeView1).copyFile(file);
                                        if (file != "")
                                        {
                                            FileItem item = new FileItem() { caption = Path.GetFileName(origName), filepath = Path.GetFileName(file) };
                                            listView1.Items.Add(item.caption);


                                            Globals.data[tag].files.Add(item);


                                            if (Globals._filename != "")
                                            {
                                                new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1,Globals._filename);
                                            }
                                        }
                                    }
                                    else
                                    {
                                        Sync.UploadFile(file, int.Parse(tag));
                                    }
                                }
                                catch (Exception ex)
                                {
                                    MessageBox.Show(MainForm.instance, "Unable to add file.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                                }
                            }
                        }
                    }
                }
            }
        }

        public  void removeFile(RicherTextBox.RicherTextBox richerTextBox1)
        {
            try
            {
                TreeNode n = treeView1.SelectedNode;
                if (n.Tag != null)
                {
                    String tag = ((XmlNodeData)n.Tag).ID;

                    if (Globals.isCloud)
                    {
                        if (listView1.SelectedItems.Count > 0)
                        {
                            int idFile = (int)listView1.SelectedItems[0].Tag;
                            Sync.DeleteFile(idFile);
                        }
                    }
                    else
                    {

                        if (Globals.data.ContainsKey(tag))
                        {
                            IEnumerable<FileItem> items = Globals.data[tag].files.Where(a => a.caption == MainForm.instance.selectedFile);
                            if (items.Count() > 0)
                            {
                                listView1.Items.Remove(listView1.SelectedItems[0]);
                                Globals.data[tag].files.Remove(items.First());
                                new Files(listView1,treeView1).updateFileList(MainForm.instance);
                                new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1,Globals._filename);
                            }
                        }
                    }
                }
            }
            catch { }
        }

        public  void runFile()
        {
            TreeNode n = treeView1.SelectedNode;
            if (n != null)
            {
                String fileName = "";
                if (n.Tag != null)
                {
                    String tag = ((XmlNodeData)n.Tag).ID;
                    if (Globals.data.ContainsKey(tag))
                    {
                        fileName = Globals.data[tag].files.Where(a => a.caption == listView1.SelectedItems[0].Text).First().filepath;
                        fileName = Path.GetDirectoryName(Globals._filename) + "\\_dat" + "\\" + fileName;
                        if (File.Exists(fileName))
                        {
                            Process p = new Process();
                            p.StartInfo = new ProcessStartInfo()
                            {
                                UseShellExecute = true,
                                FileName = fileName
                            };

                            p.Start();
                        }
                        else
                        {
                            MessageBox.Show(MainForm.instance, "The file does not exist.");
                        }
                    }
                }
            }
        }

        public  void exportFile(TreeNode n)
        {
            
            String tag = ((XmlNodeData)n.Tag).ID;
            if (Globals.data.ContainsKey(tag))
            {
                
                if (!Globals.isCloud)
                {
                    String fileName = Globals.data[tag].files.Where(a => a.caption == listView1.SelectedItems[0].Text).First().filepath;
                    fileName = Path.GetDirectoryName(Globals._filename) + "\\_dat" + "\\" + fileName;
                    SaveFileDialog saveFileDialog = new SaveFileDialog();
                    saveFileDialog.Title = "Save " + Path.GetExtension(fileName) + " Document";
                    saveFileDialog.Filter = Path.GetExtension(fileName) + " Files (*" + Path.GetExtension(fileName) + ")|*" + Path.GetExtension(fileName);
                    saveFileDialog.FileName = Path.GetFileName(Application.StartupPath + "\\export_file" + Path.GetExtension(fileName));
                    if (saveFileDialog.ShowDialog() == DialogResult.OK)
                    {
                        File.Copy(Path.GetDirectoryName(Globals._filename) + "\\_dat" + "\\" + Path.GetFileName(fileName), saveFileDialog.FileName);
                        MessageBox.Show(MainForm.instance, "File saved as\n" + saveFileDialog.FileName, "File saved.", MessageBoxButtons.OK, MessageBoxIcon.None);
                    }
                }
                else
                {
                    String fileName = "export.file";
                    SaveFileDialog saveFileDialog = new SaveFileDialog();
                    saveFileDialog.Title = "Save " + Path.GetExtension(fileName) + " Document";
                    saveFileDialog.Filter = Path.GetExtension(fileName) + " Files (*" + Path.GetExtension(fileName) + ")|*" + Path.GetExtension(fileName);
                    saveFileDialog.FileName = Path.GetFileName(Application.StartupPath + "\\export_file" + Path.GetExtension(fileName));
                    if (saveFileDialog.ShowDialog() == DialogResult.OK)
                    {
                        Sync.DownloadFile((int)listView1.SelectedItems[0].Tag, saveFileDialog.FileName);
                        MessageBox.Show(MainForm.instance, "File saved as\n" + saveFileDialog.FileName, "File saved.", MessageBoxButtons.OK, MessageBoxIcon.None);
                    }
                }
            }
        }

    }
}

using Ionic.Zip;
using Ionic.Zlib;
using RicherTextBox;
using RicherTextBoxDemo.DtO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace RicherTextBoxDemo.ArkosPadFiles
{
    public  class Files
    {
        System.Windows.Forms.TreeView treeView1;
        public Files(System.Windows.Forms.TreeView treeView1) 
        {
            this.treeView1 = treeView1;
        }  

        public  String getXmlFromFilename(String filename)
        {
            String file = "";
            if (filename != null)
            {
                if (filename != "")
                {
                    String xml = Globals.tempDir;
                    file = Path.GetFileName(filename.Substring(0, filename.LastIndexOf(".")));
                }
            }
            return Globals.tempDir + "\\data.xml";
        }

        private  void BackupDirectory(string directory, string target)
        {
            directory = directory.Replace("\\\\", "\\");

            using (ZipFile zip = new ZipFile
            {
                CompressionLevel = CompressionLevel.BestCompression
            })
            {
                var files = Directory.GetFiles(directory, "*",
                    System.IO.SearchOption.AllDirectories).ToArray();

                foreach (var f in files)
                {
                    zip.AddFile(f,
                        Path.GetDirectoryName(f).
                        Replace(directory, string.Empty));
                }

                zip.Save(target);
            }
        }

        public  void saveFiles()
        {
            try
            {
                BackupDirectory(Globals.tempDir, Globals._zipFileName);
                Globals.notSaved = false;
            }
            catch (Exception e)
            {
                MessageBox.Show(MainForm.instance, "Can't save file.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        public  void loadFiles(String filename)
        {
            if (Globals.tempDir != "")
            {
                Directory.CreateDirectory(Globals.tempDir);
                Ionic.Zip.ZipFile zf = new Ionic.Zip.ZipFile(Globals._zipFileName);
                zf.ExtractAll(Globals.tempDir, Ionic.Zip.ExtractExistingFileAction.OverwriteSilently);
                zf.Dispose();
                string[] files = Directory.GetFiles(Globals.tempDir);
                foreach (String f in files)
                {
                    if (f.Contains(".xml.dat") && !System.IO.File.Exists(Globals.tempDir + "\\" + "data.dat"))
                        File.Move(f, Globals.tempDir + "\\data.dat");
                    else if (f.Contains(".xml") && !f.Contains(".xml.dat") && !System.IO.File.Exists(Globals.tempDir + "\\" + "data.xml"))
                        File.Move(f, Globals.tempDir + "\\" + "data.xml");
                }

                foreach (String dir in Directory.GetDirectories(Globals.tempDir))
                {
                    if (!Directory.Exists(Globals.tempDir + "\\_dat"))
                        Directory.Move(dir, Globals.tempDir + "\\_dat");
                }
            }
        }

        public  void LoadInit(System.Windows.Forms.ListView listView1, RicherTextBox.RicherTextBox richerTextBox1)
        {
            if (Globals._zipFileName == "" || Globals._zipFileName == null)
                Globals._zipFileName = Registry.getFilename();

            if (Globals._zipFileName != "")
            {
                Globals.tempDir = Path.GetTempPath();
                String filePath = "";
                do
                {
                    filePath = Misc.Tools.RandomString(5);
                } while (Directory.Exists(Globals.tempDir + "\\" + filePath));
                Globals.tempDir = Path.GetTempPath() + "\\" + filePath;

                try
                {
                    Globals._filename = new ArkosPadFiles.Files(treeView1).getXmlFromFilename(Globals._zipFileName);
                    loadFiles(Globals._zipFileName);

                    TreeControl.TreeView treeView= new TreeControl.TreeView(treeView1);
                    treeView.populateTreeview(richerTextBox1,listView1,Globals._filename);
                }
                catch (Exception ex)
                {
                    MessageBox.Show(MainForm.instance, "Error creating temp file.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
        }

        public  bool exportToXml(RicherTextBox.RicherTextBox richerTextBox1, String m_filename = "", bool removeFocus = false)
        {
            bool isCloudOld = Globals.isCloud;
            Globals.isCloud = false;
            TreeNode n = treeView1.SelectedNode;
            if (n != null && n.Tag != null && ((XmlNodeData)n.Tag).ID!="1")
            {
                TreeItem i = Globals.data[((XmlNodeData)n.Tag).ID];
                if (richerTextBox1.Text.Trim().Length > 0)
                    i.data = richerTextBox1.Rtf;
                else
                    i.data = "";
                Globals.data[((XmlNodeData)n.Tag).ID] = i;
            }

            TreeView tv = treeView1;

            SaveFileDialog dlg = new SaveFileDialog();
            dlg.Title = "Save ArkosPad Document";
            dlg.Filter = "ArkosPad Files (*.arkospad)|*.arkospad";
            dlg.FileName = "New Project.arkospad";
            dlg.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);

            if (m_filename != "" || dlg.ShowDialog() == DialogResult.OK)
            {

                String filename = "";
                if (m_filename != "")
                {
                    filename = m_filename;
                }
                else
                {
                    filename = dlg.FileName;
                }

                try
                {

                    if (!filename.EndsWith(".xml"))
                    {




                        String filePath = "";
                        do
                        {
                            filePath = Misc.Tools.RandomString(5);
                        } while (Directory.Exists(Path.GetTempPath() + "\\" + filePath));

                        try
                        {
                            moveFiles(new ArkosPadFiles.Files(treeView1).getXmlFromFilename(Globals._zipFileName), Path.GetTempPath() + "\\" + filePath + "\\data.xml");
                        }
                        catch { }

                        Directory.CreateDirectory(Path.GetTempPath() + "\\" + filePath);
                        Directory.CreateDirectory(Path.GetTempPath() + "\\" + filePath + "\\_dat");
                        /*if(Globals.tempDir!="")
                            moveFiles(Globals.tempDir, Path.GetTempPath() + "\\" + filePath);*/

                        Globals.tempDir = Path.GetTempPath() + "\\" + filePath;

                        Globals._zipFileName = filename;

                        if (filename != Globals._zipFileName)
                        {
                            new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1,new ArkosPadFiles.Files(treeView1).getXmlFromFilename(filename));
                            File.Copy(Globals._zipFileName, filename, true);
                            return true;
                        }


                        filename = new ArkosPadFiles.Files(treeView1).getXmlFromFilename(filename);

                    }
                    else
                    {
                        Globals.notSaved = true;
                    }

                    if (!Directory.Exists(Globals.tempDir + "\\_dat"))
                        Directory.CreateDirectory(Globals.tempDir + "\\_dat");
                    StreamWriter sr = new StreamWriter(filename, false, System.Text.Encoding.UTF8);
                    sr.WriteLine("<?xml version=\"1.0\" encoding=\"utf-8\" ?>");
                    sr.WriteLine("<" + treeView1.Nodes[0].Text + ">");
                 
                    Nodes.saveNode(tv.Nodes[0].Nodes, sr, removeFocus, isCloudOld);
                    

                    sr.WriteLine("</" + treeView1.Nodes[0].Text + ">");
                    sr.Close();

                    try
                    {
                        File.Delete(Globals.tempDir + "\\data.dat");
                        DataStorage.SerializeNow(Globals.tempDir + "\\data.dat", Globals.data);
                        Microsoft.Win32.RegistryKey key;
                        key = Microsoft.Win32.Registry.CurrentUser.CreateSubKey("ArkosPad");
                        key.SetValue("LastFile", Globals._zipFileName);
                        key.Close();
                        Globals._filename = filename;
                        MainForm.instance.setFormCaption();
                        Globals.isCloud = isCloudOld;
                        return true;
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(MainForm.instance, "Can't save file.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show(MainForm.instance, "Can't save file.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            else
            {
                Globals.isCloud = isCloudOld;
                return false;
            }
            Globals.isCloud = isCloudOld;
            return false;
        }
        private  void moveFiles(String oldFile, String newFile)
        {
            String oldFileDir = Path.GetDirectoryName(oldFile) + "\\_dat";
            String newFileDir = Path.GetDirectoryName(newFile) + "\\_dat";

            if (Directory.Exists(oldFileDir))
            {
                try
                {
                    if (!Directory.Exists(newFileDir))
                        Directory.CreateDirectory(newFileDir);

                    foreach (String file in Directory.GetFiles(oldFileDir))
                    {
                        File.Copy(file, newFileDir + "\\" + Path.GetFileName(file));
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show(MainForm.instance, "Can't copy files.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    throw ex;
                }
            }
        }

        public  String copyFile(String oldFile)
        {
            String newFilePath = "";
            if (Globals._filename == "")
            {
                MessageBox.Show(MainForm.instance, "Please save your project first.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            else
            {
                String newFileDir = Path.GetDirectoryName(Globals._filename) + "\\_dat";

                if (!Directory.Exists(newFileDir))
                    Directory.CreateDirectory(newFileDir);



                do
                {
                    newFilePath = newFileDir + "\\" + Misc.Tools.RandomString(20) + "." + Path.GetExtension(oldFile);
                } while (File.Exists(newFilePath));

                File.Copy(oldFile, newFilePath);
            }
            return newFilePath;
        }

        public  void openFile(RicherTextBox.RicherTextBox richerTextBox1, ListView listView1)
        {
            Globals.tempDir = Path.GetTempPath();
            String filePath = "";
            do
            {
                filePath = Misc.Tools.RandomString(5);
            } while (Directory.Exists(Globals.tempDir + "\\" + filePath));
            Globals.tempDir = Path.GetTempPath() + "\\" + filePath;

            new  TreeControl.TreeView(treeView1).populateTreeview(richerTextBox1,listView1);
            MainForm.instance.setFormCaption();
            try
            {

                Microsoft.Win32.RegistryKey key;
                key = Microsoft.Win32.Registry.CurrentUser.CreateSubKey("ArkosPad");
                key.SetValue("LastFile", Globals._zipFileName);
                key.Close();
                MainForm.instance.setFormCaption();
            }
            catch (Exception ex)
            {
                MessageBox.Show(MainForm.instance, "Can't open file.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }


    }
}

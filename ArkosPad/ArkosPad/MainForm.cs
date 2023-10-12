using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Media;
using System.Net;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Runtime.InteropServices.ComTypes;
using System.Runtime.Remoting.Messaging;
using System.Windows.Forms;
using System.Xml;
using Ionic.Zip;
using Ionic.Zlib;
using Microsoft.VisualBasic;
using Microsoft.VisualBasic.Devices;
using Microsoft.VisualBasic.FileIO;
using Microsoft.Win32;
using RicherTextBox;
using static RicherTextBoxDemo.SaveLoad;


namespace RicherTextBoxDemo
{
    public partial class MainForm : Form
    {
        static bool closing = false;
        public const int WM_NCLBUTTONDOWN = 0xA1;
        public const int HT_CAPTION = 0x2;

        int maxWeight = 1;

        [DllImportAttribute("user32.dll")]
        private static extern int SendMessage(IntPtr hWnd,
                         int Msg, int wParam, int lParam);
        [DllImportAttribute("user32.dll")]
        private static extern bool ReleaseCapture();

        private int startTV;
        String _filename = "";
        String _zipFileName = "";
        public static Dictionary<String, TreeItem> data = new Dictionary<String, TreeItem>();
        private String selectedFile = "";
        private String tempDir = "";
        private System.Threading.Thread mainThread;
        public static bool isCloud = false;
        public static String cloudSession = "";
        public static String cloudURL = "";
        public void removeFocus()
        {
            exportToXml(_filename, true);
        }

        public int getNextID()
        {
            int max = 0;
            foreach(String key in data.Keys)
            {
                if (int.Parse(key) > max)
                    max = int.Parse(key);
            }
            return max+1;
        }   

        public void init()
        {
            richerTextBox1.HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.Alignment | RicherTextBoxToolStripGroups.BoldUnderlineItalic, false);

            richerTextBox1.HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.Alignment, true);
            richerTextBox1.HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.BoldUnderlineItalic, true);

            richerTextBox1.ToggleBold();
            richerTextBox1.SetFontSize(8.25f);
        }

        String idInit = null;

        public MainForm(String _key="")
        {
            if(!_key.Contains(".arkospad"))
                idInit = _key;
            else
                _zipFileName = _key;

            InitializeComponent();
            init();
            timer1.Start();
            RegisterUriScheme();
        }

        public void clearLbFiles()
        {
            listView1.Items.Clear();
        }

        public TreeNode getSelectedNode()
        {
            return treeView1.SelectedNode;
        }

        public void addLbFile(String filename)
        {
            listView1.Items.Add(filename);
        }

        public void addLbFile(ListViewItem filename)
        {
            listView1.Items.Add(filename);
        }

        

        public void setRtfContent(String content)
        {
            richerTextBox1.Rtf=content;
        }
        
        String getXmlFromFilename(String filename)
        {
            String file = "";
            if (filename !=null)
            {                
                if (filename != "")
                {
                    String xml = tempDir;
                    file = Path.GetFileName(filename.Substring(0, filename.LastIndexOf(".")));
                }
            }
            return tempDir + "\\" + file + ".xml";
        }

        public  void BackupDirectory(string directory, string target)
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
        private void saveFiles()
        {
            try
            {
                BackupDirectory(tempDir, _zipFileName);
                notSaved = false;
            }catch(Exception e)
            {
                MessageBox.Show(this,"Can't save file.","Error",MessageBoxButtons.OK,MessageBoxIcon.Error);
            }
        }

        private void loadFiles(String filename)
        {
            if (tempDir != "")
            {
                Directory.CreateDirectory(tempDir);
                Ionic.Zip.ZipFile zf = new Ionic.Zip.ZipFile(_zipFileName);
                zf.ExtractAll(tempDir, Ionic.Zip.ExtractExistingFileAction.OverwriteSilently);
                zf.Dispose();
            }
        }

        private void syncThread()
        {
            while(!closing)
            {
                DateTime dat=DateTime.Parse(new WebClient().DownloadString(cloudURL+"/api/Sync/GetLastSync"));
                if(Sync.lastSync!=dat)
                {
                    Sync.lastSync = dat;
                    treeView1.Invoke(new Action(()=> data = Sync.fetchNodes(treeView1)));
                }
                System.Threading.Thread.Sleep(1000);
            }
        }

        private void MainForm_Load(object sender, EventArgs e)
        {
            RegisterForFileExtension(".arkospad", System.Reflection.Assembly.GetExecutingAssembly().Location);
            

            if(_zipFileName=="" || _zipFileName==null)
                _zipFileName = Registry.getFilename();

            if (_zipFileName != "")
            {
                tempDir = Path.GetTempPath();
                String filePath = "";
                do {
                    filePath = RandomString(5);
                } while (Directory.Exists(tempDir + "\\" + filePath));
                tempDir = Path.GetTempPath() + "\\" + filePath;

                try
                {                    
                    _filename = getXmlFromFilename(_zipFileName);
                    loadFiles(_zipFileName);
                   
                    populateTreeview(_filename);
                }catch(Exception ex)
                {
                    MessageBox.Show(this, "Error creating temp file.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }

            menuStrip1.Renderer = new NewColourRenderer();
        }

        private void treeView1_MouseClick(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right)
            {
                treeView1.SelectedNode = treeView1.GetNodeAt(treeView1.PointToClient(Cursor.Position));
                contextMenuStrip1.Show(Cursor.Position);
            }
        }

      

        private void treeView1_AfterSelect(object sender, TreeViewEventArgs e)
        {
            setFormCaption();
            listView1.Items.Clear();
            TreeItems.SelectedItem(this,data);
        }

        private void treeView1_MouseUp(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right)
                contextMenuStrip1.Show(Cursor.Position);
        }

        private void addToolStripMenuItem_Click(object sender, EventArgs e)
        {
            New n = new New();
            if(n.ShowDialog()==DialogResult.OK)
            {
                notSaved = true;
                String name = n.mName;
                int weight = int.Parse(n.Weight);
                TreeItem ti = new TreeItem();
                ti.name = name;
                ti.weight = maxWeight + 1;
                maxWeight++;
                ti.data = "<p></p>";
                int id = getNextID();
                data.Add(id.ToString(), ti);
                TreeNode sel = treeView1.SelectedNode;
                TreeNode newNode= new TreeNode();
                newNode.Name = name+id.ToString();
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

                if (isCloud)
                {
                    Sync.UpdateOrAddNode(" ", ti.weight, newNode);
                    treeView1.Nodes.Remove(newNode);
                }
            }

            if (_filename != "")
            {
                exportToXml(_filename);
            }
        }

        private void richerTextBox1_Leave(object sender, EventArgs e)
        {
            TreeNode n = treeView1.SelectedNode;
            if(n!=null && n.Tag!=null)
            {
                String tag = ((XmlNodeData)n.Tag).ID;
                TreeItem i = data[tag];
                if (richerTextBox1.Text.Trim().Length > 0)
                {
                    if (i.data != richerTextBox1.Rtf)
                    {
                        i.data = richerTextBox1.Rtf;
                        Sync.UpdateOrAddNode(data[((XmlNodeData)n.Tag).ID].data, data[((XmlNodeData)n.Tag).ID].weight, n);
                    }
                }
                else
                {
                    if (i.data != "")
                    {
                        i.data = "";
                        Sync.UpdateOrAddNode(data[((XmlNodeData)n.Tag).ID].data, data[((XmlNodeData)n.Tag).ID].weight, n);
                    }
                }

                i.data = richerTextBox1.Rtf;
                data[tag] = i;

                if(_filename!="")
                {
                    exportToXml(_filename);
                }               
            }
        }

        public void moveFiles(String oldFile, String newFile)
        {
            String oldFileDir = Path.GetDirectoryName(oldFile)+"\\"+Path.GetFileName(oldFile)+"_dat";
            String newFileDir = Path.GetDirectoryName(newFile) + "\\" + Path.GetFileName(newFile) + "_dat";

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
                    MessageBox.Show(this, "Can't copy files.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    throw ex;
                }
            }
        }

        public String copyFile(String oldFile)
        {
            String newFilePath = "";
            if (_filename == "")
            {
                MessageBox.Show(this,"Please save your project first.","Error",MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            else
            {
                String newFileDir = Path.GetDirectoryName(_filename) + "\\" + Path.GetFileName(_filename) + "_dat";

                if (!Directory.Exists(newFileDir))
                    Directory.CreateDirectory(newFileDir);


             
                do
                {
                    newFilePath = newFileDir + "\\" + RandomString(20)+"."+Path.GetExtension(oldFile);
                } while (File.Exists(newFilePath));

                File.Copy(oldFile, newFilePath);
            }
            return newFilePath;
        }

        private static Random random = new Random();

        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
        private bool notSaved = false;
        public bool exportToXml(String m_filename="", bool removeFocus=false)
        {
            TreeNode n = treeView1.SelectedNode;
            if (n != null && n.Tag != null)
            {                
                TreeItem i = data[((XmlNodeData)n.Tag).ID];
                if (richerTextBox1.Text.Trim().Length > 0)
                    i.data = richerTextBox1.Rtf;
                else
                    i.data = "";
                data[((XmlNodeData)n.Tag).ID] = i;
            }

            TreeView tv = treeView1;

            SaveFileDialog dlg = new SaveFileDialog();
            dlg.Title = "Save ArkosPad Document";
            dlg.Filter = "ArkosPad Files (*.arkospad)|*.arkospad";
            dlg.FileName = "New Project.arkospad";
            dlg.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);

            if ( m_filename!="" || dlg.ShowDialog() == DialogResult.OK)
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
                    
                    if(!filename.EndsWith(".xml"))
                    {



                   
                        String filePath = "";
                        do
                        {
                            filePath = RandomString(5);
                        } while (Directory.Exists(Path.GetTempPath() + "\\" + filePath));

                        try
                        {
                            moveFiles(getXmlFromFilename(_zipFileName), Path.GetTempPath() + "\\" + filePath + "\\" + Path.GetFileName(filename.Substring(0, filename.LastIndexOf(".")) + ".xml"));
                        }
                        catch { }

                        Directory.CreateDirectory(Path.GetTempPath() + "\\" + filePath);
                        Directory.CreateDirectory(Path.GetTempPath() + "\\" + filePath + "\\" + Path.GetFileName(filename) + "_dat");
                        /*if(tempDir!="")
                            moveFiles(tempDir, Path.GetTempPath() + "\\" + filePath);*/
                        
                        tempDir = Path.GetTempPath() + "\\" + filePath;
                     
                        _zipFileName = filename;

                        if (filename != _zipFileName)
                        {
                            exportToXml(getXmlFromFilename(filename));
                            File.Copy(_zipFileName, filename, true);
                            return true;
                        }


                        filename = getXmlFromFilename(filename);
                        
                    }
                    else
                    {
                        notSaved = true;
                    }

                    
                    StreamWriter sr = new StreamWriter(filename, false, System.Text.Encoding.UTF8);
                    sr.WriteLine("<?xml version=\"1.0\" encoding=\"utf-8\" ?>");
                    sr.WriteLine("<" + treeView1.Nodes[0].Text + ">");
                    foreach (TreeNode node in tv.Nodes)
                    {
                        SaveLoad.saveNode(node.Nodes, sr, removeFocus);
                    }

                    sr.WriteLine("</" + treeView1.Nodes[0].Text + ">");
                    sr.Close();

                    try
                    {
                        File.Delete(filename + ".dat");
                        DataStorage.SerializeNow(filename + ".dat", data);
                        Microsoft.Win32.RegistryKey key;
                        key = Microsoft.Win32.Registry.CurrentUser.CreateSubKey("ArkosPad");
                        key.SetValue("LastFile", _zipFileName);
                        key.Close();
                        this._filename = filename;
                        setFormCaption();
                        return true;
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(this, "Can't save file.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                }catch(Exception ex)
                {
                    MessageBox.Show(this, "Can't save file.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            else
            {
                return false;
            }
            return false;
        }

        private void populateTreeview(String filename="")
        {
            richerTextBox1.File = filename;

            OpenFileDialog dlg = new OpenFileDialog();
           
            OpenFile f = new OpenFile();
            if (filename != ""|| f.ShowDialog()==DialogResult.OK )
            {

                isCloud = f.isCloud;
             

                if(f.isCloud)
                {
                    cloudSession = f.session;
                    cloudURL = f.url;
                    mainThread = new System.Threading.Thread(syncThread);
                    mainThread.Start();
                }
                else
                {
                    treeView1.Nodes.Clear();
                    bool mdlg = false;
                    if (filename == "")
                    {
                        mdlg = true;
                        filename = f.file;
                        _zipFileName = filename;
                        if (!isCloud)
                            loadFiles(filename);
                        filename = getXmlFromFilename(filename);
                        richerTextBox1.File = filename;
                        _filename = filename;
                    }

                    try
                {       
                    if (!File.Exists(filename + ".dat")&&mdlg)
                    {
                        MessageBox.Show(this, ".dat file not found.", "Error");
                    }
                    else
                    {
                        data=DataStorage.DeSerializeNow(filename + ".dat");
                        XmlDocument xDoc = new XmlDocument();
                        xDoc.Load(filename);
                        treeView1.Nodes.Clear();
                        treeView1.Nodes.Add(new
                          TreeNode(xDoc.DocumentElement.Name));
                        TreeNode tNode = new TreeNode();
                        tNode = (TreeNode)treeView1.Nodes[0];
                        new SaveLoad().addTreeNode(xDoc.DocumentElement, tNode,data,this.idInit);
                        treeView1.ExpandAll();
                        listView1.Clear();
                        this._filename = filename;
                        setFormCaption();

                        foreach(TreeItem itm in data.Values)
                        {
                            if(itm.weight>maxWeight)
                                    maxWeight=itm.weight;
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

        


        private void openToolStripMenuItem_Click(object sender, EventArgs e)
        {           
            populateTreeview();
            setFormCaption();
            try
            {
                          
                Microsoft.Win32.RegistryKey key;
                key = Microsoft.Win32.Registry.CurrentUser.CreateSubKey("ArkosPad");
                key.SetValue("LastFile", _zipFileName);
                key.Close();                
                setFormCaption();
            }
            catch (Exception ex)
            {
                MessageBox.Show(this, "Can't save file.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void saveToolStripMenuItem_Click(object sender, EventArgs e)
        {
            
            exportToXml();           
            saveFiles();
            
        }

        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (notSaved)
            {
                DialogResult r = MessageBox.Show(this, "Do you want to save the project?", "Save Project", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Exclamation);
                if (r == DialogResult.Yes)
                {
                    if (exportToXml(_filename))
                    {
                        saveFiles();
                        Application.Exit();
                    }
                }
                else if (r == DialogResult.No)
                {
                    Application.Exit();
                }
            }
            else
            {
                Application.Exit();
            }
        }

        private void newToolStripMenuItem_Click(object sender, EventArgs e)
        {
            treeView1.Nodes.Clear();            
            treeView1.Nodes.Add("Root");
            listView1.Clear();
            richerTextBox1.Text = "";
            _filename = "";
            _zipFileName = "";
            tempDir = "";
            data = new Dictionary<String, TreeItem>();
            setFormCaption();
            notSaved = true;
        }



        private void deleteToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if(treeView1.SelectedNode!=null&&treeView1.SelectedNode.Tag!=null)
            {
                if(isCloud)
                    Sync.DeleteNode(treeView1.SelectedNode);
                else
                    removeNode(treeView1.SelectedNode);
                notSaved = true;
            }

            if (_filename != "")
            {
                notSaved = true;
                exportToXml(_filename);
            }
        }

        private void removeNode(TreeNode node)
        {
            while (node.Nodes.Count > 0)
                removeNode(node.Nodes[0]);
            data.Remove(((XmlNodeData)node.Tag).ID);
            node.Remove();
            
        }

        private void renameToolStripMenuItem_Click(object sender, EventArgs e)
        {
            notSaved = true;
            treeView1.LabelEdit = true;
            treeView1.SelectedNode.BeginEdit();            
        }

        private void treeView1_AfterLabelEdit_1(object sender, NodeLabelEditEventArgs e)
        {
            treeView1.LabelEdit = false;
            if (treeView1.SelectedNode != null && treeView1.SelectedNode.Tag != null)
            {
                String idx = ((XmlNodeData)treeView1.SelectedNode.Tag).ID;
                treeView1.SelectedNode.Text = e.Label;
                data[idx].name = e.Label;

                if (_filename != "")
                {
                    exportToXml(_filename);
                }
            }
        }

        private void setFormCaption()
        {
            String s1 = "ArkosPad v3.1  ";
            String s2 = "";
            String s3 = "";
            if (!isCloud)
            {
                if (_zipFileName != null && _zipFileName != "")
                {
                    s2 = "- " + _zipFileName + " ";
                }
            }
            else
            {
                s2 = "- <Cloud> ";
            }
            String breadcrumb = "";
            if (treeView1.SelectedNode != null)
            {
                TreeNode node= treeView1.SelectedNode;
                while (node != null&&(node.Parent != null || node.Text=="Root"))
                {
                    if (breadcrumb == "")
                        breadcrumb = node.Text;
                    else
                        breadcrumb = node.Text +"::"+breadcrumb;
                    node= node.Parent;
                }
                s3 = "- " + breadcrumb;
            }
            label4.Text = s1 + s2 + s3;
        }

        private void exportToMindMapToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TreeView tv = treeView1;

            SaveFileDialog dlg = new SaveFileDialog();
            dlg.Title = "Open .mm Document";
            dlg.Filter = "Mindmap Files (*.mm)|*.mm";
            dlg.FileName = Application.StartupPath + "\\export.mm";
            if (dlg.ShowDialog() == DialogResult.OK)
            {
                String filename = "";
                filename = dlg.FileName;

                StreamWriter sr = new StreamWriter(filename, false, System.Text.Encoding.UTF8);
                sr.Write(File.ReadAllText("templates\\mm_header.mm"));
                SaveLoad.exportNodeToMindmap(tv.SelectedNode.Nodes, sr);
                
                sr.Write(File.ReadAllText("templates\\mm_footer.mm"));
                sr.Close();
                MessageBox.Show(this, "Export successfull.", "Success");
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            AddFileDialog dlg= new AddFileDialog();
            if(dlg.ShowDialog()== DialogResult.OK)
            {
                String caption = dlg.caption;
                String file = dlg.file;
                if(treeView1.SelectedNode!=null)
                { 
                TreeNode n = treeView1.SelectedNode;
                if (n.Tag != null)
                {
                        String tag = ((XmlNodeData)n.Tag).ID;
                    if (data.ContainsKey(tag))
                    {
                        //    if (data.Values.Where(a => a.name == caption).Count() > 0)
                          //  {
                            //    MessageBox.Show(this, "An item with that caption does allready exist.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                           // }
                            //else
                            {
                                try
                                {
                                    if (!isCloud)
                                    {
                                        String m_data = data[tag].data;
                                        String origName = file;
                                        file = copyFile(file);
                                        if (file != "")
                                        {
                                            FileItem item = new FileItem() { caption = Path.GetFileName(origName), filepath = Path.GetFileName(file) };
                                            listView1.Items.Add(item.caption);


                                            data[tag].files.Add(item);


                                            if (_filename != "")
                                            {
                                                exportToXml(_filename);
                                            }
                                        }                                   
                                    }
                                    else
                                    {
                                        Sync.UploadFile(file, int.Parse(tag));
                                    }
                                }
                                catch(Exception ex) {
                                    MessageBox.Show(this, "Unable to add file.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                                }
                            }
                        }
                    }
                }
            }
        }
    
        private void listView1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listView1.SelectedItems.Count > 0)
                selectedFile = listView1.SelectedItems[0].Text;  
        }

        private void listView1_DoubleClick(object sender, EventArgs e)
        {
            TreeNode n = treeView1.SelectedNode;
            if (n != null)
            {
                String fileName = "";
                if (n.Tag != null)
                {
                    String tag = ((XmlNodeData)n.Tag).ID;
                    if (data.ContainsKey(tag))
                    {
                        fileName = data[tag].files.Where(a => a.caption == listView1.SelectedItems[0].Text).First().filepath;
                        fileName = Path.GetDirectoryName(_filename) + "\\" + Path.GetFileName(_filename) + "_dat" + "\\" + fileName;
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
                            MessageBox.Show(this, "The file does not exist.");
                        }
                    }
                }
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            try
            {
                TreeNode n = treeView1.SelectedNode;
                if (n.Tag != null)
                {
                    String tag = ((XmlNodeData)n.Tag).ID;
                    if (data.ContainsKey(tag))
                    {
                        IEnumerable<FileItem> items = data[tag].files.Where(a => a.caption == selectedFile);
                        if (items.Count() > 0)
                        {
                            listView1.Items.Remove(listView1.SelectedItems[0]);
                            data[tag].files.Remove(items.First());
                            Files.updateFileList(this);
                            this.exportToXml(_filename);
                        }
                    }
                }
            }
            catch { }
        }

        private void richerTextBox1_Load(object sender, EventArgs e)
        {

        }

        private void saveToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            TreeNode n = treeView1.SelectedNode;
            if (n != null && n.Tag != null)
            {
                String tag = ((XmlNodeData)n.Tag).ID;
                TreeItem i = data[tag];
                if (richerTextBox1.Text.Trim().Length > 0)
                    i.data = richerTextBox1.Rtf;
                else
                    i.data = "";
                data[tag] = i;

                if (_filename != "")
                {
                    exportToXml(_filename);
                }
                else
                {
                    exportToXml();
                }
                saveFiles();
                SystemSounds.Beep.Play();
            }
        }

        private void upToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (treeView1.SelectedNode != null && treeView1.SelectedNode.Tag != null)
            {
                moveNodeUp(treeView1.SelectedNode);                
                notSaved = true;
            }            
        }

        private void downToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (treeView1.SelectedNode != null && treeView1.SelectedNode.Tag != null)
            {
                moveNodeDown(treeView1.SelectedNode);
                notSaved = true;
            }
        }

        private void moveNodeUp(TreeNode node)
        {
            String origID = ((XmlNodeData)node.Tag).ID;
            TreeItem origData = data[origID];

            int iPreviousID = -1;
            TreeNode previousNode=null;

            if (node.Index >= 1)
            {
                previousNode = node.Parent.Nodes[node.Index - 1];

                iPreviousID = int.Parse(((XmlNodeData)previousNode.Tag).ID);

                if (iPreviousID != -1)
                {
                    int tmpWeight = data[origID].weight;
                    data[origID].weight = data[iPreviousID.ToString()].weight;
                    data[iPreviousID.ToString()].weight = tmpWeight;
                    /*
                    if (treeView1.SelectedNode.Parent.Nodes.ContainsKey(iPreviousID.ToString()))
                    {
                        TreeItem previousData = data[iPreviousID.ToString()];


                        data.Remove(iPreviousID.ToString());
                        data.Remove(origID);

                        data.Add(origID, previousData);
                        data.Add(iPreviousID.ToString(), origData);

                        int tmpWeight = data[origID].weight;
                        data[origID].weight = data[iPreviousID.ToString()].weight;
                        data[iPreviousID.ToString()].weight = tmpWeight;
                    }*/

                    if (isCloud)
                    {
                        Sync.UpdateOrAddNode(data[origID].data, data[origID].weight, node);
                        Sync.UpdateOrAddNode(data[iPreviousID.ToString()].data, data[iPreviousID.ToString()].weight, node.Parent.Nodes[node.Index - 1]);
                    }
                    else
                    {
                        MoveUp(node);
                    }
                }



                //MoveUp(treeView1.SelectedNode);
                notSaved = true;
            }
            //exportToXml(_filename);
        }

        private void moveNodeDown(TreeNode node)
        {
            String origID = ((XmlNodeData)node.Tag).ID;
            TreeItem origData = data[origID];

            int iPreviousID = -1;
            TreeNode previousNode = null;

            if (node.Parent.Nodes.Count >= node.Index + 1)
            {
                previousNode = node.Parent.Nodes[node.Index + 1];

                iPreviousID = int.Parse(((XmlNodeData)previousNode.Tag).ID);

                if (iPreviousID != -1)
                {
                    int tmpWeight = data[origID].weight;
                    data[origID].weight = data[iPreviousID.ToString()].weight;
                    data[iPreviousID.ToString()].weight = tmpWeight;
                    /*
                    if (treeView1.SelectedNode.Parent.Nodes.ContainsKey(iPreviousID.ToString()))
                    {
                        TreeItem previousData = data[iPreviousID.ToString()];


                        data.Remove(iPreviousID.ToString());
                        data.Remove(origID);

                        data.Add(origID, previousData);
                        data.Add(iPreviousID.ToString(), origData);

                        int tmpWeight = data[origID].weight;
                        data[origID].weight = data[iPreviousID.ToString()].weight;
                        data[iPreviousID.ToString()].weight = tmpWeight;
                    }*/
                }


                if (isCloud)
                {
                    Sync.UpdateOrAddNode(data[origID].data, data[origID].weight, node);
                    Sync.UpdateOrAddNode(data[iPreviousID.ToString()].data, data[iPreviousID.ToString()].weight, node.Parent.Nodes[node.Index + 1]);
                }
                else
                {
                    MoveDown(node);
                }
                notSaved = true;
            }
            // exportToXml(_filename);
        }
        //https://stackoverflow.com/questions/2203975/move-node-in-tree-up-or-down
        public  void MoveUp(TreeNode node)
        {
            TreeNode parent = node.Parent;
            TreeView view = node.TreeView;
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

        public  void MoveDown(TreeNode node)
        {
            TreeNode parent = node.Parent;
            TreeView view = node.TreeView;
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
            Sync.UpdateOrAddNode(data[((XmlNodeData)node.Tag).ID].data, data[((XmlNodeData)node.Tag).ID].weight, node);
        }

        private void MainForm_KeyUp(object sender, KeyEventArgs e)
        {
            if(e.KeyCode == Keys.S && e.Modifiers==Keys.Control)
            {
                exportToXml();
            }
        }

        private void richerTextBox1_KeyUp(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.S && e.Modifiers == Keys.Control)
            {
                exportToXml();
            }
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
                if (richerTextBox1.save)
            {
                richerTextBox1.save = false;
                try                      
                {
                    this.Invoke(new Action(() => { exportToXml(_filename); saveFiles(); })) ;
                    SystemSounds.Beep.Play();

                }
                catch(Exception ex)
                {                 
                }                   
            }

            if (this.richerTextBox1.linkClicked != null)
            {
                this.Invoke(new Action(() => { exportToXml(_filename); saveFiles(); }));
                Process.Start("arkospad:" + this.richerTextBox1.linkClicked.ToString());
            }
        }

        private void contextMenuStrip1_Opening(object sender, System.ComponentModel.CancelEventArgs e)
        {

        }

        private void focusToolStripMenuItem_Click(object sender, EventArgs e)
        {

            String data = ((XmlNodeData)treeView1.SelectedNode.Tag).ID;
            if (data != null) { 
            bool oldFocus= MainForm.data[data].focus;
            removeFocus();

            MainForm.data[data].focus = !oldFocus;
            exportToXml(_filename);
            notSaved = true;
            }
        }

        private void menuStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {

        }

        const string UriScheme = "arkospad";
        const string FriendlyName = "ArkosPad Tree Reference";

        public static void RegisterUriScheme()
        {
            using (var key = Microsoft.Win32.Registry.CurrentUser.CreateSubKey("SOFTWARE\\Classes\\" + UriScheme))
            {
                // Replace typeof(App) by the class that contains the Main method or any class located in the project that produces the exe.
                // or replace typeof(App).Assembly.Location by anything that gives the full path to the exe
                string applicationLocation = typeof(MainForm).Assembly.Location;

                key.SetValue("", "URL:" + FriendlyName);
                key.SetValue("URL Protocol", "");

                using (var defaultIcon = key.CreateSubKey("DefaultIcon"))
                {
                    defaultIcon.SetValue("", applicationLocation + ",1");
                }

                using (var commandKey = key.CreateSubKey(@"shell\open\command"))
                {
                    commandKey.SetValue("", "\"" + applicationLocation + "\" \"%1\"");
                }
            }
        }

        private void richerTextBox1_MouseClick(object sender, MouseEventArgs e)
        {
            
        }

        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            if (notSaved)
            {
                DialogResult r = MessageBox.Show(this, "Do you want to save the project?", "Save Project", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Exclamation);
                if (r == DialogResult.Yes)
                {
                    if (exportToXml(_filename))
                    {
                        saveFiles();
                        closing = true;
                        Application.Exit();
                    }
                }
                else if (r == DialogResult.No)
                {
                    closing = true;
                    Application.Exit();
                }
                else
                {
                    e.Cancel = true;
                }
            }
            else
            {
                closing = true;
                Application.Exit();
            }
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            Process.Start("mailto:decipher2k20@gmail.com");
        }


        private static void RegisterForFileExtension(string extension, string applicationPath)
        {
            RegistryKey FileReg = Microsoft.Win32.Registry.CurrentUser.CreateSubKey("Software\\Classes\\" + extension);
            FileReg.CreateSubKey("shell\\open\\command").SetValue("", $"\"{applicationPath}\" \"%1\"");
            FileReg.Close();

            SHChangeNotify(0x08000000, 0x0000, IntPtr.Zero, IntPtr.Zero);
        }
        [DllImport("shell32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        public static extern void SHChangeNotify(uint wEventId, uint uFlags, IntPtr dwItem1, IntPtr dwItem2);

        private void listView1_MouseClick(object sender, MouseEventArgs e)
        {
           
        }

        private void listView1_Click(object sender, EventArgs e)
        {
            
        }

        private void menuStrip2_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {
          
        }

        private void listView1_MouseUp(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right && listView1.SelectedItems.Count>0)
                contextMenuStrip2.Show(Cursor.Position);
        }

        private void contextMenuStrip2_Opening(object sender, System.ComponentModel.CancelEventArgs e)
        {
            //save file
        
        }

        private void contextMenuStrip2_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {
            try
            {
                if (e.ClickedItem == toolStripMenuItem9)
                {
                    TreeNode n = treeView1.SelectedNode;
                    if (n != null)
                    {
                        String fileName = "";
                        if (n.Tag != null)
                        {
                            String tag = ((XmlNodeData)n.Tag).ID;
                            if (data.ContainsKey(tag))
                            {
                                if (!isCloud)
                                {

                                    fileName = data[tag].files.Where(a => a.caption == listView1.SelectedItems[0].Text).First().filepath;
                                    fileName = Path.GetDirectoryName(_filename) + "\\" + Path.GetFileName(_filename) + "_dat" + "\\" + fileName;
                                    SaveFileDialog saveFileDialog = new SaveFileDialog();
                                    saveFileDialog.Title = "Save " + Path.GetExtension(fileName) + " Document";
                                    saveFileDialog.Filter = Path.GetExtension(fileName) + " Files (*" + Path.GetExtension(fileName) + ")|*" + Path.GetExtension(fileName);
                                    saveFileDialog.FileName = Path.GetFileName(Application.StartupPath + "\\export_file" + Path.GetExtension(fileName));
                                    if (saveFileDialog.ShowDialog() == DialogResult.OK)
                                    {
                                        File.Copy(Path.GetDirectoryName(_filename) + "\\" + Path.GetFileName(_filename) + "_dat" + "\\" + Path.GetFileName(fileName), saveFileDialog.FileName);
                                        MessageBox.Show(this, "File saved as\n" + saveFileDialog.FileName, "File saved.", MessageBoxButtons.OK, MessageBoxIcon.None);
                                    }
                                }
                                else
                                {
                                    SaveFileDialog saveFileDialog = new SaveFileDialog();
                                    saveFileDialog.Title = "Save " + Path.GetExtension(fileName) + " Document";
                                    saveFileDialog.Filter = Path.GetExtension(fileName) + " Files (*" + Path.GetExtension(fileName) + ")|*" + Path.GetExtension(fileName);
                                    saveFileDialog.FileName = Path.GetFileName(Application.StartupPath + "\\export_file" + Path.GetExtension(fileName));
                                    if (saveFileDialog.ShowDialog() == DialogResult.OK)
                                    {
                                        Sync.DownloadFile((int)listView1.SelectedItems[0].Tag, saveFileDialog.FileName);
                                        MessageBox.Show(this, "File saved as\n" + saveFileDialog.FileName, "File saved.", MessageBoxButtons.OK, MessageBoxIcon.None);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(this, "Can't save file.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void menuStrip1_KeyDown(object sender, KeyEventArgs e)
        {
           
        }

        private void menuStrip1_MouseDown(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                ReleaseCapture();
                SendMessage(Handle, WM_NCLBUTTONDOWN, HT_CAPTION, 0);
            }
        }

        private void label4_MouseDown(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                ReleaseCapture();
                SendMessage(Handle, WM_NCLBUTTONDOWN, HT_CAPTION, 0);
            }
        }

        private void panel4_Paint(object sender, PaintEventArgs e)
        {

        }
        private class NewColourRenderer : ToolStripProfessionalRenderer
        {
            public NewColourRenderer() : base(new MyColours()) { }
        }
        private class MyColours : ProfessionalColorTable
        {
            public override Color MenuItemSelected
            {
                get { return Color.Black; }
            }
            public override Color MenuItemSelectedGradientBegin
            {
                get { return Color.Black; }
            }
            public override Color MenuItemSelectedGradientEnd
            {
                get { return Color.Black; }
            }

            public override Color MenuItemPressedGradientBegin
            {
                get { return Color.Black; }
            }

            public override Color MenuItemPressedGradientEnd
            {
                get { return Color.Black; }
            }
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Minimized;
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void uploadToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show(this, "Warning! This will delete all content saved in the cloud!\nContinue?", "Warning", MessageBoxButtons.YesNo, MessageBoxIcon.Exclamation) == DialogResult.Yes)
            {
                if (!isCloud)
                {
                    OpenFileDialog dlg = new OpenFileDialog();

                    OpenFile f = new OpenFile(true);
                    if (f.ShowDialog() == DialogResult.OK)
                    {

                        isCloud = f.isCloud;

                        if (f.isCloud)
                        {
                            cloudSession = f.session;
                            cloudURL = f.url;
                        }
                    }

                    if (isCloud)
                    {
                        Sync.Clear();
                        foreach (TreeNode node in treeView1.Nodes)
                        {
                            StreamWriter sr = new StreamWriter(".\\tmp", false, System.Text.Encoding.UTF8);
                            SaveLoad.saveNode(node.Nodes, sr, false);
                        }
                        mainThread = new System.Threading.Thread(syncThread);
                        mainThread.Start();
                    }
                }
            }
        }

        private void toolStripMenuItem9_Click(object sender, EventArgs e)
        {

        }
    }
}

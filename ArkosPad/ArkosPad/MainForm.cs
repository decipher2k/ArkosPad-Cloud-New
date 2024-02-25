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
using RicherTextBoxDemo.ArkosPadFiles;
using RicherTextBoxDemo.Attachments;
using RicherTextBoxDemo.DtO;
using RicherTextBoxDemo.TreeControl;
using static RicherTextBoxDemo.ArkosPadFiles.Nodes;


namespace RicherTextBoxDemo
{
    public partial class MainForm : Form
    {
        public static bool closing = false;
        public const int WM_NCLBUTTONDOWN = 0xA1;
        public const int HT_CAPTION = 0x2;

      

        [DllImportAttribute("user32.dll")]
        private static extern int SendMessage(IntPtr hWnd,
                         int Msg, int wParam, int lParam);
        [DllImportAttribute("user32.dll")]
        private static extern bool ReleaseCapture();

        private int startTV;
        public String selectedFile = "";
        private System.Threading.Thread mainThread;
        public static MainForm instance;
        TreeControl.TreeView treeView;

        public void removeFocus()
        {
            new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1,Globals._filename, true);
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
            instance = this;
            if(!_key.Contains(".arkospad"))
                idInit = _key;
            else
                Globals._zipFileName = _key;

            InitializeComponent();
            init();
            timer1.Start();
            Misc.Tools.RegisterUriScheme();
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
                     
        private void resetSyncThread()
        {
            System.Threading.Thread.Sleep(3000);
            label5.Invoke(new Action(() => {try {if (label5.IsHandleCreated) label5.ForeColor = Color.White; } catch { } }));
        }
    

        public void syncThread()
        {
            while(!closing)
            {
                DateTime dat=DateTime.Parse(new WebClient().DownloadString(Globals.cloudURL+"/api/Sync/GetLastSync"));
                if(Sync.lastSync!=dat)
                {
                    Sync.lastSync = dat;
                    treeView1.Invoke(new Action(()=> Globals.data = Sync.fetchNodes(treeView1)));
                    label5.Invoke(new Action(() => label5.Text = "Last Synchronisation: " + DateTime.Now.ToShortTimeString())); label5.ForeColor = Color.LightGreen;};
                System.Threading.Thread t = new System.Threading.Thread(resetSyncThread);
                t.Start();
                System.Threading.Thread.Sleep(1000);
            }
            closing = false;
        }

        private void MainForm_Load(object sender, EventArgs e)
        {
            new Splash().ShowDialog();
            treeView = new TreeControl.TreeView(treeView1);
            Misc.Tools.RegisterForFileExtension(".arkospad", System.Reflection.Assembly.GetExecutingAssembly().Location);
            new ArkosPadFiles.Files(treeView1).LoadInit(listView1,richerTextBox1);
            menuStrip1.Renderer = new Misc.Tools.NewColourRenderer();
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
            TreeItems.SelectedItem(this,listView1,treeView1,Globals.data);
        }

        private void treeView1_MouseUp(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right)
                contextMenuStrip1.Show(Cursor.Position);
        }

        private void addToolStripMenuItem_Click(object sender, EventArgs e)
        {            
            new TreeItems().addItem(treeView1, richerTextBox1);
        }

        private void richerTextBox1_Leave(object sender, EventArgs e)
        {
            new TreeControl.TreeView(treeView1).loadTreeData(richerTextBox1);
        }                          


        private void openToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new ArkosPadFiles.Files(treeView1).openFile(richerTextBox1,listView1);              
        }

        private void saveToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1);
            new ArkosPadFiles.Files(treeView1).saveFiles();            
        }

        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (Globals.notSaved)
            {
                DialogResult r = MessageBox.Show(this, "Do you want to save the project?", "Save Project", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Exclamation);
                if (r == DialogResult.Yes)
                {
                    if (new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1,Globals._filename))
                    {
                        new ArkosPadFiles.Files(treeView1).saveFiles();
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
            if (Globals.isCloud)
                closing = true;
            else
                closing = false;

            treeView1.Nodes.Clear();            
            treeView1.Nodes.Add("Root");            
            richerTextBox1.Text = "";
            Globals._filename = "";
            Globals._zipFileName = "";
            Globals.tempDir = "";
            Globals.isCloud = false;
            Globals._maxWeight = 1;
            Globals.data = new Dictionary<String, TreeItem>();
            setFormCaption();
            Globals.notSaved = true;
        }



        private void deleteToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if(treeView1.SelectedNode!=null&&treeView1.SelectedNode.Tag!=null)
            {
                if (Globals.isCloud)
                {
                    try
                    {
                        Sync.DeleteNode(treeView1.SelectedNode);
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(this, "Please remove all subnodes first!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                }
                else
                {
                    new TreeControl.TreeView(treeView1).removeNode(treeView1.SelectedNode);
                }
                Globals.notSaved = true;
            }

            if (Globals._filename != "")
            {
                Globals.notSaved = true;
                new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1, Globals._filename);
            }
        }

        private void renameToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Globals.notSaved = true;
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
                Globals.data[idx].name = e.Label;

                if (Globals._filename != "")
                {
                    new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1,Globals._filename);
                }
            }
        }

        public void setFormCaption()
        {
            String s1 = "ArkosPad v3.2  ";
            String s2 = "";
            String s3 = "";
            if (!Globals.isCloud)
            {
                if (Globals._zipFileName != null && Globals._zipFileName != "")
                {
                    s2 = "- " + Globals._zipFileName + " ";
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
            ArkosPadFiles.MindMap.exportToMindMap(treeView1);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            new Attachments.Files(listView1, treeView1).addFile(richerTextBox1);
        }
    
        private void listView1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listView1.SelectedItems.Count > 0)
                selectedFile = listView1.SelectedItems[0].Text;  
        }

        private void listView1_DoubleClick(object sender, EventArgs e)
        {
            new Attachments.Files(listView1, treeView1).runFile();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            new Attachments.Files(listView1, treeView1).removeFile(richerTextBox1);
        }

        private void richerTextBox1_Load(object sender, EventArgs e)
        {

        }

        private void saveToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            //new ArkosPadFiles.DataFiles.SaveLoad(treeView1).saveFile(richerTextBox1);
            new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1);
            new ArkosPadFiles.Files(treeView1).saveFiles();
        }

        private void upToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (treeView1.SelectedNode != null && treeView1.SelectedNode.Tag != null)
            {
                TreeControl.TreeNodes.moveNodeUp(treeView1.SelectedNode);                
                Globals.notSaved = true;
            }            
        }

        private void downToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (treeView1.SelectedNode != null && treeView1.SelectedNode.Tag != null)
            {
                TreeControl.TreeNodes.moveNodeDown(treeView1.SelectedNode);
                Globals.notSaved = true;
            }
        }

     

       

        private void MainForm_KeyUp(object sender, KeyEventArgs e)
        {
            if(e.KeyCode == Keys.S && e.Modifiers==Keys.Control)
            {
                new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1);
            }
        }

        private void richerTextBox1_KeyUp(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.S && e.Modifiers == Keys.Control)
            {
                new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1);
            }
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
                if (richerTextBox1.save)
            {
                richerTextBox1.save = false;
                try                      
                {
                    this.Invoke(new Action(() => { new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1);  new ArkosPadFiles.Files(treeView1).saveFiles(); })) ;
                    SystemSounds.Beep.Play();

                }
                catch(Exception ex)
                {                 
                }                   
            }

            if (this.richerTextBox1.linkClicked != null)
            {
                this.Invoke(new Action(() => { new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1, Globals._filename); new ArkosPadFiles.Files(treeView1).saveFiles(); }));
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
            bool oldFocus= Globals.data[data].focus;
            removeFocus();

            Globals.data[data].focus = !oldFocus;
            new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1,Globals._filename);
            Globals.notSaved = true;
            }
        }

        private void menuStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {

        }

       

        private void richerTextBox1_MouseClick(object sender, MouseEventArgs e)
        {
            
        }

        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            if (Globals.notSaved && !closing)
            {
                DialogResult r = MessageBox.Show(this, "Do you want to save the project?", "Save Project", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Exclamation);
                if (r == DialogResult.Yes)
                {
                    if (new ArkosPadFiles.Files(treeView1).exportToXml(richerTextBox1))
                    {
                        new ArkosPadFiles.Files(treeView1).saveFiles();
                        closing = true;
                        deleteTempFiles();
                        Application.Exit();
                    }
                }
                else if (r == DialogResult.No)
                {
                    closing = true;
                    deleteTempFiles();
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
                deleteTempFiles();
                Application.Exit();
            }
            
        }

        public void deleteTempFiles()
        {
            try
            {
                Directory.Delete(Globals.tempDir, true);
            }
            catch { }
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            Process.Start("mailto:decipher2k20@gmail.com");
        }


   

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
                        
                        if (n.Tag != null)
                        {
                            new Attachments.Files(listView1,treeView1).exportFile(n);
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
            new ArkosPadFiles.DataFiles.SaveLoad(treeView1).uploadToCloud();
        }

        private void toolStripMenuItem9_Click(object sender, EventArgs e)
        {

        }

        public void runMainThread()
        {
            mainThread = new System.Threading.Thread(syncThread);
            mainThread.Start();
        }
    }
}

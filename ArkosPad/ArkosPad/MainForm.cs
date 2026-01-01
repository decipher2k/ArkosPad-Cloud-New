using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Media;
using System.Net;
using System.Runtime.InteropServices;
using System.Windows.Forms;
using RicherTextBox;
using RicherTextBoxDemo.Core;
using RicherTextBoxDemo.DtO;
using RicherTextBoxDemo.Services;
using RicherTextBoxDemo.TreeControl;
using ProjectFiles = RicherTextBoxDemo.ArkosPadFiles.Files;
using AttachmentFiles = RicherTextBoxDemo.Attachments.Files;

namespace RicherTextBoxDemo
{
    /// <summary>
    /// Main application form for ArkosPad.
    /// </summary>
    public partial class MainForm : Form
    {
        #region Windows API Constants and Methods

        private const int WM_NCLBUTTONDOWN = 0xA1;
        private const int HT_CAPTION = 0x2;

        [DllImport("user32.dll")]
        private static extern int SendMessage(IntPtr hWnd, int Msg, int wParam, int lParam);

        [DllImport("user32.dll")]
        private static extern bool ReleaseCapture();

        #endregion

        #region Fields

        public static bool closing;
        public static MainForm instance;

        private readonly AppSettings _settings;
        private readonly TreeNodeService _treeNodeService;
        private System.Threading.Thread _syncThread;
        private TreeControl.TreeView _treeViewController;
        
        public string selectedFile = string.Empty;

        #endregion

        #region Constructor and Initialization

        public MainForm(string key = "")
        {
            instance = this;
            _settings = AppSettings.Instance;
            _treeNodeService = new TreeNodeService();

            InitializeStartupParameters(key);
            InitializeComponent();
            InitializeRicherTextBox();
            
            timer1.Start();
            Misc.Tools.RegisterUriScheme();
        }

        private void InitializeStartupParameters(string key)
        {
            if (string.IsNullOrEmpty(key))
            {
                return;
            }

            if (key.Contains(Constants.FileExtension))
            {
                _settings.ZipFileName = key;
            }
            else
            {
                // Key is an ID to navigate to
            }
        }

        private void InitializeRicherTextBox()
        {
            richerTextBox1.HideToolstripItemsByGroup(
                RicherTextBoxToolStripGroups.Alignment | RicherTextBoxToolStripGroups.BoldUnderlineItalic, 
                false);
            richerTextBox1.HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.Alignment, true);
            richerTextBox1.HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.BoldUnderlineItalic, true);
            richerTextBox1.ToggleBold();
            richerTextBox1.SetFontSize(8.25f);
        }

        #endregion

        #region Public Interface Methods

        public void clearLbFiles()
        {
            listView1.Items.Clear();
        }

        public TreeNode getSelectedNode()
        {
            return treeView1.SelectedNode;
        }

        public void addLbFile(string filename)
        {
            listView1.Items.Add(filename);
        }

        public void addLbFile(ListViewItem filename)
        {
            listView1.Items.Add(filename);
        }

        public void setRtfContent(string content)
        {
            richerTextBox1.Rtf = content;
        }

        public void removeFocus()
        {
            new ProjectFiles(treeView1).exportToXml(richerTextBox1, _settings.CurrentFileName, true);
        }

        public void setFormCaption()
        {
            string version = $"{Constants.ApplicationName} v{Constants.ApplicationVersion}  ";
            string location = GetLocationCaption();
            string breadcrumb = GetBreadcrumbCaption();

            label4.Text = $"{version}{location}{breadcrumb}";
        }

        public void runMainThread()
        {
            _syncThread = new System.Threading.Thread(SyncThreadLoop);
            _syncThread.Start();
        }

        #endregion

        #region Form Event Handlers

        private void MainForm_Load(object sender, EventArgs e)
        {
            
            _treeViewController = new TreeControl.TreeView(treeView1);
            Misc.Tools.RegisterForFileExtension(Constants.FileExtension, 
                System.Reflection.Assembly.GetExecutingAssembly().Location);
            
            new ProjectFiles(treeView1).LoadInit(listView1, richerTextBox1);
            menuStrip1.Renderer = new Misc.Tools.NewColourRenderer();
        }

        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            if (!_settings.HasUnsavedChanges || closing)
            {
                PerformCleanup();
                return;
            }

            var result = ShowSaveConfirmation();
            
            switch (result)
            {
                case DialogResult.Yes:
                    if (SaveProject())
                    {
                        PerformCleanup();
                    }
                    else
                    {
                        e.Cancel = true;
                    }
                    break;
                    
                case DialogResult.No:
                    PerformCleanup();
                    break;
                    
                default:
                    e.Cancel = true;
                    break;
            }
        }

        private void MainForm_KeyUp(object sender, KeyEventArgs e)
        {
            HandleSaveShortcut(e);
        }

        #endregion

        #region Menu Event Handlers

        private void newToolStripMenuItem_Click(object sender, EventArgs e)
        {
            CreateNewProject();
        }

        private void openToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new ProjectFiles(treeView1).openFile(richerTextBox1, listView1);
        }

        private void saveToolStripMenuItem_Click(object sender, EventArgs e)
        {
            SaveProject();
        }

        private void saveToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            SaveProject();
        }

        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            HandleExit();
        }

        private void exportToMindMapToolStripMenuItem_Click(object sender, EventArgs e)
        {
            ArkosPadFiles.MindMap.exportToMindMap(treeView1);
        }

        private void uploadToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new ArkosPadFiles.DataFiles.SaveLoad(treeView1).uploadToCloud();
        }

        #endregion

        #region TreeView Event Handlers

        private void treeView1_MouseClick(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right)
            {
                treeView1.SelectedNode = treeView1.GetNodeAt(treeView1.PointToClient(Cursor.Position));
                contextMenuStrip1.Show(Cursor.Position);
            }
        }

        private void treeView1_MouseUp(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right)
            {
                contextMenuStrip1.Show(Cursor.Position);
            }
        }

        private void treeView1_AfterSelect(object sender, TreeViewEventArgs e)
        {
            setFormCaption();
            listView1.Items.Clear();
            TreeItems.SelectedItem(this, listView1, treeView1, _settings.Data);
        }

        private void treeView1_AfterLabelEdit_1(object sender, NodeLabelEditEventArgs e)
        {
            HandleNodeRename(e);
        }

        #endregion

        #region Context Menu Event Handlers

        private void addToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new TreeItems().addItem(treeView1, richerTextBox1);
        }

        private void deleteToolStripMenuItem_Click(object sender, EventArgs e)
        {
            DeleteSelectedNode();
        }

        private void renameToolStripMenuItem_Click(object sender, EventArgs e)
        {
            StartNodeRename();
        }

        private void focusToolStripMenuItem_Click(object sender, EventArgs e)
        {
            ToggleNodeFocus();
        }

        private void upToolStripMenuItem_Click(object sender, EventArgs e)
        {
            MoveSelectedNodeUp();
        }

        private void downToolStripMenuItem_Click(object sender, EventArgs e)
        {
            MoveSelectedNodeDown();
        }

        #endregion

        #region ListView Event Handlers

        private void listView1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listView1.SelectedItems.Count > 0)
            {
                selectedFile = listView1.SelectedItems[0].Text;
            }
        }

        private void listView1_DoubleClick(object sender, EventArgs e)
        {
            new AttachmentFiles(listView1, treeView1).runFile();
        }

        private void listView1_MouseUp(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right && listView1.SelectedItems.Count > 0)
            {
                contextMenuStrip2.Show(Cursor.Position);
            }
        }

        #endregion

        #region Button Event Handlers

        private void button1_Click(object sender, EventArgs e)
        {
            new AttachmentFiles(listView1, treeView1).addFile(richerTextBox1);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            new AttachmentFiles(listView1, treeView1).removeFile(richerTextBox1);
        }

        #endregion

        #region RicherTextBox Event Handlers

        private void richerTextBox1_Leave(object sender, EventArgs e)
        {
            new TreeControl.TreeView(treeView1).loadTreeData(richerTextBox1);
        }

        private void richerTextBox1_KeyUp(object sender, KeyEventArgs e)
        {
            HandleSaveShortcut(e);
        }

        private void richerTextBox1_Load(object sender, EventArgs e)
        {
            // Placeholder for future initialization
        }

        private void richerTextBox1_MouseClick(object sender, MouseEventArgs e)
        {
            // Placeholder for future mouse click handling
        }

        #endregion

        #region Timer Event Handler

        private void timer1_Tick(object sender, EventArgs e)
        {
            HandleAutoSave();
            HandleLinkClick();
        }

        #endregion

        #region Window Control Event Handlers

        private void menuStrip1_MouseDown(object sender, MouseEventArgs e)
        {
            EnableWindowDrag(e);
        }

        private void label4_MouseDown(object sender, MouseEventArgs e)
        {
            EnableWindowDrag(e);
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            WindowState = FormWindowState.Minimized;
        }

        #endregion

        #region Other Event Handlers

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            Process.Start("mailto:decipher2k20@gmail.com");
        }

        private void contextMenuStrip2_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {
            HandleFileContextMenuClick(e);
        }

        // Empty event handlers (kept for designer compatibility)
        private void contextMenuStrip1_Opening(object sender, System.ComponentModel.CancelEventArgs e) { }
        private void contextMenuStrip2_Opening(object sender, System.ComponentModel.CancelEventArgs e) { }
        private void menuStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e) { }
        private void menuStrip2_ItemClicked(object sender, ToolStripItemClickedEventArgs e) { }
        private void menuStrip1_KeyDown(object sender, KeyEventArgs e) { }
        private void panel4_Paint(object sender, PaintEventArgs e) { }
        private void listView1_MouseClick(object sender, MouseEventArgs e) { }
        private void listView1_Click(object sender, EventArgs e) { }
        private void toolStripMenuItem9_Click(object sender, EventArgs e) { }

        #endregion

        #region Private Helper Methods

        private string GetLocationCaption()
        {
            if (_settings.IsCloudMode)
            {
                return "- <Cloud> ";
            }

            if (!string.IsNullOrEmpty(_settings.ZipFileName))
            {
                return $"- {_settings.ZipFileName} ";
            }

            return string.Empty;
        }

        private string GetBreadcrumbCaption()
        {
            if (treeView1.SelectedNode == null)
            {
                return string.Empty;
            }

            var breadcrumb = new List<string>();
            TreeNode node = treeView1.SelectedNode;

            while (node != null && (node.Parent != null || node.Text == Constants.RootNodeName))
            {
                breadcrumb.Insert(0, node.Text);
                node = node.Parent;
            }

            return breadcrumb.Count > 0 ? $"- {string.Join("::", breadcrumb)}" : string.Empty;
        }

        private void CreateNewProject()
        {
            if (_settings.IsCloudMode)
            {
                closing = true;
            }

            treeView1.Nodes.Clear();
            treeView1.Nodes.Add(Constants.RootNodeName);
            richerTextBox1.Text = string.Empty;

            _settings.Reset();
            setFormCaption();
            _settings.MarkAsModified();
        }

        private bool SaveProject()
        {
            if (new ProjectFiles(treeView1).exportToXml(richerTextBox1))
            {
                new ProjectFiles(treeView1).saveFiles();
                return true;
            }
            return false;
        }

        private void HandleExit()
        {
            if (!_settings.HasUnsavedChanges)
            {
                Application.Exit();
                return;
            }

            var result = ShowSaveConfirmation();

            if (result == DialogResult.Yes && SaveProject())
            {
                Application.Exit();
            }
            else if (result == DialogResult.No)
            {
                Application.Exit();
            }
        }

        private DialogResult ShowSaveConfirmation()
        {
            return MessageBox.Show(this, Constants.Messages.SaveProjectPrompt, 
                Constants.Messages.SaveProjectTitle,
                MessageBoxButtons.YesNoCancel, MessageBoxIcon.Exclamation);
        }

        private void DeleteSelectedNode()
        {
            TreeNode selectedNode = treeView1.SelectedNode;
            if (selectedNode?.Tag == null)
            {
                return;
            }

            if (_settings.IsCloudMode)
            {
                try
                {
                    Sync.DeleteNode(selectedNode);
                }
                catch (Exception)
                {
                    MessageBox.Show(this, Constants.Messages.RemoveSubnodesFirst, 
                        Constants.Messages.ErrorTitle, MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }
            }
            else
            {
                new TreeControl.TreeView(treeView1).removeNode(selectedNode);
            }

            _settings.MarkAsModified();
            SaveIfFileExists();
        }

        private void StartNodeRename()
        {
            _settings.MarkAsModified();
            treeView1.LabelEdit = true;
            treeView1.SelectedNode?.BeginEdit();
        }

        private void HandleNodeRename(NodeLabelEditEventArgs e)
        {
            treeView1.LabelEdit = false;

            TreeNode selectedNode = treeView1.SelectedNode;
            if (selectedNode?.Tag == null || string.IsNullOrEmpty(e.Label))
            {
                return;
            }

            var nodeData = selectedNode.Tag as XmlNodeData;
            if (nodeData == null)
            {
                return;
            }

            selectedNode.Text = e.Label;
            
            if (_settings.Data.ContainsKey(nodeData.ID))
            {
                _settings.Data[nodeData.ID].Name = e.Label;
            }

            SaveIfFileExists();
        }

        private void ToggleNodeFocus()
        {
            TreeNode selectedNode = treeView1.SelectedNode;
            var nodeData = selectedNode?.Tag as XmlNodeData;
            
            if (nodeData == null || !_settings.Data.ContainsKey(nodeData.ID))
            {
                return;
            }

            bool previousFocus = _settings.Data[nodeData.ID].IsFocused;
            removeFocus();
            _settings.Data[nodeData.ID].IsFocused = !previousFocus;

            new ProjectFiles(treeView1).exportToXml(richerTextBox1, _settings.CurrentFileName);
            _settings.MarkAsModified();
        }

        private void MoveSelectedNodeUp()
        {
            TreeNode selectedNode = treeView1.SelectedNode;
            if (selectedNode?.Tag != null)
            {
                TreeNodes.moveNodeUp(selectedNode);
                _settings.MarkAsModified();
            }
        }

        private void MoveSelectedNodeDown()
        {
            TreeNode selectedNode = treeView1.SelectedNode;
            if (selectedNode?.Tag != null)
            {
                TreeNodes.moveNodeDown(selectedNode);
                _settings.MarkAsModified();
            }
        }

        private void HandleSaveShortcut(KeyEventArgs e)
        {
            if (e.KeyCode == Keys.S && e.Modifiers == Keys.Control)
            {
                new ProjectFiles(treeView1).exportToXml(richerTextBox1);
            }
        }

        private void HandleAutoSave()
        {
            if (!richerTextBox1.save)
            {
                return;
            }

            richerTextBox1.save = false;
            
            try
            {
                Invoke(new Action(() =>
                {
                    new ProjectFiles(treeView1).exportToXml(richerTextBox1);
                    new ProjectFiles(treeView1).saveFiles();
                }));
                SystemSounds.Beep.Play();
            }
            catch (Exception)
            {
                // Silently handle save errors during auto-save
            }
        }

        private void HandleLinkClick()
        {
            if (richerTextBox1.linkClicked == null)
            {
                return;
            }

            Invoke(new Action(() =>
            {
                new ProjectFiles(treeView1).exportToXml(richerTextBox1, _settings.CurrentFileName);
                new ProjectFiles(treeView1).saveFiles();
            }));

            Process.Start($"{Constants.UriScheme}:{richerTextBox1.linkClicked}");
            richerTextBox1.linkClicked = null;
        }

        private void HandleFileContextMenuClick(ToolStripItemClickedEventArgs e)
        {
            try
            {
                if (e.ClickedItem != toolStripMenuItem9)
                {
                    return;
                }

                TreeNode selectedNode = treeView1.SelectedNode;
                if (selectedNode?.Tag != null)
                {
                    new AttachmentFiles(listView1, treeView1).exportFile(selectedNode);
                }
            }
            catch (Exception)
            {
                MessageBox.Show(this, Constants.Messages.CannotSaveFile, 
                    Constants.Messages.ErrorTitle, MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void SaveIfFileExists()
        {
            if (!string.IsNullOrEmpty(_settings.CurrentFileName))
            {
                new ProjectFiles(treeView1).exportToXml(richerTextBox1, _settings.CurrentFileName);
            }
        }

        private void EnableWindowDrag(MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                ReleaseCapture();
                SendMessage(Handle, WM_NCLBUTTONDOWN, HT_CAPTION, 0);
            }
        }

        private void PerformCleanup()
        {
            closing = true;
            DeleteTempFiles();
            Application.Exit();
        }

        private void DeleteTempFiles()
        {
            try
            {
                if (!string.IsNullOrEmpty(_settings.TempDirectory) && 
                    Directory.Exists(_settings.TempDirectory))
                {
                    Directory.Delete(_settings.TempDirectory, true);
                }
            }
            catch
            {
                // Cleanup is best effort
            }
        }

        #endregion

        #region Sync Thread Methods

        private void SyncThreadLoop()
        {
            while (!closing)
            {
                try
                {
                    PerformSync();
                }
                catch
                {
                    // Continue sync loop on errors
                }

                System.Threading.Thread.Sleep(1000);
            }

            closing = false;
        }

        private void PerformSync()
        {
            DateTime serverSyncTime = DateTime.Parse(
                new WebClient().DownloadString(_settings.CloudUrl + Constants.ApiEndpoints.GetLastSync));

            if (Sync.lastSync == serverSyncTime)
            {
                return;
            }

            Sync.lastSync = serverSyncTime;
            
            treeView1.Invoke(new Action(() => 
                _settings.Data = Sync.fetchNodes(treeView1)));

            UpdateSyncLabel();
            StartResetSyncLabelThread();
        }

        private void UpdateSyncLabel()
        {
            label5.Invoke(new Action(() =>
            {
                label5.Text = $"Last Synchronisation: {DateTime.Now.ToShortTimeString()}";
                label5.ForeColor = Color.LightGreen;
            }));
        }

        private void StartResetSyncLabelThread()
        {
            var resetThread = new System.Threading.Thread(ResetSyncLabelColor);
            resetThread.Start();
        }

        private void ResetSyncLabelColor()
        {
            System.Threading.Thread.Sleep(3000);
            
            try
            {
                label5.Invoke(new Action(() =>
                {
                    if (label5.IsHandleCreated)
                    {
                        label5.ForeColor = Color.White;
                    }
                }));
            }
            catch
            {
                // Label may be disposed
            }
        }

        #endregion
    }
}

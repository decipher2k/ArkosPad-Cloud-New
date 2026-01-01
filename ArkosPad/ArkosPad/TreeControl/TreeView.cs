using System;
using System.Collections.Generic;
using System.Windows.Forms;
using System.Xml;
using RicherTextBoxDemo.ArkosPadFiles;
using RicherTextBoxDemo.Core;
using RicherTextBoxDemo.DtO;
using RicherTextBoxDemo.Services;

namespace RicherTextBoxDemo.TreeControl
{
    /// <summary>
    /// Manages tree view operations including loading, saving, and navigation.
    /// </summary>
    public class TreeView
    {
        private readonly System.Windows.Forms.TreeView _treeView;
        private readonly TreeNodeService _nodeService;
        private readonly AppSettings _settings;

        public TreeView(System.Windows.Forms.TreeView treeView)
        {
            _treeView = treeView ?? throw new ArgumentNullException(nameof(treeView));
            _nodeService = new TreeNodeService();
            _settings = AppSettings.Instance;
        }

        /// <summary>
        /// Saves the current tree node's data to the data dictionary.
        /// </summary>
        public void loadTreeData(RicherTextBox.RicherTextBox richerTextBox)
        {
            TreeNode selectedNode = _treeView.SelectedNode;
            
            if (selectedNode?.Tag == null)
            {
                return;
            }

            var nodeData = selectedNode.Tag as XmlNodeData;
            if (nodeData == null)
            {
                return;
            }

            string nodeId = nodeData.ID;
            if (!_settings.Data.ContainsKey(nodeId))
            {
                return;
            }

            TreeItem item = _settings.Data[nodeId];
            string newContent = GetRtfContent(richerTextBox);
            
            if (item.Data != newContent)
            {
                item.Data = newContent;
                SyncNodeIfCloud(selectedNode);
            }

            _settings.Data[nodeId] = item;
            SaveIfFileExists(richerTextBox);
        }

        /// <summary>
        /// Populates the tree view from a file or cloud source.
        /// </summary>
        public void populateTreeview(RicherTextBox.RicherTextBox richerTextBox, 
            System.Windows.Forms.ListView listView, 
            string filename = "", 
            string activeNodeId = "")
        {
            richerTextBox.File = filename;

            var openFileDialog = new OpenFile();
            
            if (!string.IsNullOrEmpty(filename) || openFileDialog.ShowDialog() == DialogResult.OK)
            {
                _settings.IsCloudMode = openFileDialog.isCloud;

                if (openFileDialog.isCloud)
                {
                    InitializeCloudMode(openFileDialog);
                }
                else
                {
                    LoadLocalFile(richerTextBox, listView, filename, openFileDialog, activeNodeId);
                }
            }
        }

        /// <summary>
        /// Removes a node and all its children from the tree.
        /// </summary>
        public void removeNode(TreeNode node)
        {
            _nodeService.RemoveNode(node);
        }

        private void InitializeCloudMode(OpenFile openFileDialog)
        {
            _settings.CloudSession = openFileDialog.session;
            _settings.CloudUrl = openFileDialog.url;
            Sync.lastSync = DateTime.Now;
            MainForm.instance.runMainThread();
        }

        private void LoadLocalFile(RicherTextBox.RicherTextBox richerTextBox, 
            System.Windows.Forms.ListView listView, 
            string filename, 
            OpenFile openFileDialog,
            string activeNodeId)
        {
            _treeView.Nodes.Clear();
            bool isDialogOpened = string.IsNullOrEmpty(filename);

            if (isDialogOpened)
            {
                MainForm.closing = true;
                filename = openFileDialog.file;
                _settings.ZipFileName = filename;

                if (!_settings.IsCloudMode)
                {
                    new Files(_treeView).loadFiles(filename);
                }

                filename = new Files(_treeView).getXmlFromFilename(filename);
                richerTextBox.File = filename;
                _settings.CurrentFileName = filename;
            }

            try
            {
                LoadTreeFromFile(listView, filename, isDialogOpened, activeNodeId);
            }
            catch (XmlException ex)
            {
                MessageBox.Show(ex.Message, Constants.Messages.ErrorTitle);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, Constants.Messages.ErrorTitle);
            }
        }

        private void LoadTreeFromFile(System.Windows.Forms.ListView listView, 
            string filename, 
            bool showMissingFileError,
            string activeNodeId)
        {
            string datFilePath = System.IO.Path.Combine(_settings.TempDirectory, Constants.DataBinaryFileName);

            if (!System.IO.File.Exists(datFilePath) && showMissingFileError)
            {
                MessageBox.Show(MainForm.instance, Constants.Messages.FileNotFound, Constants.Messages.ErrorTitle);
                return;
            }

            _settings.Data = DataStorage.DeSerializeNow(datFilePath);

            var xmlDoc = new XmlDocument();
            xmlDoc.Load(filename);

            _treeView.Nodes.Clear();
            _treeView.Nodes.Add(new TreeNode(xmlDoc.DocumentElement.Name));

            TreeNode rootNode = _treeView.Nodes[0];
            new Nodes().addTreeNode(xmlDoc.DocumentElement, rootNode, _settings.Data, activeNodeId);

            _treeView.ExpandAll();
            listView.Clear();

            _settings.CurrentFileName = filename;
            MainForm.instance.setFormCaption();

            UpdateMaxWeight();
        }

        private void UpdateMaxWeight()
        {
            foreach (TreeItem item in _settings.Data.Values)
            {
                if (item.Weight > _settings.MaxWeight)
                {
                    _settings.MaxWeight = item.Weight;
                }
            }
        }

        private string GetRtfContent(RicherTextBox.RicherTextBox richerTextBox)
        {
            return string.IsNullOrWhiteSpace(richerTextBox.Text) 
                ? string.Empty 
                : richerTextBox.Rtf;
        }

        private void SyncNodeIfCloud(TreeNode node)
        {
            if (!_settings.IsCloudMode)
            {
                return;
            }

            var nodeData = node?.Tag as XmlNodeData;
            if (nodeData != null && _settings.Data.ContainsKey(nodeData.ID))
            {
                var item = _settings.Data[nodeData.ID];
                Sync.UpdateOrAddNode(item.Data, item.Weight, node);
            }
        }

        private void SaveIfFileExists(RicherTextBox.RicherTextBox richerTextBox)
        {
            if (!string.IsNullOrEmpty(_settings.CurrentFileName))
            {
                new Files(_treeView).exportToXml(richerTextBox, _settings.CurrentFileName);
            }
        }
    }
}

using System;
using System.IO;
using System.Media;
using System.Text;
using System.Windows.Forms;
using RicherTextBoxDemo.Core;
using RicherTextBoxDemo.DtO;

namespace RicherTextBoxDemo.ArkosPadFiles.DataFiles
{
    /// <summary>
    /// Handles save and load operations including cloud upload.
    /// </summary>
    public class SaveLoad
    {
        private readonly TreeView _treeView;
        private readonly AppSettings _settings;

        public SaveLoad(TreeView treeView)
        {
            _treeView = treeView ?? throw new ArgumentNullException(nameof(treeView));
            _settings = AppSettings.Instance;
        }

        /// <summary>
        /// Saves the current node data to file.
        /// </summary>
        public void saveFile(RicherTextBox.RicherTextBox richerTextBox)
        {
            SaveFile(richerTextBox);
        }

        /// <summary>
        /// Saves the current node data to file.
        /// </summary>
        public void SaveFile(RicherTextBox.RicherTextBox richerTextBox)
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

            UpdateNodeData(nodeData.ID, richerTextBox);
            SaveToFile(richerTextBox);
        }

        /// <summary>
        /// Uploads the current project to the cloud.
        /// </summary>
        public void uploadToCloud()
        {
            UploadToCloud();
        }

        /// <summary>
        /// Uploads the current project to the cloud.
        /// </summary>
        public void UploadToCloud()
        {
            if (_settings.IsCloudMode)
            {
                ShowError(Constants.Messages.AlreadyConnectedToCloud);
                return;
            }

            if (!ConfirmCloudUpload())
            {
                return;
            }

            if (!ConnectToCloud())
            {
                return;
            }

            PerformCloudUpload();
        }

        #region Private Helper Methods

        private void UpdateNodeData(string nodeId, RicherTextBox.RicherTextBox richerTextBox)
        {
            if (!_settings.Data.ContainsKey(nodeId))
            {
                return;
            }

            TreeItem item = _settings.Data[nodeId];
            item.Data = string.IsNullOrWhiteSpace(richerTextBox.Text)
                ? string.Empty
                : richerTextBox.Rtf;
            _settings.Data[nodeId] = item;
        }

        private void SaveToFile(RicherTextBox.RicherTextBox richerTextBox)
        {
            var filesHandler = new Files(_treeView);
            filesHandler.exportToXml(richerTextBox, _settings.CurrentFileName);
            filesHandler.saveFiles();
            
            SystemSounds.Beep.Play();
        }

        private bool ConfirmCloudUpload()
        {
            var result = MessageBox.Show(
                MainForm.instance,
                Constants.Messages.CloudDeleteWarning,
                "Warning",
                MessageBoxButtons.YesNo,
                MessageBoxIcon.Exclamation);

            return result == DialogResult.Yes;
        }

        private bool ConnectToCloud()
        {
            var openFileDialog = new OpenFile(true);
            
            if (openFileDialog.ShowDialog() != DialogResult.OK)
            {
                return false;
            }

            _settings.IsCloudMode = openFileDialog.isCloud;

            if (openFileDialog.isCloud)
            {
                _settings.CloudSession = openFileDialog.session;
                _settings.CloudUrl = openFileDialog.url;
            }

            return _settings.IsCloudMode;
        }

        private void PerformCloudUpload()
        {
            Sync.Clear();

            foreach (TreeNode node in _treeView.Nodes)
            {
                string tempFilePath = Path.Combine(_settings.TempDirectory, "..", "tmp");
                
                using (var writer = new StreamWriter(tempFilePath, false, Encoding.UTF8))
                {
                    Nodes.saveNode(node.Nodes, writer, false);
                }
            }

            MainForm.instance.runMainThread();
        }

        private void ShowError(string message)
        {
            MessageBox.Show(
                MainForm.instance,
                message,
                Constants.Messages.ErrorTitle,
                MessageBoxButtons.OK,
                MessageBoxIcon.Error);
        }

        #endregion
    }
}

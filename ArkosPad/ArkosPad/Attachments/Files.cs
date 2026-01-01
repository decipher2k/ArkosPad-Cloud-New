using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Windows.Forms;
using RicherTextBoxDemo.Core;
using RicherTextBoxDemo.DtO;

namespace RicherTextBoxDemo.Attachments
{
    /// <summary>
    /// Service for managing file attachments associated with tree nodes.
    /// </summary>
    public class Files
    {
        private readonly ListView _listView;
        private readonly System.Windows.Forms.TreeView _treeView;
        private readonly AppSettings _settings;

        public Files(ListView listView, System.Windows.Forms.TreeView treeView)
        {
            _listView = listView ?? throw new ArgumentNullException(nameof(listView));
            _treeView = treeView ?? throw new ArgumentNullException(nameof(treeView));
            _settings = AppSettings.Instance;
        }

        /// <summary>
        /// Updates the file list view with files from the selected node.
        /// </summary>
        public void updateFileList(MainForm mainForm)
        {
            mainForm.clearLbFiles();

            TreeNode selectedNode = mainForm.getSelectedNode();
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

            var files = _settings.Data[nodeId].Files;
            foreach (FileItem file in files)
            {
                mainForm.addLbFile(file.Caption);
            }
        }

        /// <summary>
        /// Adds a new file attachment to the selected node.
        /// </summary>
        public void addFile(RicherTextBox.RicherTextBox richerTextBox)
        {
            EnsureAttachmentDirectoryExists();

            var dialog = new AddFileDialog();
            if (dialog.ShowDialog() != DialogResult.OK)
            {
                return;
            }

            TreeNode selectedNode = _treeView.SelectedNode;
            if (selectedNode?.Tag == null)
            {
                return;
            }

            var nodeData = selectedNode.Tag as XmlNodeData;
            if (nodeData == null || !_settings.Data.ContainsKey(nodeData.ID))
            {
                return;
            }

            try
            {
                if (_settings.IsCloudMode)
                {
                    UploadFileToCloud(dialog.file, nodeData.ID);
                }
                else
                {
                    AddLocalFile(dialog.file, nodeData.ID, richerTextBox);
                }
            }
            catch (Exception)
            {
                ShowError(Constants.Messages.UnableToAddFile);
            }
        }

        /// <summary>
        /// Removes the selected file attachment from the node.
        /// </summary>
        public void removeFile(RicherTextBox.RicherTextBox richerTextBox)
        {
            try
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

                if (_settings.IsCloudMode)
                {
                    RemoveCloudFile();
                }
                else
                {
                    RemoveLocalFile(nodeData.ID, richerTextBox);
                }
            }
            catch (Exception)
            {
                // Silently handle removal errors
            }
        }

        /// <summary>
        /// Opens the selected file attachment.
        /// </summary>
        public void runFile()
        {
            TreeNode selectedNode = _treeView.SelectedNode;
            if (selectedNode?.Tag == null)
            {
                return;
            }

            var nodeData = selectedNode.Tag as XmlNodeData;
            if (nodeData == null || !_settings.Data.ContainsKey(nodeData.ID))
            {
                return;
            }

            if (_listView.SelectedItems.Count == 0)
            {
                return;
            }

            string selectedFileName = _listView.SelectedItems[0].Text;
            var fileItem = _settings.Data[nodeData.ID].Files
                .FirstOrDefault(f => f.Caption == selectedFileName);

            if (fileItem == null)
            {
                return;
            }

            string filePath = GetAttachmentFilePath(fileItem.FilePath);
            
            if (!File.Exists(filePath))
            {
                MessageBox.Show(MainForm.instance, Constants.Messages.FileDoesNotExist);
                return;
            }

            LaunchFile(filePath);
        }

        /// <summary>
        /// Exports the selected file attachment to a user-specified location.
        /// </summary>
        public void exportFile(TreeNode node)
        {
            var nodeData = node?.Tag as XmlNodeData;
            if (nodeData == null || !_settings.Data.ContainsKey(nodeData.ID))
            {
                return;
            }

            if (_settings.IsCloudMode)
            {
                ExportCloudFile();
            }
            else
            {
                ExportLocalFile(nodeData.ID);
            }
        }

        private void EnsureAttachmentDirectoryExists()
        {
            if (_settings.IsCloudMode)
            {
                return;
            }

            string attachmentDir = Path.Combine(_settings.TempDirectory, Constants.AttachmentsFolderName);
            if (!Directory.Exists(attachmentDir))
            {
                Directory.CreateDirectory(attachmentDir);
            }
        }

        private void UploadFileToCloud(string filePath, string nodeId)
        {
            Sync.UploadFile(filePath, int.Parse(nodeId));
        }

        private void AddLocalFile(string sourcePath, string nodeId, 
            RicherTextBox.RicherTextBox richerTextBox)
        {
            string destinationPath = new ArkosPadFiles.Files(_treeView).copyFile(sourcePath);
            
            if (string.IsNullOrEmpty(destinationPath))
            {
                return;
            }

            var fileItem = new FileItem
            {
                Caption = Path.GetFileName(sourcePath),
                FilePath = Path.GetFileName(destinationPath)
            };

            _listView.Items.Add(fileItem.Caption);
            _settings.Data[nodeId].Files.Add(fileItem);

            SaveChangesIfNeeded(richerTextBox);
        }

        private void RemoveCloudFile()
        {
            if (_listView.SelectedItems.Count == 0)
            {
                return;
            }

            int fileId = (int)_listView.SelectedItems[0].Tag;
            Sync.DeleteFile(fileId);
        }

        private void RemoveLocalFile(string nodeId, RicherTextBox.RicherTextBox richerTextBox)
        {
            if (!_settings.Data.ContainsKey(nodeId))
            {
                return;
            }

            string selectedFileName = MainForm.instance.selectedFile;
            var fileItem = _settings.Data[nodeId].Files
                .FirstOrDefault(f => f.Caption == selectedFileName);

            if (fileItem == null)
            {
                return;
            }

            _listView.Items.Remove(_listView.SelectedItems[0]);
            _settings.Data[nodeId].Files.Remove(fileItem);

            updateFileList(MainForm.instance);
            new ArkosPadFiles.Files(_treeView).exportToXml(richerTextBox, _settings.CurrentFileName);
        }

        private void ExportLocalFile(string nodeId)
        {
            if (_listView.SelectedItems.Count == 0)
            {
                return;
            }

            string selectedFileName = _listView.SelectedItems[0].Text;
            var fileItem = _settings.Data[nodeId].Files
                .FirstOrDefault(f => f.Caption == selectedFileName);

            if (fileItem == null)
            {
                return;
            }

            string sourcePath = GetAttachmentFilePath(fileItem.FilePath);
            string extension = Path.GetExtension(sourcePath);

            using (var saveDialog = new SaveFileDialog())
            {
                saveDialog.Title = $"Save {extension} Document";
                saveDialog.Filter = $"{extension} Files (*{extension})|*{extension}";
                saveDialog.FileName = $"export_file{extension}";

                if (saveDialog.ShowDialog() == DialogResult.OK)
                {
                    File.Copy(sourcePath, saveDialog.FileName);
                    ShowInfo($"File saved as\n{saveDialog.FileName}", "File saved.");
                }
            }
        }

        private void ExportCloudFile()
        {
            if (_listView.SelectedItems.Count == 0)
            {
                return;
            }

            using (var saveDialog = new SaveFileDialog())
            {
                saveDialog.Title = "Save Document";
                saveDialog.Filter = "All Files (*.*)|*.*";
                saveDialog.FileName = "export_file";

                if (saveDialog.ShowDialog() == DialogResult.OK)
                {
                    int fileId = (int)_listView.SelectedItems[0].Tag;
                    Sync.DownloadFile(fileId, saveDialog.FileName);
                    ShowInfo($"File saved as\n{saveDialog.FileName}", "File saved.");
                }
            }
        }

        private string GetAttachmentFilePath(string fileName)
        {
            string attachmentDir = Path.GetDirectoryName(_settings.CurrentFileName);
            return Path.Combine(attachmentDir, Constants.AttachmentsFolderName, fileName);
        }

        private void LaunchFile(string filePath)
        {
            var process = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    UseShellExecute = true,
                    FileName = filePath
                }
            };
            process.Start();
        }

        private void SaveChangesIfNeeded(RicherTextBox.RicherTextBox richerTextBox)
        {
            if (!string.IsNullOrEmpty(_settings.CurrentFileName))
            {
                new ArkosPadFiles.Files(_treeView).exportToXml(richerTextBox, _settings.CurrentFileName);
            }
        }

        private void ShowError(string message)
        {
            MessageBox.Show(MainForm.instance, message, Constants.Messages.ErrorTitle, 
                MessageBoxButtons.OK, MessageBoxIcon.Error);
        }

        private void ShowInfo(string message, string title)
        {
            MessageBox.Show(MainForm.instance, message, title, 
                MessageBoxButtons.OK, MessageBoxIcon.None);
        }
    }
}

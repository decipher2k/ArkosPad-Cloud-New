using System;
using System.IO;
using System.Linq;
using System.Windows.Forms;
using Ionic.Zip;
using Ionic.Zlib;
using RicherTextBoxDemo.Core;
using RicherTextBoxDemo.DtO;

namespace RicherTextBoxDemo.ArkosPadFiles
{
    /// <summary>
    /// Handles file operations for ArkosPad projects.
    /// </summary>
    public class Files
    {
        private readonly System.Windows.Forms.TreeView _treeView;
        private readonly AppSettings _settings;

        public Files(System.Windows.Forms.TreeView treeView)
        {
            _treeView = treeView ?? throw new ArgumentNullException(nameof(treeView));
            _settings = AppSettings.Instance;
        }

        #region Public Methods

        /// <summary>
        /// Gets the XML data file path from a filename.
        /// </summary>
        public string getXmlFromFilename(string filename)
        {
            return Path.Combine(_settings.TempDirectory, Constants.DataFileName);
        }

        /// <summary>
        /// Saves the current project to a zip file.
        /// </summary>
        public void saveFiles()
        {
            try
            {
                CompressDirectory(_settings.TempDirectory, _settings.ZipFileName);
                _settings.MarkAsSaved();
            }
            catch (Exception)
            {
                ShowError(Constants.Messages.CannotSaveFile);
            }
        }

        /// <summary>
        /// Loads project files from a zip archive.
        /// </summary>
        public void loadFiles(string filename)
        {
            if (string.IsNullOrEmpty(_settings.TempDirectory))
            {
                return;
            }

            Directory.CreateDirectory(_settings.TempDirectory);

            using (var zipFile = new ZipFile(_settings.ZipFileName))
            {
                zipFile.ExtractAll(_settings.TempDirectory, ExtractExistingFileAction.OverwriteSilently);
            }

            NormalizeExtractedFiles(_settings.TempDirectory);
        }

        /// <summary>
        /// Initializes the application by loading the last opened file.
        /// </summary>
        public void LoadInit(ListView listView, RicherTextBox.RicherTextBox richerTextBox)
        {
            if (string.IsNullOrEmpty(_settings.ZipFileName))
            {
                _settings.ZipFileName = Registry.getFilename();
            }

            if (string.IsNullOrEmpty(_settings.ZipFileName))
            {
                return;
            }

            _settings.TempDirectory = CreateTempDirectory();

            try
            {
                _settings.CurrentFileName = getXmlFromFilename(_settings.ZipFileName);
                loadFiles(_settings.ZipFileName);

                var treeViewController = new TreeControl.TreeView(_treeView);
                treeViewController.populateTreeview(richerTextBox, listView, _settings.CurrentFileName);
            }
            catch (Exception)
            {
                ShowError(Constants.Messages.ErrorCreatingTempFile);
            }
        }

        /// <summary>
        /// Exports the tree data to XML format.
        /// </summary>
        public bool exportToXml(RicherTextBox.RicherTextBox richerTextBox, 
            string filename = "", bool removeFocus = false)
        {
            bool wasCloudMode = _settings.IsCloudMode;
            _settings.IsCloudMode = false;

            try
            {
                SaveCurrentNodeData(richerTextBox);

                // Use existing filename if available
                if (string.IsNullOrEmpty(filename) && !string.IsNullOrEmpty(_settings.CurrentFileName))
                {
                    filename = _settings.ZipFileName;
                }

                if (string.IsNullOrEmpty(filename))
                {
                    filename = PromptForSaveLocation();
                    if (string.IsNullOrEmpty(filename))
                    {
                        _settings.IsCloudMode = wasCloudMode;
                        return false;
                    }
                }

                return PerformExport(richerTextBox, filename, removeFocus, wasCloudMode);
            }
            catch (Exception)
            {
                ShowError(Constants.Messages.CannotSaveFile);
                _settings.IsCloudMode = wasCloudMode;
                return false;
            }
        }

        /// <summary>
        /// Copies a file to the attachments directory.
        /// </summary>
        public string copyFile(string sourcePath)
        {
            if (string.IsNullOrEmpty(_settings.CurrentFileName))
            {
                ShowError(Constants.Messages.SaveProjectFirst);
                return string.Empty;
            }

            string attachmentsDir = GetAttachmentsDirectory();
            EnsureDirectoryExists(attachmentsDir);

            string destinationPath = GenerateUniqueFilePath(attachmentsDir, Path.GetExtension(sourcePath));
            File.Copy(sourcePath, destinationPath);

            return destinationPath;
        }

        /// <summary>
        /// Opens a project file.
        /// </summary>
        public void openFile(RicherTextBox.RicherTextBox richerTextBox, ListView listView)
        {
            _settings.TempDirectory = CreateTempDirectory();

            var treeViewController = new TreeControl.TreeView(_treeView);
            treeViewController.populateTreeview(richerTextBox, listView);

            MainForm.instance.setFormCaption();
            SaveLastFileToRegistry();
        }

        #endregion

        #region Private Helper Methods

        private void SaveCurrentNodeData(RicherTextBox.RicherTextBox richerTextBox)
        {
            TreeNode selectedNode = _treeView.SelectedNode;
            if (selectedNode?.Tag == null)
            {
                return;
            }

            var nodeData = selectedNode.Tag as XmlNodeData;
            if (nodeData == null || nodeData.ID == Constants.RootNodeId)
            {
                return;
            }

            if (!_settings.Data.ContainsKey(nodeData.ID))
            {
                return;
            }

            TreeItem item = _settings.Data[nodeData.ID];
            item.Data = string.IsNullOrWhiteSpace(richerTextBox.Text) 
                ? string.Empty 
                : richerTextBox.Rtf;
            _settings.Data[nodeData.ID] = item;
        }

        private string PromptForSaveLocation()
        {
            using (var dialog = new SaveFileDialog())
            {
                dialog.Title = "Save ArkosPad Document";
                dialog.Filter = Constants.FileFilters.ArkosPadFiles;
                dialog.FileName = "New Project" + Constants.FileExtension;
                dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);

                return dialog.ShowDialog() == DialogResult.OK ? dialog.FileName : null;
            }
        }

        private bool PerformExport(RicherTextBox.RicherTextBox richerTextBox, 
            string filename, bool removeFocus, bool wasCloudMode)
        {
            string xmlFilename = filename;

            if (!filename.EndsWith(".xml", StringComparison.OrdinalIgnoreCase))
            {
                SetupTempDirectoryForNewFile(filename);
                xmlFilename = getXmlFromFilename(filename);
            }
            else
            {
                _settings.MarkAsModified();
            }

            EnsureDirectoryExists(Path.Combine(_settings.TempDirectory, Constants.AttachmentsFolderName));

            WriteXmlFile(xmlFilename, removeFocus, wasCloudMode);
            SaveBinaryData(xmlFilename);

            _settings.IsCloudMode = wasCloudMode;
            return true;
        }

        private void SetupTempDirectoryForNewFile(string filename)
        {
            string oldTempDir = _settings.TempDirectory;
            _settings.TempDirectory = CreateTempDirectory();
            _settings.ZipFileName = filename;

            EnsureDirectoryExists(_settings.TempDirectory);
            EnsureDirectoryExists(Path.Combine(_settings.TempDirectory, Constants.AttachmentsFolderName));

            if (!string.IsNullOrEmpty(oldTempDir))
            {
                CopyAttachmentFiles(oldTempDir, _settings.TempDirectory);
            }
        }

        private void WriteXmlFile(string filename, bool removeFocus, bool wasCloudMode)
        {
            using (var writer = new StreamWriter(filename, false, System.Text.Encoding.UTF8))
            {
                string rootName = _treeView.Nodes[0].Text;

                writer.WriteLine("<?xml version=\"1.0\" encoding=\"utf-8\" ?>");
                writer.WriteLine($"<{rootName}>");

                Nodes.saveNode(_treeView.Nodes[0].Nodes, writer, removeFocus, wasCloudMode);

                writer.WriteLine($"</{rootName}>");
            }
        }

        private void SaveBinaryData(string xmlFilename)
        {
            string datFilePath = Path.Combine(_settings.TempDirectory, Constants.DataBinaryFileName);

            if (File.Exists(datFilePath))
            {
                File.Delete(datFilePath);
            }

            DataStorage.SerializeNow(datFilePath, _settings.Data);
            Registry.SetLastFileName(_settings.ZipFileName);

            _settings.CurrentFileName = xmlFilename;
            MainForm.instance.setFormCaption();
        }

        private void CopyAttachmentFiles(string sourceDir, string destDir)
        {
            string sourceAttachments = Path.Combine(sourceDir, Constants.AttachmentsFolderName);
            string destAttachments = Path.Combine(destDir, Constants.AttachmentsFolderName);

            if (!Directory.Exists(sourceAttachments))
            {
                return;
            }

            try
            {
                EnsureDirectoryExists(destAttachments);

                foreach (string file in Directory.GetFiles(sourceAttachments))
                {
                    string destFile = Path.Combine(destAttachments, Path.GetFileName(file));
                    File.Copy(file, destFile, true);
                }
            }
            catch (Exception)
            {
                ShowError(Constants.Messages.CannotCopyFiles);
                throw;
            }
        }

        private void CompressDirectory(string sourceDirectory, string targetPath)
        {
            sourceDirectory = sourceDirectory.Replace("\\\\", "\\");

            using (var zip = new ZipFile())
            {
                zip.CompressionLevel = CompressionLevel.BestCompression;
                
                var files = Directory.GetFiles(sourceDirectory, "*", SearchOption.AllDirectories);

                foreach (string file in files)
                {
                    string relativePath = Path.GetDirectoryName(file)
                        .Replace(sourceDirectory, string.Empty);
                    zip.AddFile(file, relativePath);
                }

                zip.Save(targetPath);
            }
        }

        private void NormalizeExtractedFiles(string directory)
        {
            foreach (string file in Directory.GetFiles(directory))
            {
                string fileName = Path.GetFileName(file);

                if (fileName.Contains(".xml.dat") && 
                    !File.Exists(Path.Combine(directory, Constants.DataBinaryFileName)))
                {
                    File.Move(file, Path.Combine(directory, Constants.DataBinaryFileName));
                }
                else if (fileName.EndsWith(".xml") && !fileName.Contains(".xml.dat") &&
                         !File.Exists(Path.Combine(directory, Constants.DataFileName)))
                {
                    File.Move(file, Path.Combine(directory, Constants.DataFileName));
                }
            }

            string attachmentsPath = Path.Combine(directory, Constants.AttachmentsFolderName);
            foreach (string dir in Directory.GetDirectories(directory))
            {
                if (!Directory.Exists(attachmentsPath))
                {
                    Directory.Move(dir, attachmentsPath);
                }
            }
        }

        private string CreateTempDirectory()
        {
            string basePath = Path.GetTempPath();
            string folderName;

            do
            {
                folderName = Misc.Tools.RandomString(5);
            } while (Directory.Exists(Path.Combine(basePath, folderName)));

            string fullPath = Path.Combine(basePath, folderName);
            Directory.CreateDirectory(fullPath);

            return fullPath;
        }

        private string GetAttachmentsDirectory()
        {
            return Path.Combine(Path.GetDirectoryName(_settings.CurrentFileName), Constants.AttachmentsFolderName);
        }

        private string GenerateUniqueFilePath(string directory, string extension)
        {
            string filePath;

            do
            {
                filePath = Path.Combine(directory, Misc.Tools.RandomString(20) + extension);
            } while (File.Exists(filePath));

            return filePath;
        }

        private void EnsureDirectoryExists(string path)
        {
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
        }

        private void SaveLastFileToRegistry()
        {
            try
            {
                Registry.SetLastFileName(_settings.ZipFileName);
                MainForm.instance.setFormCaption();
            }
            catch (Exception)
            {
                ShowError(Constants.Messages.CannotOpenFile);
            }
        }

        private void ShowError(string message)
        {
            MessageBox.Show(MainForm.instance, message, Constants.Messages.ErrorTitle, 
                MessageBoxButtons.OK, MessageBoxIcon.Error);
        }

        #endregion
    }
}

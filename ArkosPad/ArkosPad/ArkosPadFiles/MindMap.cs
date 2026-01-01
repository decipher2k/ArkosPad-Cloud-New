using System;
using System.IO;
using System.Text;
using System.Windows.Forms;
using RicherTextBoxDemo.Core;

namespace RicherTextBoxDemo.ArkosPadFiles
{
    /// <summary>
    /// Handles MindMap export functionality.
    /// </summary>
    public static class MindMap
    {
        private const string TemplateHeaderFile = "templates\\mm_header.mm";
        private const string TemplateFooterFile = "templates\\mm_footer.mm";

        /// <summary>
        /// Exports the selected tree node and its children to MindMap format.
        /// </summary>
        /// <param name="treeView">The tree view containing the nodes to export.</param>
        public static void exportToMindMap(TreeView treeView)
        {
            ExportToMindMap(treeView);
        }

        /// <summary>
        /// Exports the selected tree node and its children to MindMap format.
        /// </summary>
        /// <param name="treeView">The tree view containing the nodes to export.</param>
        public static void ExportToMindMap(TreeView treeView)
        {
            if (treeView?.SelectedNode == null)
            {
                return;
            }

            string filePath = PromptForSaveLocation();
            if (string.IsNullOrEmpty(filePath))
            {
                return;
            }

            try
            {
                ExportNodesToFile(treeView.SelectedNode.Nodes, filePath);
                ShowSuccess(Constants.Messages.ExportSuccessful);
            }
            catch (Exception)
            {
                ShowError("Failed to export MindMap.");
            }
        }

        private static string PromptForSaveLocation()
        {
            using (var dialog = new SaveFileDialog())
            {
                dialog.Title = "Export to MindMap";
                dialog.Filter = Constants.FileFilters.MindMapFiles;
                dialog.FileName = "export.mm";

                return dialog.ShowDialog() == DialogResult.OK 
                    ? dialog.FileName 
                    : null;
            }
        }

        private static void ExportNodesToFile(TreeNodeCollection nodes, string filePath)
        {
            using (var writer = new StreamWriter(filePath, false, Encoding.UTF8))
            {
                WriteHeader(writer);
                Nodes.exportNodeToMindmap(nodes, writer);
                WriteFooter(writer);
            }
        }

        private static void WriteHeader(StreamWriter writer)
        {
            if (File.Exists(TemplateHeaderFile))
            {
                writer.Write(File.ReadAllText(TemplateHeaderFile));
            }
        }

        private static void WriteFooter(StreamWriter writer)
        {
            if (File.Exists(TemplateFooterFile))
            {
                writer.Write(File.ReadAllText(TemplateFooterFile));
            }
        }

        private static void ShowSuccess(string message)
        {
            MessageBox.Show(MainForm.instance, message, Constants.Messages.SuccessTitle);
        }

        private static void ShowError(string message)
        {
            MessageBox.Show(MainForm.instance, message, Constants.Messages.ErrorTitle, 
                MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
    }
}

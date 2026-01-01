using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Windows.Forms;
using RicherTextBoxDemo.Core;
using RicherTextBoxDemo.DtO;

namespace RicherTextBoxDemo.ArkosPadFiles
{
    /// <summary>
    /// Handles tree node serialization and deserialization operations.
    /// </summary>
    internal class Nodes
    {
        private readonly AppSettings _settings;

        public Nodes()
        {
            _settings = AppSettings.Instance;
        }

        #region MindMap Export

        /// <summary>
        /// Exports tree nodes to MindMap format.
        /// </summary>
        public static void exportNodeToMindmap(TreeNodeCollection nodes, StreamWriter writer)
        {
            foreach (TreeNode node in nodes)
            {
                var nodeData = node.Tag as XmlNodeData;
                if (nodeData == null)
                {
                    continue;
                }

                string template = GetMindMapTemplate(nodeData);
                template = template.Replace("$$$NODE$$$", node.Text);
                template = template.Replace("$$$TAG$$$", node.Tag.ToString());

                if (HasNodeData(nodeData))
                {
                    string textContent = GetNodeTextContent(nodeData);
                    template = template.Replace("$$$TEXT$$$", $"\r\n{textContent}\r\n");
                }

                writer.Write(template);

                if (node.Nodes.Count > 0)
                {
                    exportNodeToMindmap(node.Nodes, writer);
                }

                writer.WriteLine("</node>");
            }
        }

        private static string GetMindMapTemplate(XmlNodeData nodeData)
        {
            string templateFile = HasNodeData(nodeData)
                ? "templates\\mm_details_node.mm"
                : "templates\\mm_std_node.mm";

            return File.ReadAllText(templateFile);
        }

        private static bool HasNodeData(XmlNodeData nodeData)
        {
            return AppSettings.Instance.Data.ContainsKey(nodeData.ID) &&
                   !string.IsNullOrWhiteSpace(AppSettings.Instance.Data[nodeData.ID].Data);
        }

        private static string GetNodeTextContent(XmlNodeData nodeData)
        {
            using (var richTextBox = new RicherTextBox.RicherTextBox())
            {
                richTextBox.Rtf = AppSettings.Instance.Data[nodeData.ID].Data;
                return richTextBox.Text.Replace("\"", "\\\"");
            }
        }

        #endregion

        #region XML Save Operations

        /// <summary>
        /// Saves tree nodes to XML format.
        /// </summary>
        public static void saveNode(TreeNodeCollection nodes, StreamWriter writer, 
            bool resetFocus = false, bool importFiles = false)
        {
            var settings = AppSettings.Instance;

            foreach (TreeNode node in nodes)
            {
                var nodeData = node.Tag as XmlNodeData;
                if (nodeData == null)
                {
                    continue;
                }

                ProcessCloudSync(node, nodeData, importFiles, settings);
                UpdateNodeFocusState(node, nodeData, resetFocus, settings);
                WriteNodeToXml(node, nodeData, writer, resetFocus, importFiles, settings);
            }
        }

        private static void ProcessCloudSync(TreeNode node, XmlNodeData nodeData, 
            bool importFiles, AppSettings settings)
        {
            if (!settings.IsCloudMode && !importFiles)
            {
                return;
            }

            if (!importFiles)
            {
                UploadNodeToCloud(node, nodeData, settings);
            }
            else
            {
                DownloadFilesFromCloud(nodeData, settings);
            }
        }

        private static void UploadNodeToCloud(TreeNode node, XmlNodeData nodeData, AppSettings settings)
        {
            string nodeId = nodeData.ID;
            var treeItem = settings.Data[nodeId];

            Sync.UpdateOrAddNode(treeItem.Data, treeItem.Weight, node);

            PageDto dto = new PageDto
            {
                session = settings.CloudSession,
                url = Sync.getUrlFromTreeNode(node)
            };

            string cloudNodeId = Sync.HttpPost(
                Newtonsoft.Json.JsonConvert.SerializeObject(dto),
                Constants.ApiEndpoints.GetIdByPath);

            foreach (FileItem file in treeItem.Files)
            {
                string filePath = Path.Combine(settings.TempDirectory, Constants.AttachmentsFolderName, file.FilePath);
                Sync.UploadFile(filePath, int.Parse(cloudNodeId), file.Caption);
            }
        }

        private static void DownloadFilesFromCloud(XmlNodeData nodeData, AppSettings settings)
        {
            string nodeId = nodeData.ID;
            var cloudFiles = Sync.GetFiles(int.Parse(nodeId));

            if (cloudFiles == null)
            {
                return;
            }

            foreach (var fileCapsule in cloudFiles)
            {
                int fileId = fileCapsule.file.id;
                string localPath = Path.Combine(settings.TempDirectory, Constants.AttachmentsFolderName, fileCapsule.file.encName);

                Sync.DownloadFile(fileId, localPath);

                settings.Data[nodeId].Files.Add(new FileItem
                {
                    Caption = fileCapsule.file.fileName,
                    FilePath = fileCapsule.file.encName,
                    CloudId = fileId
                });
            }
        }

        private static void UpdateNodeFocusState(TreeNode node, XmlNodeData nodeData, 
            bool resetFocus, AppSettings settings)
        {
            if (!settings.Data.ContainsKey(nodeData.ID))
            {
                return;
            }

            if (resetFocus)
            {
                settings.Data[nodeData.ID].IsFocused = false;
                node.NodeFont = new Font(SystemFonts.DefaultFont, FontStyle.Regular);
            }
            else if (settings.Data[nodeData.ID].IsFocused)
            {
                node.NodeFont = new Font(SystemFonts.DefaultFont, FontStyle.Bold);
            }
        }

        private static void WriteNodeToXml(TreeNode node, XmlNodeData nodeData, 
            StreamWriter writer, bool resetFocus, bool importFiles, AppSettings settings)
        {
            if (settings.IsCloudMode)
            {
                return;
            }

            bool isFocused = settings.Data.ContainsKey(nodeData.ID) && 
                             settings.Data[nodeData.ID].IsFocused;

            string focusValue = isFocused ? "1" : "0";
            string openTag = $"<ID{nodeData.ID} name=\"{node.Text}\" tag=\"{nodeData.ID}\" focus=\"{focusValue}\">";
            string closeTag = $"</ID{nodeData.ID}>";

            writer.WriteLine(openTag);

            if (node.Nodes.Count > 0)
            {
                saveNode(node.Nodes, writer, resetFocus, importFiles);
            }

            writer.WriteLine(closeTag);
        }

        #endregion

        #region XML Load Operations

        /// <summary>
        /// Adds tree nodes from XML data recursively.
        /// </summary>
        public void addTreeNode(System.Xml.XmlNode xmlNode, TreeNode treeNode, 
            Dictionary<string, TreeItem> data, string activeNodeId = null)
        {
            if (!xmlNode.HasChildNodes)
            {
                ProcessLeafNode(xmlNode, treeNode, activeNodeId);
                return;
            }

            foreach (System.Xml.XmlNode childXmlNode in xmlNode.ChildNodes)
            {
                string nodeId = GetNodeIdFromXml(childXmlNode);
                TreeNode newTreeNode = CreateTreeNodeFromXml(childXmlNode, nodeId);

                treeNode.Nodes.Add(newTreeNode);
                SetActiveNode(treeNode, nodeId, activeNodeId);
                ApplyNodeStyle(newTreeNode, childXmlNode);

                addTreeNode(childXmlNode, newTreeNode, data, activeNodeId);
            }

            SortChildNodesByWeight(treeNode);
        }

        /// <summary>
        /// Adds tree nodes from sync data (cloud) recursively.
        /// </summary>
        public static Dictionary<string, TreeItem> addTreeNodeSync(SyncDTO syncData, 
            TreeNode treeNode, Dictionary<string, TreeItem> data, string activeNodeId = null)
        {
            var treeItem = CreateTreeItemFromSync(syncData);

            if (syncData.ID != Constants.RootNodeId)
            {
                data.Add(syncData.ID, treeItem);
            }

            if (syncData.Children.Count == 0)
            {
                ProcessSyncLeafNode(syncData, treeNode, activeNodeId);
                return data;
            }

            foreach (var childSyncData in syncData.Children)
            {
                TreeNode childNode = CreateTreeNodeFromSync(childSyncData);
                treeNode.Nodes.Add(childNode);

                SetActiveNode(treeNode, syncData.ID, activeNodeId);
                ApplySyncNodeStyle(childNode, childSyncData);

                data = addTreeNodeSync(childSyncData, childNode, data, activeNodeId);
            }

            SortChildNodesByWeight(treeNode);
            return data;
        }

        #endregion

        #region Private Helper Methods

        private void ProcessLeafNode(System.Xml.XmlNode xmlNode, TreeNode treeNode, string activeNodeId)
        {
            string nodeId = xmlNode.Name.Replace("ID", "");
            SetActiveNode(treeNode, nodeId, activeNodeId);
            ApplyNodeStyle(treeNode, xmlNode);

            if (xmlNode.Attributes?.Count > 0)
            {
                treeNode.Text = xmlNode.Attributes[0].Value;
                treeNode.Tag = new XmlNodeData
                {
                    ID = nodeId,
                    focus = xmlNode.Attributes.Count > 2 && xmlNode.Attributes[2].Value == "1",
                    weight = ++_settings.MaxWeight
                };
            }
        }

        private static void ProcessSyncLeafNode(SyncDTO syncData, TreeNode treeNode, string activeNodeId)
        {
            SetActiveNode(treeNode, syncData.ID, activeNodeId);
            ApplySyncNodeStyle(treeNode, syncData);

            treeNode.Text = syncData.Name;
            treeNode.Tag = new XmlNodeData
            {
                ID = syncData.ID,
                focus = syncData.IsFocused,
                weight = syncData.Weight
            };
        }

        private string GetNodeIdFromXml(System.Xml.XmlNode xmlNode)
        {
            return xmlNode.Name == Constants.RootNodeName
                ? Constants.RootNodeId
                : xmlNode.Name.Replace("ID", "");
        }

        private TreeNode CreateTreeNodeFromXml(System.Xml.XmlNode xmlNode, string nodeId)
        {
            bool isFocused = xmlNode.Attributes?.Count > 2 && xmlNode.Attributes[2].Value == "1";

            var treeNode = new TreeNode(xmlNode.Attributes?[0]?.Value ?? string.Empty)
            {
                Tag = new XmlNodeData
                {
                    ID = nodeId,
                    focus = isFocused,
                    weight = ++_settings.MaxWeight
                }
            };

            return treeNode;
        }

        private static TreeNode CreateTreeNodeFromSync(SyncDTO syncData)
        {
            return new TreeNode(syncData.Name)
            {
                Tag = new XmlNodeData
                {
                    ID = syncData.ID,
                    focus = syncData.IsFocused,
                    weight = syncData.Weight
                }
            };
        }

        private static TreeItem CreateTreeItemFromSync(SyncDTO syncData)
        {
            string rtfData = string.IsNullOrWhiteSpace(syncData.Data)
                ? string.Empty
                : Sync.toRtf(syncData.Data);

            return new TreeItem
            {
                Weight = syncData.Weight,
                Name = syncData.Name,
                Data = rtfData,
                IsFocused = syncData.IsFocused
            };
        }

        private static void SetActiveNode(TreeNode parentNode, string nodeId, string activeNodeId)
        {
            if (nodeId == activeNodeId && parentNode.TreeView != null)
            {
                parentNode.TreeView.SelectedNode = parentNode;
            }
        }

        private static void ApplyNodeStyle(TreeNode treeNode, System.Xml.XmlNode xmlNode)
        {
            if (xmlNode.Attributes?.Count <= 2)
            {
                return;
            }

            bool isFocused = xmlNode.Attributes[2].Value == "1";
            var fontStyle = isFocused ? FontStyle.Bold : FontStyle.Regular;
            treeNode.NodeFont = new Font(SystemFonts.DefaultFont, fontStyle);
        }

        private static void ApplySyncNodeStyle(TreeNode treeNode, SyncDTO syncData)
        {
            var fontStyle = syncData.IsFocused ? FontStyle.Bold : FontStyle.Regular;
            treeNode.NodeFont = new Font(SystemFonts.DefaultFont, fontStyle);
        }

        private static void SortChildNodesByWeight(TreeNode parentNode)
        {
            var sortedNodes = parentNode.Nodes
                .Cast<TreeNode>()
                .OrderBy(n => ((XmlNodeData)n.Tag)?.weight ?? 0)
                .ToList();

            parentNode.Nodes.Clear();
            parentNode.Nodes.AddRange(sortedNodes.ToArray());
        }

        #endregion
    }
}

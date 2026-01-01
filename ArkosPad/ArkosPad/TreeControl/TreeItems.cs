using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;
using RicherTextBoxDemo.Core;
using RicherTextBoxDemo.DtO;
using RicherTextBoxDemo.Services;
using ProjectFiles = RicherTextBoxDemo.ArkosPadFiles.Files;
using AttachmentFiles = RicherTextBoxDemo.Attachments.Files;

namespace RicherTextBoxDemo.TreeControl
{
    /// <summary>
    /// Handles tree item selection and creation operations.
    /// </summary>
    public class TreeItems
    {
        private static readonly char[] ValidStartCharacters = 
            "abcdefghijklmnopqrstuvwxyz".ToCharArray();

        private readonly TreeNodeService _nodeService;

        public TreeItems()
        {
            _nodeService = new TreeNodeService();
        }

        /// <summary>
        /// Handles selection of a tree item and updates the UI accordingly.
        /// </summary>
        public static void SelectedItem(MainForm mainForm, 
            System.Windows.Forms.ListView listView, 
            System.Windows.Forms.TreeView treeView, 
            Dictionary<string, TreeItem> data)
        {
            TreeNode selectedNode = mainForm.getSelectedNode();
            
            if (selectedNode == null)
            {
                return;
            }

            if (Globals.isCloud)
            {
                LoadCloudFiles(mainForm, selectedNode);
            }
            else
            {
                new AttachmentFiles(listView, treeView).updateFileList(mainForm);
            }

            LoadNodeContent(mainForm, selectedNode, data);
        }

        /// <summary>
        /// Adds a new item to the tree.
        /// </summary>
        public void addItem(System.Windows.Forms.TreeView treeView, 
            RicherTextBox.RicherTextBox richerTextBox)
        {
            var dialog = new New();
            
            if (dialog.ShowDialog() != DialogResult.OK)
            {
                return;
            }

            string name = dialog.mName;

            if (!IsValidItemName(name))
            {
                ShowError(Constants.Messages.ItemNameMustStartWithLetter);
                return;
            }

            if (ItemExistsInSelectedNode(treeView, name))
            {
                return;
            }

            CreateNewTreeItem(treeView, name, dialog.Weight);
            SaveChangesIfNeeded(treeView, richerTextBox);
        }

        private static void LoadCloudFiles(MainForm mainForm, TreeNode node)
        {
            if (node.Tag == null)
            {
                return;
            }

            var nodeData = node.Tag as XmlNodeData;
            if (nodeData == null)
            {
                return;
            }

            var files = Sync.GetFiles(int.Parse(nodeData.ID));
            
            foreach (var file in files)
            {
                var listViewItem = new ListViewItem
                {
                    Text = file.file.fileName,
                    Tag = file.file.id
                };
                mainForm.addLbFile(listViewItem);
            }
        }

        private static void LoadNodeContent(MainForm mainForm, TreeNode node, 
            Dictionary<string, TreeItem> data)
        {
            if (node.Tag == null)
            {
                mainForm.setRtfContent(string.Empty);
                return;
            }

            var nodeData = node.Tag as XmlNodeData;
            if (nodeData == null)
            {
                mainForm.setRtfContent(string.Empty);
                return;
            }

            string nodeId = nodeData.ID;
            
            if (data.ContainsKey(nodeId))
            {
                mainForm.setRtfContent(data[nodeId].Data);
            }
            else
            {
                mainForm.setRtfContent(string.Empty);
            }
        }

        private bool IsValidItemName(string name)
        {
            if (string.IsNullOrEmpty(name))
            {
                return false;
            }

            char firstChar = char.ToLower(name[0]);
            return ValidStartCharacters.Contains(firstChar);
        }

        private bool ItemExistsInSelectedNode(System.Windows.Forms.TreeView treeView, string name)
        {
            if (treeView.SelectedNode == null)
            {
                return false;
            }

            return treeView.SelectedNode.Nodes
                .Cast<TreeNode>()
                .Any(n => n.Text == name);
        }

        private void CreateNewTreeItem(System.Windows.Forms.TreeView treeView, 
            string name, string weightString)
        {
            Globals.notSaved = true;

            var treeItem = new TreeItem
            {
                Name = name,
                Weight = Globals._maxWeight + 1,
                Data = string.Empty
            };
            
            Globals._maxWeight++;

            int id = Misc.Tools.getNextID();
            Globals.data.Add(id.ToString(), treeItem);

            var newNode = CreateTreeNode(name, id, treeItem.Weight);
            AddNodeToTree(treeView, newNode);

            if (Globals.isCloud)
            {
                SyncNewNode(treeView, newNode, treeItem);
            }
        }

        private TreeNode CreateTreeNode(string name, int id, int weight)
        {
            return new TreeNode
            {
                Name = name + id,
                Text = name,
                Tag = new XmlNodeData
                {
                    ID = id.ToString(),
                    focus = false,
                    weight = weight
                }
            };
        }

        private void AddNodeToTree(System.Windows.Forms.TreeView treeView, TreeNode newNode)
        {
            TreeNode selectedNode = treeView.SelectedNode;

            if (selectedNode != null)
            {
                selectedNode.Nodes.Add(newNode);
                selectedNode.Expand();
            }
            else
            {
                treeView.Nodes.Add(newNode);
                treeView.ExpandAll();
            }
        }

        private void SyncNewNode(System.Windows.Forms.TreeView treeView, 
            TreeNode newNode, TreeItem treeItem)
        {
            Sync.UpdateOrAddNode(" ", treeItem.Weight, newNode);
            treeView.Nodes.Remove(newNode);
        }

        private void SaveChangesIfNeeded(System.Windows.Forms.TreeView treeView, 
            RicherTextBox.RicherTextBox richerTextBox)
        {
            if (!string.IsNullOrEmpty(Globals._filename))
            {
                new ProjectFiles(treeView).exportToXml(richerTextBox, Globals._filename);
            }
        }

        private void ShowError(string message)
        {
            MessageBox.Show(MainForm.instance, message, Constants.Messages.ErrorTitle, 
                MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
    }
}

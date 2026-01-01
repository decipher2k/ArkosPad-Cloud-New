using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Windows.Forms;
using RicherTextBoxDemo.Core;
using RicherTextBoxDemo.DtO;

namespace RicherTextBoxDemo.Services
{
    /// <summary>
    /// Service for tree node operations.
    /// Consolidates tree manipulation logic using Command Pattern concepts.
    /// </summary>
    public class TreeNodeService
    {
        private readonly AppSettings _settings;

        public TreeNodeService()
        {
            _settings = AppSettings.Instance;
        }

        /// <summary>
        /// Moves a tree node up in the sibling order.
        /// </summary>
        public void MoveNodeUp(TreeNode node)
        {
            if (node == null || node.Index < 1)
            {
                return;
            }

            TreeNode previousNode = node.Parent.Nodes[node.Index - 1];
            SwapNodeWeights(node, previousNode);

            if (_settings.IsCloudMode)
            {
                SyncBothNodes(node, previousNode);
            }
            else
            {
                MoveNodeInTree(node, node.Index - 1);
            }

            _settings.MarkAsModified();
        }

        /// <summary>
        /// Moves a tree node down in the sibling order.
        /// </summary>
        public void MoveNodeDown(TreeNode node)
        {
            if (node == null || node.Parent == null)
            {
                return;
            }

            if (node.Index >= node.Parent.Nodes.Count - 1)
            {
                return;
            }

            TreeNode nextNode = node.Parent.Nodes[node.Index + 1];
            SwapNodeWeights(node, nextNode);

            if (_settings.IsCloudMode)
            {
                SyncBothNodes(node, nextNode);
            }
            else
            {
                MoveNodeInTree(node, node.Index + 1);
            }

            _settings.MarkAsModified();
        }

        /// <summary>
        /// Removes a node and all its children from the tree.
        /// </summary>
        public void RemoveNode(TreeNode node)
        {
            if (node == null)
            {
                return;
            }

            // Recursively remove child nodes first
            while (node.Nodes.Count > 0)
            {
                RemoveNode(node.Nodes[0]);
            }

            // Remove from data dictionary
            var nodeData = node.Tag as XmlNodeData;
            if (nodeData != null)
            {
                _settings.Data.Remove(nodeData.ID);
            }

            node.Remove();
        }

        /// <summary>
        /// Creates a new tree item with the given name.
        /// </summary>
        public TreeNode CreateNode(string name, TreeNode parentNode)
        {
            if (!IsValidNodeName(name))
            {
                throw new ArgumentException(Constants.Messages.ItemNameMustStartWithLetter);
            }

            if (NodeExistsInParent(name, parentNode))
            {
                return null;
            }

            int id = GetNextNodeId();
            int weight = _settings.GetNextWeight();

            var treeItem = new TreeItem
            {
                Name = name,
                Weight = weight,
                Data = string.Empty
            };

            _settings.Data.Add(id.ToString(), treeItem);

            var newNode = new TreeNode
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

            if (parentNode != null)
            {
                parentNode.Nodes.Add(newNode);
                parentNode.Expand();
            }

            return newNode;
        }

        /// <summary>
        /// Updates the focus state of a node.
        /// </summary>
        public void ToggleNodeFocus(TreeNode node)
        {
            var nodeData = node?.Tag as XmlNodeData;
            if (nodeData == null)
            {
                return;
            }

            if (_settings.Data.ContainsKey(nodeData.ID))
            {
                _settings.Data[nodeData.ID].IsFocused = !_settings.Data[nodeData.ID].IsFocused;
                UpdateNodeAppearance(node, _settings.Data[nodeData.ID].IsFocused);
                _settings.MarkAsModified();
            }
        }

        /// <summary>
        /// Updates the visual appearance of a node based on focus state.
        /// </summary>
        public void UpdateNodeAppearance(TreeNode node, bool isFocused)
        {
            if (node == null)
            {
                return;
            }

            var fontStyle = isFocused ? FontStyle.Bold : FontStyle.Regular;
            node.NodeFont = new Font(SystemFonts.DefaultFont, fontStyle);
        }

        /// <summary>
        /// Sorts child nodes by weight.
        /// </summary>
        public void SortNodesByWeight(TreeNode parentNode)
        {
            var sortedNodes = parentNode.Nodes
                .Cast<TreeNode>()
                .OrderBy(n => ((XmlNodeData)n.Tag)?.weight ?? 0)
                .ToList();

            parentNode.Nodes.Clear();
            parentNode.Nodes.AddRange(sortedNodes.ToArray());
        }

        private void SwapNodeWeights(TreeNode node1, TreeNode node2)
        {
            var nodeData1 = node1.Tag as XmlNodeData;
            var nodeData2 = node2.Tag as XmlNodeData;

            if (nodeData1 == null || nodeData2 == null)
            {
                return;
            }

            string id1 = nodeData1.ID;
            string id2 = nodeData2.ID;

            if (_settings.Data.ContainsKey(id1) && _settings.Data.ContainsKey(id2))
            {
                int tempWeight = _settings.Data[id1].Weight;
                _settings.Data[id1].Weight = _settings.Data[id2].Weight;
                _settings.Data[id2].Weight = tempWeight;
            }
        }

        private void SyncBothNodes(TreeNode node1, TreeNode node2)
        {
            var nodeData1 = node1.Tag as XmlNodeData;
            var nodeData2 = node2.Tag as XmlNodeData;

            if (nodeData1 != null && _settings.Data.ContainsKey(nodeData1.ID))
            {
                var item = _settings.Data[nodeData1.ID];
                Sync.UpdateOrAddNode(item.Data, item.Weight, node1);
            }

            if (nodeData2 != null && _settings.Data.ContainsKey(nodeData2.ID))
            {
                var item = _settings.Data[nodeData2.ID];
                Sync.UpdateOrAddNode(item.Data, item.Weight, node2);
            }
        }

        private void MoveNodeInTree(TreeNode node, int newIndex)
        {
            TreeNode parent = node.Parent;
            TreeView view = node.TreeView;

            if (parent != null)
            {
                int currentIndex = parent.Nodes.IndexOf(node);
                if (currentIndex >= 0 && newIndex >= 0 && newIndex < parent.Nodes.Count)
                {
                    parent.Nodes.RemoveAt(currentIndex);
                    parent.Nodes.Insert(newIndex, node);
                }
            }
            else if (view != null && view.Nodes.Contains(node))
            {
                int currentIndex = view.Nodes.IndexOf(node);
                if (currentIndex >= 0 && newIndex >= 0 && newIndex < view.Nodes.Count)
                {
                    view.Nodes.RemoveAt(currentIndex);
                    view.Nodes.Insert(newIndex, node);
                }
            }
        }

        private bool IsValidNodeName(string name)
        {
            if (string.IsNullOrEmpty(name))
            {
                return false;
            }

            char firstChar = char.ToLower(name[0]);
            return firstChar >= 'a' && firstChar <= 'z';
        }

        private bool NodeExistsInParent(string name, TreeNode parentNode)
        {
            if (parentNode == null)
            {
                return false;
            }

            return parentNode.Nodes.Cast<TreeNode>().Any(n => n.Text == name);
        }

        private int GetNextNodeId()
        {
            int maxId = 0;
            
            foreach (string key in _settings.Data.Keys)
            {
                if (int.TryParse(key, out int id) && id > maxId)
                {
                    maxId = id;
                }
            }

            return maxId == 0 ? 2 : maxId + 1;
        }
    }
}

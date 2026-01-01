using System;
using System.Windows.Forms;
using RicherTextBoxDemo.DtO;
using RicherTextBoxDemo.Services;

namespace RicherTextBoxDemo.TreeControl
{
    /// <summary>
    /// Static helper class for tree node movement operations.
    /// Delegates to TreeNodeService for actual implementation.
    /// </summary>
    public static class TreeNodes
    {
        private static readonly TreeNodeService NodeService = new TreeNodeService();

        /// <summary>
        /// Moves the specified node up in the sibling order.
        /// </summary>
        public static void moveNodeUp(TreeNode node)
        {
            if (node?.Tag == null)
            {
                return;
            }

            NodeService.MoveNodeUp(node);
        }

        /// <summary>
        /// Moves the specified node down in the sibling order.
        /// </summary>
        public static void moveNodeDown(TreeNode node)
        {
            if (node?.Tag == null)
            {
                return;
            }

            NodeService.MoveNodeDown(node);
        }

        /// <summary>
        /// Moves a node up in the tree structure.
        /// </summary>
        public static void MoveUp(TreeNode node)
        {
            if (node == null)
            {
                return;
            }

            TreeNode parent = node.Parent;
            System.Windows.Forms.TreeView view = node.TreeView;

            if (parent != null)
            {
                int index = parent.Nodes.IndexOf(node);
                if (index > 0)
                {
                    parent.Nodes.RemoveAt(index);
                    parent.Nodes.Insert(index - 1, node);
                }
            }
            else if (view?.Nodes.Contains(node) == true)
            {
                int index = view.Nodes.IndexOf(node);
                if (index > 0)
                {
                    view.Nodes.RemoveAt(index);
                    view.Nodes.Insert(index - 1, node);
                }
            }
        }

        /// <summary>
        /// Moves a node down in the tree structure.
        /// </summary>
        public static void MoveDown(TreeNode node)
        {
            if (node == null)
            {
                return;
            }

            TreeNode parent = node.Parent;
            System.Windows.Forms.TreeView view = node.TreeView;

            if (parent != null)
            {
                int index = parent.Nodes.IndexOf(node);
                if (index < parent.Nodes.Count - 1)
                {
                    parent.Nodes.RemoveAt(index);
                    parent.Nodes.Insert(index + 1, node);
                }
            }
            else if (view?.Nodes.Contains(node) == true)
            {
                int index = view.Nodes.IndexOf(node);
                if (index < view.Nodes.Count - 1)
                {
                    view.Nodes.RemoveAt(index);
                    view.Nodes.Insert(index + 1, node);
                }
            }

            SyncNodeIfCloud(node);
        }

        private static void SyncNodeIfCloud(TreeNode node)
        {
            if (!Globals.isCloud)
            {
                return;
            }

            var nodeData = node?.Tag as XmlNodeData;
            if (nodeData != null && Globals.data.ContainsKey(nodeData.ID))
            {
                var item = Globals.data[nodeData.ID];
                Sync.UpdateOrAddNode(item.data, item.weight, node);
            }
        }
    }
}

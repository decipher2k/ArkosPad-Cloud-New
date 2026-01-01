using System;
using System.Drawing;
using System.IO;
using System.Windows.Forms;
using System.Xml;

namespace RicherTextBox
{
    /// <summary>
    /// Handles save and load operations for tree nodes in RicherTextBox context.
    /// </summary>
    internal static class SaveLoad
    {
        /// <summary>
        /// Adds tree nodes from XML data recursively.
        /// </summary>
        /// <param name="xmlNode">The XML node to process.</param>
        /// <param name="treeNode">The tree node to add children to.</param>
        /// <param name="activeNodeId">Optional ID of the node to select.</param>
        public static void addTreeNode(XmlNode xmlNode, TreeNode treeNode, string activeNodeId = null)
        {
            AddTreeNode(xmlNode, treeNode, activeNodeId);
        }

        /// <summary>
        /// Adds tree nodes from XML data recursively.
        /// </summary>
        /// <param name="xmlNode">The XML node to process.</param>
        /// <param name="treeNode">The tree node to add children to.</param>
        /// <param name="activeNodeId">Optional ID of the node to select.</param>
        public static void AddTreeNode(XmlNode xmlNode, TreeNode treeNode, string activeNodeId = null)
        {
            if (!xmlNode.HasChildNodes)
            {
                ProcessLeafNode(xmlNode, treeNode, activeNodeId);
                return;
            }

            foreach (XmlNode childXmlNode in xmlNode.ChildNodes)
            {
                TreeNode newTreeNode = CreateTreeNodeFromXml(childXmlNode);
                treeNode.Nodes.Add(newTreeNode);

                SetActiveNodeIfMatch(treeNode, xmlNode, activeNodeId);
                ApplyNodeStyle(newTreeNode, childXmlNode);

                AddTreeNode(childXmlNode, newTreeNode, activeNodeId);
            }
        }

        #region Private Helper Methods

        private static void ProcessLeafNode(XmlNode xmlNode, TreeNode treeNode, string activeNodeId)
        {
            string nodeId = ExtractNodeId(xmlNode);
            SetActiveNodeIfMatch(treeNode, nodeId, activeNodeId);
            ApplyNodeStyle(treeNode, xmlNode);

            if (xmlNode.Attributes?.Count > 0)
            {
                treeNode.Text = xmlNode.Attributes[0].Value;
            }
        }

        private static TreeNode CreateTreeNodeFromXml(XmlNode xmlNode)
        {
            string nodeName = xmlNode.Attributes?.Count > 0 
                ? xmlNode.Attributes[0].Value 
                : string.Empty;

            string nodeTag = xmlNode.Attributes?.Count > 1 
                ? xmlNode.Attributes[1].Value 
                : string.Empty;

            return new TreeNode(nodeName)
            {
                Tag = nodeTag
            };
        }

        private static string ExtractNodeId(XmlNode xmlNode)
        {
            return xmlNode.Name.Replace("ID", string.Empty);
        }

        private static void SetActiveNodeIfMatch(TreeNode parentNode, XmlNode xmlNode, string activeNodeId)
        {
            string nodeId = ExtractNodeId(xmlNode);
            SetActiveNodeIfMatch(parentNode, nodeId, activeNodeId);
        }

        private static void SetActiveNodeIfMatch(TreeNode parentNode, string nodeId, string activeNodeId)
        {
            if (nodeId == activeNodeId && parentNode.TreeView != null)
            {
                parentNode.TreeView.SelectedNode = parentNode;
            }
        }

        private static void ApplyNodeStyle(TreeNode treeNode, XmlNode xmlNode)
        {
            if (xmlNode.Attributes?.Count <= 2)
            {
                return;
            }

            bool isFocused = xmlNode.Attributes[2].Value == "1";
            var fontStyle = isFocused ? FontStyle.Bold : FontStyle.Regular;
            treeNode.NodeFont = new Font(SystemFonts.DefaultFont, fontStyle);
        }

        #endregion
    }
}

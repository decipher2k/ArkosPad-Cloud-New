using System;
using System.Collections.Generic;
using System.Windows.Forms;
using RicherTextBoxDemo.ArkosPadFiles;
using RicherTextBoxDemo.Core;
using RicherTextBoxDemo.DtO;
using RicherTextBoxDemo.Services;

namespace RicherTextBoxDemo
{
    /// <summary>
    /// Handles synchronization between local and cloud storage.
    /// Acts as a facade for cloud operations.
    /// </summary>
    public static class Sync
    {
        private static readonly CloudStorageService CloudService = new CloudStorageService();
        
        public static DateTime lastSync = DateTime.Now;

        /// <summary>
        /// Converts HTML content to RTF format.
        /// </summary>
        public static string toRtf(string html)
        {
            if (string.IsNullOrWhiteSpace(html))
            {
                return string.Empty;
            }

            using (var rtbTemp = new RichTextBox())
            using (var wb = new WebBrowser())
            {
                wb.Navigate("about:blank");
                wb.Document.Write(html);
                wb.Document.ExecCommand("SelectAll", false, null);
                wb.Document.ExecCommand("Copy", false, null);

                rtbTemp.SelectAll();
                rtbTemp.Paste();

                return rtbTemp.Rtf;
            }
        }

        /// <summary>
        /// Performs HTTP GET request.
        /// </summary>
        [Obsolete("Use HttpClientService directly")]
        public static string Get(string uri)
        {
            var httpClient = new HttpClientService();
            return httpClient.Get(uri);
        }

        /// <summary>
        /// Uploads a file to the cloud.
        /// </summary>
        public static void UploadFile(string filePath, int nodeId, string fileName = "")
        {
            CloudService.UploadFile(filePath, nodeId, fileName);
        }

        /// <summary>
        /// Gets files associated with a node.
        /// </summary>
        public static List<FileDto.fileCapsule> GetFiles(int nodeId)
        {
            return CloudService.GetFiles(nodeId);
        }

        /// <summary>
        /// Deletes a file from the cloud.
        /// </summary>
        public static void DeleteFile(int fileId)
        {
            CloudService.DeleteFileById(fileId);
        }

        /// <summary>
        /// Downloads a file from the cloud.
        /// </summary>
        public static void DownloadFile(int fileId, string destinationPath)
        {
            CloudService.DownloadFile(fileId, destinationPath);
        }

        /// <summary>
        /// Fetches all nodes from cloud and populates the tree view.
        /// </summary>
        public static Dictionary<string, TreeItem> fetchNodes(TreeView treeView)
        {
            treeView.Nodes[0].Nodes.Clear();

            SyncDTO root = CloudService.FetchNodes();
            var data = Nodes.addTreeNodeSync(root, treeView.Nodes[0], new Dictionary<string, TreeItem>());
            
            treeView.ExpandAll();
            return data;
        }

        /// <summary>
        /// Deletes a node from the cloud.
        /// </summary>
        public static void DeleteNode(TreeNode node)
        {
            string nodePath = GetUrlFromTreeNode(node);
            CloudService.DeleteNode(nodePath);
        }

        /// <summary>
        /// Clears all cloud data.
        /// </summary>
        public static void Clear()
        {
            if (AppSettings.Instance.IsCloudMode)
            {
                CloudService.ClearCloud();
            }
        }

        /// <summary>
        /// Constructs a URL path from a tree node's hierarchy.
        /// </summary>
        public static string getUrlFromTreeNode(TreeNode node)
        {
            return GetUrlFromTreeNode(node);
        }

        /// <summary>
        /// Constructs a URL path from a tree node's hierarchy.
        /// </summary>
        public static string GetUrlFromTreeNode(TreeNode node)
        {
            if (node == null)
            {
                throw new ArgumentNullException(nameof(node));
            }

            string path = node.Text;
            TreeNode current = node;

            while (current.Parent != null)
            {
                current = current.Parent;
                
                if (current.Tag != null)
                {
                    var nodeData = current.Tag as XmlNodeData;
                    if (nodeData != null && nodeData.ID != Constants.RootNodeId)
                    {
                        path = current.Text + ":" + path;
                    }
                }
            }

            if (path == Constants.RootNodeName)
            {
                throw new InvalidOperationException("Cannot get URL for root node");
            }

            return path;
        }

        /// <summary>
        /// Updates or adds a node in the cloud.
        /// </summary>
        public static void UpdateOrAddNode(string text, int weight, TreeNode node)
        {
            string nodePath = GetUrlFromTreeNode(node);
            CloudService.UpdateOrAddNode(text, weight, nodePath);
        }

        /// <summary>
        /// Performs HTTP POST request.
        /// </summary>
        public static string HttpPost(string jsonData, string path)
        {
            var httpClient = new HttpClientService();
            return httpClient.Post(AppSettings.Instance.CloudUrl + path, jsonData);
        }

        /// <summary>
        /// Gets the last synchronization time from the server.
        /// </summary>
        public static DateTime GetLastSyncTime()
        {
            return CloudService.GetLastSyncTime();
        }
    }
}

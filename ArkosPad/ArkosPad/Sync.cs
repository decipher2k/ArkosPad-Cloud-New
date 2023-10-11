using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Collections.Specialized.BitVector32;

namespace RicherTextBoxDemo
{
    public class Sync
    {

        public static DateTime lastSync=DateTime.Now;
        public static String toRtf(String html)
        {
            RichTextBox rtbTemp = new RichTextBox();
            WebBrowser wb = new WebBrowser();
            wb.Navigate("about:blank");

            wb.Document.Write(html);
            wb.Document.ExecCommand("SelectAll", false, null);
            wb.Document.ExecCommand("Copy", false, null);

            rtbTemp.SelectAll();
            rtbTemp.Paste();

            return rtbTemp.Rtf;
        }
        public static string Get(string uri)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri);
            request.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;
            request.Method = "GET";
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using (Stream stream = response.GetResponseStream())
            using (StreamReader reader = new StreamReader(stream))
            {
                return reader.ReadToEnd();
            }
        }
        public static Dictionary<String, TreeItem> fetchNodes(TreeView treeView)
        {
            treeView.Nodes[0].Nodes.Clear();

            String content = Get(MainForm.cloudURL+"/api/Sync/GetNodes?session="+MainForm.cloudSession);
            List<SyncDTO> list = new List<SyncDTO>();
            SyncDTO root = Newtonsoft.Json.JsonConvert.DeserializeObject<SyncDTO>(content);
            
            Dictionary<String, TreeItem> ret = SaveLoad.addTreeNodeSync(root, treeView.Nodes[0], new Dictionary<string, TreeItem>());
            treeView.ExpandAll();
            return ret;
        }

        public static void DeleteNode(TreeNode item)
        {
            PageDto pageDto = new PageDto();
            pageDto.session = MainForm.cloudSession;
            pageDto.url = getUrlFromTreeNode(item);

            HttpPost(Newtonsoft.Json.JsonConvert.SerializeObject(pageDto), "/api/MarkdownPage/DeletePage");
        }

        public static String getUrlFromTreeNode(TreeNode node)
        {
            String ret = node.Text;
            while(node.Parent!=null)
            {
                node = node.Parent;
                if(node.Tag!=null)
                    ret = node.Text + ":" + ret;
            }
            return ret;
        }

        public static void UpdateOrAddNode(String text, int weight, TreeNode item)
        {
            PageDto pageDto = new PageDto();
            pageDto.url = getUrlFromTreeNode(item);
            pageDto.text = text;
            pageDto.weight = weight;
            pageDto.session= MainForm.cloudSession;
            HttpPost(Newtonsoft.Json.JsonConvert.SerializeObject(pageDto), "/api/MarkdownPage/SaveMarkupPage");
        }

        public static String HttpPost(String data, String path)
        {
            var responseString = "";
            if (MainForm.isCloud)
            {

                var request = (HttpWebRequest)WebRequest.Create(MainForm.cloudURL + path);
                request.Method = "POST";
                request.ContentType = "text/json";
                request.ContentLength = data.Length;

                using (var stream = request.GetRequestStream())
                {
                    stream.Write(Encoding.ASCII.GetBytes(data), 0, data.Length);
                }

               var response = (HttpWebResponse)request.GetResponse();

                 responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();
            }
            return  responseString;
        }

    }
}

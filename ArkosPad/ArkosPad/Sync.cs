using Microsoft.VisualBasic.Logging;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.IO.Pipes;
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


        public static void UploadFile(String file, int idNode, String fileName = "")
        {
            NameValueCollection nvc = new NameValueCollection();
            nvc.Add("id", idNode.ToString());
            if(fileName=="")
                nvc.Add("fileName", Path.GetFileName(file));
            else
                nvc.Add("fileName", fileName);

            nvc.Add("session", MainForm.cloudSession);
            HttpUploadFile(MainForm.cloudURL + "/api/Files/Upload", file, "file", "application/octet-stream", nvc);
        }

        public static void HttpUploadFile(string url, string file, string paramName, string contentType, NameValueCollection nvc)
        {
            
            string boundary = "---------------------------" + DateTime.Now.Ticks.ToString("x");
            byte[] boundarybytes = System.Text.Encoding.ASCII.GetBytes("\r\n--" + boundary + "\r\n");

            HttpWebRequest wr = (HttpWebRequest)WebRequest.Create(url);
            wr.ContentType = "multipart/form-data; boundary=" + boundary;
            wr.Method = "POST";
            wr.KeepAlive = true;
            wr.Credentials = System.Net.CredentialCache.DefaultCredentials;

            Stream rs = wr.GetRequestStream();

            string formdataTemplate = "Content-Disposition: form-data; name=\"{0}\"\r\n\r\n{1}";
            foreach (string key in nvc.Keys)
            {
                rs.Write(boundarybytes, 0, boundarybytes.Length);
                string formitem = string.Format(formdataTemplate, key, nvc[key]);
                byte[] formitembytes = System.Text.Encoding.UTF8.GetBytes(formitem);
                rs.Write(formitembytes, 0, formitembytes.Length);
            }
            rs.Write(boundarybytes, 0, boundarybytes.Length);

            string headerTemplate = "Content-Disposition: form-data; name=\"{0}\"; filename=\"{1}\"\r\nContent-Type: {2}\r\n\r\n";
            string header = string.Format(headerTemplate, paramName, file, contentType);
            byte[] headerbytes = System.Text.Encoding.UTF8.GetBytes(header);
            rs.Write(headerbytes, 0, headerbytes.Length);

            FileStream fileStream = new FileStream(file, FileMode.Open, FileAccess.Read);
            byte[] buffer = new byte[4096];
            int bytesRead = 0;
            while ((bytesRead = fileStream.Read(buffer, 0, buffer.Length)) != 0)
            {
                rs.Write(buffer, 0, bytesRead);
            }
            fileStream.Close();

            byte[] trailer = System.Text.Encoding.ASCII.GetBytes("\r\n--" + boundary + "--\r\n");
            rs.Write(trailer, 0, trailer.Length);
            rs.Close();

            WebResponse wresp = null;
            try
            {
                wresp = wr.GetResponse();
                Stream stream2 = wresp.GetResponseStream();
                StreamReader reader2 = new StreamReader(stream2);
            }
            catch (Exception ex)
            {
                if (wresp != null)
                {
                    wresp.Close();
                    wresp = null;
                }
            }
            finally
            {
                wr = null;
            }
        }

        public static List<FileDto.fileCapsule> GetFiles(int idNode)
        {
            IdDto id = new IdDto() { id = idNode, session = MainForm.cloudSession };
            String data = Newtonsoft.Json.JsonConvert.SerializeObject(id);
            String content = HttpPost(data, "/api/Files/GetFiles");
            return Newtonsoft.Json.JsonConvert.DeserializeObject<List<FileDto.fileCapsule>>(content);
        }


        public static void DeleteFile(int idFile)
        {
            IdDto id = new IdDto() { id = idFile, session = MainForm.cloudSession };
            String data = Newtonsoft.Json.JsonConvert.SerializeObject(id);
            HttpPost(data, "/api/Files/Delete");
        }

        public static void DownloadFile(int idFile, String outPath)
        {
            IdDto id = new IdDto() { id = idFile, session = MainForm.cloudSession };
            String data = Newtonsoft.Json.JsonConvert.SerializeObject(id);

            //if (MainForm.isCloud)
            {
                var request = (HttpWebRequest)WebRequest.Create(MainForm.cloudURL + "/api/Files/Download");
                request.Method = "POST";
                request.ContentType = "text/json";
                request.ContentLength = data.Length;

                using (var stream = request.GetRequestStream())
                {
                    stream.Write(Encoding.ASCII.GetBytes(data), 0, data.Length);
                }

                var response = (HttpWebResponse)request.GetResponse();
                var responseStream = response.GetResponseStream();
                var buffer = new byte[100000000];
                int bytesRead;
                FileStream fileStream = new System.IO.FileStream(outPath, System.IO.FileMode.OpenOrCreate, System.IO.FileAccess.Write);
                do
                {
                    bytesRead = responseStream.Read(buffer, 0, 100000000);
                    fileStream.Write(buffer, 0, bytesRead);
                } while (bytesRead > 0);
                fileStream.Dispose();
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

        public static void Clear()
        {
            if(MainForm.isCloud)
                Get(MainForm.cloudURL + "/api/Sync/Clear?session=" + MainForm.cloudSession);
        }

        public static String getUrlFromTreeNode(TreeNode node)
        {
            String ret = node.Text;
            while(node.Parent!=null)
            {
                node = node.Parent;
                if(node.Tag!=null && ((XmlNodeData)node.Tag).ID!="1")
                    ret = node.Text + ":" + ret;
            }
            if (ret == "Root")
                throw new Exception();
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
            //if (MainForm.isCloud)
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

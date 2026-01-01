using System;
using System.Collections.Specialized;
using System.IO;
using System.Net;
using System.Text;

namespace RicherTextBoxDemo.Services
{
    /// <summary>
    /// HTTP client service for making web requests.
    /// Encapsulates all HTTP communication logic.
    /// </summary>
    public class HttpClientService
    {
        private const int BufferSize = 4096;
        private const int DownloadBufferSize = 100000000;

        public string Get(string url)
        {
            var request = (HttpWebRequest)WebRequest.Create(url);
            request.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;
            request.Method = "GET";

            using (var response = (HttpWebResponse)request.GetResponse())
            using (var stream = response.GetResponseStream())
            using (var reader = new StreamReader(stream))
            {
                return reader.ReadToEnd();
            }
        }

        public string Post(string url, string jsonData)
        {
            var request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = "POST";
            request.ContentType = "text/json";
            request.ContentLength = jsonData.Length;

            using (var stream = request.GetRequestStream())
            {
                byte[] bytes = Encoding.ASCII.GetBytes(jsonData);
                stream.Write(bytes, 0, bytes.Length);
            }

            using (var response = (HttpWebResponse)request.GetResponse())
            using (var reader = new StreamReader(response.GetResponseStream()))
            {
                return reader.ReadToEnd();
            }
        }

        public void DownloadFile(string url, string jsonData, string destinationPath)
        {
            var request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = "POST";
            request.ContentType = "text/json";
            request.ContentLength = jsonData.Length;

            using (var requestStream = request.GetRequestStream())
            {
                byte[] bytes = Encoding.ASCII.GetBytes(jsonData);
                requestStream.Write(bytes, 0, bytes.Length);
            }

            using (var response = (HttpWebResponse)request.GetResponse())
            using (var responseStream = response.GetResponseStream())
            using (var fileStream = new FileStream(destinationPath, FileMode.OpenOrCreate, FileAccess.Write))
            {
                var buffer = new byte[DownloadBufferSize];
                int bytesRead;

                while ((bytesRead = responseStream.Read(buffer, 0, buffer.Length)) > 0)
                {
                    fileStream.Write(buffer, 0, bytesRead);
                }
            }
        }

        public void UploadFile(string url, string filePath, string paramName, 
            string contentType, NameValueCollection formData)
        {
            string boundary = "---------------------------" + DateTime.Now.Ticks.ToString("x");
            byte[] boundaryBytes = Encoding.ASCII.GetBytes("\r\n--" + boundary + "\r\n");

            var request = (HttpWebRequest)WebRequest.Create(url);
            request.ContentType = "multipart/form-data; boundary=" + boundary;
            request.Method = "POST";
            request.KeepAlive = true;
            request.Credentials = CredentialCache.DefaultCredentials;

            using (var requestStream = request.GetRequestStream())
            {
                WriteFormData(requestStream, boundaryBytes, formData);
                WriteFileData(requestStream, boundaryBytes, filePath, paramName, contentType);
                WriteTrailer(requestStream, boundary);
            }

            try
            {
                using (request.GetResponse())
                {
                    // Response received successfully
                }
            }
            catch (WebException)
            {
                // Handle upload failures gracefully
            }
        }

        private void WriteFormData(Stream stream, byte[] boundaryBytes, NameValueCollection formData)
        {
            const string formDataTemplate = "Content-Disposition: form-data; name=\"{0}\"\r\n\r\n{1}";

            foreach (string key in formData.Keys)
            {
                stream.Write(boundaryBytes, 0, boundaryBytes.Length);
                
                string formItem = string.Format(formDataTemplate, key, formData[key]);
                byte[] formItemBytes = Encoding.UTF8.GetBytes(formItem);
                stream.Write(formItemBytes, 0, formItemBytes.Length);
            }
        }

        private void WriteFileData(Stream stream, byte[] boundaryBytes, 
            string filePath, string paramName, string contentType)
        {
            stream.Write(boundaryBytes, 0, boundaryBytes.Length);

            const string headerTemplate = "Content-Disposition: form-data; name=\"{0}\"; filename=\"{1}\"\r\nContent-Type: {2}\r\n\r\n";
            string header = string.Format(headerTemplate, paramName, filePath, contentType);
            byte[] headerBytes = Encoding.UTF8.GetBytes(header);
            stream.Write(headerBytes, 0, headerBytes.Length);

            using (var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
            {
                var buffer = new byte[BufferSize];
                int bytesRead;

                while ((bytesRead = fileStream.Read(buffer, 0, buffer.Length)) > 0)
                {
                    stream.Write(buffer, 0, bytesRead);
                }
            }
        }

        private void WriteTrailer(Stream stream, string boundary)
        {
            byte[] trailer = Encoding.ASCII.GetBytes("\r\n--" + boundary + "--\r\n");
            stream.Write(trailer, 0, trailer.Length);
        }
    }
}

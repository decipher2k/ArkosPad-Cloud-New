using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Collections.Specialized;
using RicherTextBoxDemo.Core;
using RicherTextBoxDemo.DtO;

namespace RicherTextBoxDemo.Services
{
    /// <summary>
    /// Cloud storage service implementation using HTTP API.
    /// </summary>
    public class CloudStorageService : IStorageService
    {
        private readonly AppSettings _settings;
        private readonly HttpClientService _httpClient;

        public CloudStorageService()
        {
            _settings = AppSettings.Instance;
            _httpClient = new HttpClientService();
        }

        public bool IsAvailable => _settings.IsCloudMode 
                                   && !string.IsNullOrEmpty(_settings.CloudUrl)
                                   && !string.IsNullOrEmpty(_settings.CloudSession);

        public bool Save(Dictionary<string, TreeItem> data)
        {
            // Cloud saves are handled per-node via UpdateOrAddNode
            // This method serves as a synchronization point
            return IsAvailable;
        }

        public Dictionary<string, TreeItem> Load()
        {
            // Cloud loading is handled via FetchNodes
            return new Dictionary<string, TreeItem>();
        }

        public string CopyFile(string sourcePath)
        {
            // Cloud file operations are handled via UploadFile
            return string.Empty;
        }

        public void DeleteFile(string filePath)
        {
            // File deletion requires file ID, handled separately
        }

        public void UploadFile(string filePath, int nodeId, string fileName = "")
        {
            if (string.IsNullOrEmpty(fileName))
            {
                fileName = Path.GetFileName(filePath);
            }

            var parameters = new NameValueCollection
            {
                { "id", nodeId.ToString() },
                { "fileName", fileName },
                { "session", _settings.CloudSession }
            };

            _httpClient.UploadFile(
                _settings.CloudUrl + Constants.ApiEndpoints.UploadFile,
                filePath,
                "file",
                "application/octet-stream",
                parameters);
        }

        public List<FileDto.fileCapsule> GetFiles(int nodeId)
        {
            var request = new IdDto
            {
                id = nodeId,
                session = _settings.CloudSession
            };

            string json = Newtonsoft.Json.JsonConvert.SerializeObject(request);
            string response = _httpClient.Post(_settings.CloudUrl + Constants.ApiEndpoints.GetFiles, json);
            
            return Newtonsoft.Json.JsonConvert.DeserializeObject<List<FileDto.fileCapsule>>(response);
        }

        public void DeleteFileById(int fileId)
        {
            var request = new IdDto
            {
                id = fileId,
                session = _settings.CloudSession
            };

            string json = Newtonsoft.Json.JsonConvert.SerializeObject(request);
            _httpClient.Post(_settings.CloudUrl + Constants.ApiEndpoints.DeleteFile, json);
        }

        public void DownloadFile(int fileId, string destinationPath)
        {
            var request = new IdDto
            {
                id = fileId,
                session = _settings.CloudSession
            };

            string json = Newtonsoft.Json.JsonConvert.SerializeObject(request);
            _httpClient.DownloadFile(_settings.CloudUrl + Constants.ApiEndpoints.DownloadFile, json, destinationPath);
        }

        public void UpdateOrAddNode(string text, int weight, string nodePath)
        {
            var request = new PageDto
            {
                url = nodePath,
                text = text,
                weight = weight,
                session = _settings.CloudSession
            };

            string json = Newtonsoft.Json.JsonConvert.SerializeObject(request);
            _httpClient.Post(_settings.CloudUrl + Constants.ApiEndpoints.SaveMarkupPage, json);
        }

        public void DeleteNode(string nodePath)
        {
            var request = new PageDto
            {
                session = _settings.CloudSession,
                url = nodePath
            };

            string json = Newtonsoft.Json.JsonConvert.SerializeObject(request);
            _httpClient.Post(_settings.CloudUrl + Constants.ApiEndpoints.DeletePage, json);
        }

        public string GetIdByPath(string nodePath)
        {
            var request = new PageDto
            {
                session = _settings.CloudSession,
                url = nodePath
            };

            string json = Newtonsoft.Json.JsonConvert.SerializeObject(request);
            return _httpClient.Post(_settings.CloudUrl + Constants.ApiEndpoints.GetIdByPath, json);
        }

        public SyncDTO FetchNodes()
        {
            string url = $"{_settings.CloudUrl}{Constants.ApiEndpoints.GetNodes}?session={_settings.CloudSession}";
            string response = _httpClient.Get(url);
            
            return Newtonsoft.Json.JsonConvert.DeserializeObject<SyncDTO>(response);
        }

        public DateTime GetLastSyncTime()
        {
            string response = _httpClient.Get(_settings.CloudUrl + Constants.ApiEndpoints.GetLastSync);
            return DateTime.Parse(response);
        }

        public void ClearCloud()
        {
            string url = $"{_settings.CloudUrl}{Constants.ApiEndpoints.ClearSync}?session={_settings.CloudSession}";
            _httpClient.Get(url);
        }
    }
}

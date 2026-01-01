using System;
using System.Collections.Generic;
using System.IO;
using RicherTextBoxDemo.ArkosPadFiles;
using RicherTextBoxDemo.Core;

namespace RicherTextBoxDemo.Services
{
    /// <summary>
    /// Local file system storage service implementation.
    /// </summary>
    public class LocalStorageService : IStorageService
    {
        private readonly AppSettings _settings;

        public LocalStorageService()
        {
            _settings = AppSettings.Instance;
        }

        public bool IsAvailable => !string.IsNullOrEmpty(_settings.TempDirectory) 
                                   && Directory.Exists(_settings.TempDirectory);

        public bool Save(Dictionary<string, TreeItem> data)
        {
            try
            {
                string datFilePath = Path.Combine(_settings.TempDirectory, Constants.DataBinaryFileName);
                
                EnsureDirectoryExists(Path.GetDirectoryName(datFilePath));
                
                DataStorage.SerializeNow(datFilePath, data);
                
                _settings.MarkAsSaved();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public Dictionary<string, TreeItem> Load()
        {
            try
            {
                string datFilePath = Path.Combine(_settings.TempDirectory, Constants.DataBinaryFileName);
                
                if (!File.Exists(datFilePath))
                {
                    return new Dictionary<string, TreeItem>();
                }

                return DataStorage.DeSerializeNow(datFilePath);
            }
            catch (Exception)
            {
                return new Dictionary<string, TreeItem>();
            }
        }

        public string CopyFile(string sourcePath)
        {
            if (string.IsNullOrEmpty(_settings.CurrentFileName))
            {
                return string.Empty;
            }

            string attachmentsDir = GetAttachmentsDirectory();
            EnsureDirectoryExists(attachmentsDir);

            string newFileName = GenerateUniqueFileName(attachmentsDir, Path.GetExtension(sourcePath));
            string destinationPath = Path.Combine(attachmentsDir, newFileName);

            File.Copy(sourcePath, destinationPath);
            
            return destinationPath;
        }

        public void DeleteFile(string filePath)
        {
            if (File.Exists(filePath))
            {
                File.Delete(filePath);
            }
        }

        public string CreateTempDirectory()
        {
            string baseTempPath = Path.GetTempPath();
            string uniqueFolder;

            do
            {
                uniqueFolder = GenerateRandomString(5);
            } while (Directory.Exists(Path.Combine(baseTempPath, uniqueFolder)));

            string fullPath = Path.Combine(baseTempPath, uniqueFolder);
            Directory.CreateDirectory(fullPath);
            
            return fullPath;
        }

        public void CleanupTempDirectory(string path)
        {
            try
            {
                if (Directory.Exists(path))
                {
                    Directory.Delete(path, true);
                }
            }
            catch
            {
                // Cleanup is best effort
            }
        }

        private string GetAttachmentsDirectory()
        {
            return Path.Combine(Path.GetDirectoryName(_settings.CurrentFileName), Constants.AttachmentsFolderName);
        }

        private void EnsureDirectoryExists(string path)
        {
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
        }

        private string GenerateUniqueFileName(string directory, string extension)
        {
            string fileName;
            do
            {
                fileName = GenerateRandomString(20) + extension;
            } while (File.Exists(Path.Combine(directory, fileName)));

            return fileName;
        }

        private static string GenerateRandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            var result = new char[length];
            
            for (int i = 0; i < length; i++)
            {
                result[i] = chars[random.Next(chars.Length)];
            }
            
            return new string(result);
        }
    }
}

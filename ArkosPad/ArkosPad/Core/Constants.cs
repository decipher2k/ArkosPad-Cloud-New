using System;

namespace RicherTextBoxDemo.Core
{
    /// <summary>
    /// Application-wide constants for ArkosPad.
    /// </summary>
    public static class Constants
    {
        public const string ApplicationName = "ArkosPad";
        public const string ApplicationVersion = "3.2";
        public const string FileExtension = ".arkospad";
        public const string UriScheme = "arkospad";
        public const string UriSchemeFriendlyName = "ArkosPad Tree Reference";
        
        public const string DataFileName = "data.xml";
        public const string DataBinaryFileName = "data.dat";
        public const string AttachmentsFolderName = "_dat";
        
        public const string RegistryKeyName = "ArkosPad";
        public const string RegistryLastFileName = "LastFile";
        public const string RegistryLastHostName = "LastHost";
        public const string RegistryLastUserName = "LastUser";
        
        public const string RootNodeName = "Root";
        public const string RootNodeId = "1";

        public static class FileFilters
        {
            public const string ArkosPadFiles = "ArkosPad Files (*.arkospad)|*.arkospad";
            public const string MindMapFiles = "Mindmap Files (*.mm)|*.mm";
            public const string RtfFiles = "Rich text format|*.rtf";
        }

        public static class Messages
        {
            public const string SaveProjectTitle = "Save Project";
            public const string SaveProjectPrompt = "Do you want to save the project?";
            public const string ErrorTitle = "Error";
            public const string SuccessTitle = "Success";
            public const string CannotSaveFile = "Can't save file.";
            public const string CannotOpenFile = "Can't open file.";
            public const string CannotCopyFiles = "Can't copy files.";
            public const string ErrorCreatingTempFile = "Error creating temp file.";
            public const string NoValidLicense = "No valid license found";
            public const string SaveProjectFirst = "Please save your project first.";
            public const string RemoveSubnodesFirst = "Please remove all subnodes first!";
            public const string ItemNameMustStartWithLetter = "The item name must begin with a letter.";
            public const string FileNotFound = ".dat file not found.";
            public const string UnableToAddFile = "Unable to add file.";
            public const string FileDoesNotExist = "The file does not exist.";
            public const string ExportSuccessful = "Export successfull.";
            public const string AlreadyConnectedToCloud = "You are allready connected to the cloud.";
            public const string CloudDeleteWarning = "Warning! This will delete all content saved in the cloud!\nContinue?";
        }

        public static class ApiEndpoints
        {
            public const string GetLastSync = "/api/Sync/GetLastSync";
            public const string GetNodes = "/api/Sync/GetNodes";
            public const string ClearSync = "/api/Sync/Clear";
            public const string SaveMarkupPage = "/api/MarkdownPage/SaveMarkupPage";
            public const string DeletePage = "/api/MarkdownPage/DeletePage";
            public const string GetIdByPath = "/api/MarkdownPage/GetIdByPath";
            public const string UploadFile = "/api/Files/Upload";
            public const string GetFiles = "/api/Files/GetFiles";
            public const string DeleteFile = "/api/Files/Delete";
            public const string DownloadFile = "/api/Files/Download";
        }
    }
}

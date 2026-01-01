using System;
using System.Collections.Generic;
using RicherTextBoxDemo.Core;

namespace RicherTextBoxDemo
{
    /// <summary>
    /// Legacy global state accessor. 
    /// Delegates to AppSettings singleton for backward compatibility.
    /// </summary>
    [Obsolete("Use AppSettings.Instance instead for new code.")]
    public static class Globals
    {
        private static AppSettings Settings => AppSettings.Instance;

        public static Dictionary<string, TreeItem> data
        {
            get => Settings.Data;
            set => Settings.Data = value;
        }

        public static string tempDir
        {
            get => Settings.TempDirectory;
            set => Settings.TempDirectory = value;
        }

        public static bool isCloud
        {
            get => Settings.IsCloudMode;
            set => Settings.IsCloudMode = value;
        }

        public static string cloudSession
        {
            get => Settings.CloudSession;
            set => Settings.CloudSession = value;
        }

        public static string cloudURL
        {
            get => Settings.CloudUrl;
            set => Settings.CloudUrl = value;
        }

        public static string _zipFileName
        {
            get => Settings.ZipFileName;
            set => Settings.ZipFileName = value;
        }

        public static string _filename
        {
            get => Settings.CurrentFileName;
            set => Settings.CurrentFileName = value;
        }

        public static bool notSaved
        {
            get => Settings.HasUnsavedChanges;
            set => Settings.HasUnsavedChanges = value;
        }

        public static int _maxWeight
        {
            get => Settings.MaxWeight;
            set => Settings.MaxWeight = value;
        }
    }
}

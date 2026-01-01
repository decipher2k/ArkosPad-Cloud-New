using System;
using System.Collections.Generic;

namespace RicherTextBoxDemo.Core
{
    /// <summary>
    /// Singleton class managing application-wide settings and state.
    /// Implements thread-safe lazy initialization pattern.
    /// </summary>
    public sealed class AppSettings
    {
        private static readonly Lazy<AppSettings> LazyInstance = 
            new Lazy<AppSettings>(() => new AppSettings());

        public static AppSettings Instance => LazyInstance.Value;

        private AppSettings()
        {
            Reset();
        }

        /// <summary>
        /// Gets or sets the tree data dictionary.
        /// </summary>
        public Dictionary<string, TreeItem> Data { get; set; }

        /// <summary>
        /// Gets or sets the temporary directory path for file operations.
        /// </summary>
        public string TempDirectory { get; set; }

        /// <summary>
        /// Gets or sets whether the application is connected to cloud storage.
        /// </summary>
        public bool IsCloudMode { get; set; }

        /// <summary>
        /// Gets or sets the cloud session identifier.
        /// </summary>
        public string CloudSession { get; set; }

        /// <summary>
        /// Gets or sets the cloud service URL.
        /// </summary>
        public string CloudUrl { get; set; }

        /// <summary>
        /// Gets or sets the zip file name for the current project.
        /// </summary>
        public string ZipFileName { get; set; }

        /// <summary>
        /// Gets or sets the current working filename (XML).
        /// </summary>
        public string CurrentFileName { get; set; }

        /// <summary>
        /// Gets or sets whether there are unsaved changes.
        /// </summary>
        public bool HasUnsavedChanges { get; set; }

        /// <summary>
        /// Gets or sets the maximum weight used for ordering tree nodes.
        /// </summary>
        public int MaxWeight { get; set; }

        /// <summary>
        /// Resets all settings to their default values.
        /// </summary>
        public void Reset()
        {
            Data = new Dictionary<string, TreeItem>();
            TempDirectory = string.Empty;
            IsCloudMode = false;
            CloudSession = string.Empty;
            CloudUrl = string.Empty;
            ZipFileName = string.Empty;
            CurrentFileName = string.Empty;
            HasUnsavedChanges = false;
            MaxWeight = 1;
        }

        /// <summary>
        /// Increments and returns the next weight value for tree node ordering.
        /// </summary>
        public int GetNextWeight()
        {
            return ++MaxWeight;
        }

        /// <summary>
        /// Marks the document as having unsaved changes.
        /// </summary>
        public void MarkAsModified()
        {
            HasUnsavedChanges = true;
        }

        /// <summary>
        /// Marks the document as saved.
        /// </summary>
        public void MarkAsSaved()
        {
            HasUnsavedChanges = false;
        }
    }
}

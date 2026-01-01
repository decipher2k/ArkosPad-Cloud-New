using System;
using System.Collections.Generic;

namespace RicherTextBoxDemo
{
    /// <summary>
    /// Represents a node item in the tree structure.
    /// </summary>
    [Serializable]
    public class TreeItem
    {
        [Obsolete("Use AppSettings.Instance.MaxWeight instead")]
        public static int _maxWeight = 0;

        public string Name { get; set; } = string.Empty;
        public int Weight { get; set; }
        public string Data { get; set; } = string.Empty;
        public List<FileItem> Files { get; set; } = new List<FileItem>();
        public bool IsFocused { get; set; }

        // Legacy property accessors for serialization compatibility
        public string name
        {
            get => Name;
            set => Name = value;
        }

        public int weight
        {
            get => Weight;
            set => Weight = value;
        }

        public string data
        {
            get => Data;
            set => Data = value;
        }

        public List<FileItem> files
        {
            get => Files;
            set => Files = value;
        }

        public bool focus
        {
            get => IsFocused;
            set => IsFocused = value;
        }
    }
}

using System;

namespace RicherTextBoxDemo
{
    /// <summary>
    /// Represents a file attachment associated with a tree node.
    /// </summary>
    [Serializable]
    public class FileItem
    {
        public string Caption { get; set; } = string.Empty;
        public string FilePath { get; set; } = string.Empty;
        public int CloudId { get; set; }

        // Legacy property accessors for serialization compatibility
        public string caption
        {
            get => Caption;
            set => Caption = value;
        }

        public string filepath
        {
            get => FilePath;
            set => FilePath = value;
        }

        public int idCloud
        {
            get => CloudId;
            set => CloudId = value;
        }

        public override string ToString()
        {
            return Caption;
        }
    }
}
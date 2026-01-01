using System;
using System.Collections.Generic;

namespace RicherTextBoxDemo.DtO
{
    /// <summary>
    /// Data transfer object for synchronization data.
    /// </summary>
    [Serializable]
    public class SyncDTO
    {
        public DateTime LastSync { get; set; } = DateTime.Now;
        public string Name { get; set; } = string.Empty;
        public string Data { get; set; } = string.Empty;
        public string Id { get; set; } = string.Empty;
        public int Weight { get; set; }
        public bool IsFocused { get; set; }
        public List<SyncDTO> Children { get; set; } = new List<SyncDTO>();

        // Legacy property accessors for JSON serialization compatibility
        public DateTime lastSync
        {
            get => LastSync;
            set => LastSync = value;
        }

        public string name
        {
            get => Name;
            set => Name = value;
        }

        public string data
        {
            get => Data;
            set => Data = value;
        }

        public string ID
        {
            get => Id;
            set => Id = value;
        }

        public int weight
        {
            get => Weight;
            set => Weight = value;
        }

        public bool focus
        {
            get => IsFocused;
            set => IsFocused = value;
        }

        public List<SyncDTO> children
        {
            get => Children;
            set => Children = value;
        }
    }
}

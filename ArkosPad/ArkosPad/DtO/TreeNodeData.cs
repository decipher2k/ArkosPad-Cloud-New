using System;
using System.Collections.Generic;

namespace RicherTextBoxDemo.DtO
{
    /// <summary>
    /// Data transfer object for tree node metadata.
    /// </summary>
    public class XmlNodeData
    {
        public string Id { get; set; } = string.Empty;
        public bool IsFocused { get; set; }
        public int Weight { get; set; }

        // Legacy property accessors for backward compatibility
        [Obsolete("Use Id property instead")]
        public string ID
        {
            get => Id;
            set => Id = value;
        }

        [Obsolete("Use IsFocused property instead")]
        public bool focus
        {
            get => IsFocused;
            set => IsFocused = value;
        }

        [Obsolete("Use Weight property instead")]
        public int weight
        {
            get => Weight;
            set => Weight = value;
        }
    }
}

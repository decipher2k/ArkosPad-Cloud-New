using System;

namespace RicherTextBoxDemo.DtO
{
    /// <summary>
    /// Data transfer object for ID-based operations.
    /// </summary>
    [Serializable]
    public class IdDto
    {
        public string Session { get; set; } = string.Empty;
        public long Id { get; set; }

        // Legacy property accessors for JSON compatibility
        public string session
        {
            get => Session;
            set => Session = value;
        }

        public long id
        {
            get => Id;
            set => Id = value;
        }
    }
}

using System;

namespace RicherTextBoxDemo.DtO
{
    /// <summary>
    /// Data transfer object for file metadata.
    /// </summary>
    public class FileDto
    {
        /// <summary>
        /// Wrapper class for file information from cloud API.
        /// </summary>
        public class FileCapsule
        {
            public FileInfo File { get; set; }

            // Legacy property for JSON compatibility
            public FileInfo file
            {
                get => File;
                set => File = value;
            }
        }

        /// <summary>
        /// File information details.
        /// </summary>
        public class FileInfo
        {
            public int Id { get; set; }
            public int NodeId { get; set; }
            public string FileName { get; set; } = string.Empty;
            public string EncryptedName { get; set; } = string.Empty;

            // Legacy property accessors for JSON compatibility
            public int id
            {
                get => Id;
                set => Id = value;
            }

            public int idNode
            {
                get => NodeId;
                set => NodeId = value;
            }

            public string fileName
            {
                get => FileName;
                set => FileName = value;
            }

            public string encName
            {
                get => EncryptedName;
                set => EncryptedName = value;
            }
        }

        // Legacy nested class for backward compatibility
        [Obsolete("Use FileCapsule instead")]
        public class fileCapsule : FileCapsule { }

        [Obsolete("Use FileInfo instead")]
        public class Files : FileInfo { }
    }
}

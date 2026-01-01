using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

namespace RicherTextBoxDemo.ArkosPadFiles
{
    /// <summary>
    /// Handles binary serialization and deserialization of tree data.
    /// </summary>
    public static class DataStorage
    {
        /// <summary>
        /// Serializes the tree data dictionary to a binary file.
        /// </summary>
        /// <param name="filePath">The path to save the serialized data.</param>
        /// <param name="data">The tree data dictionary to serialize.</param>
        /// <exception cref="ArgumentNullException">Thrown when filePath or data is null.</exception>
        public static void SerializeNow(string filePath, Dictionary<string, TreeItem> data)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                throw new ArgumentNullException(nameof(filePath));
            }

            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            using (Stream stream = File.OpenWrite(filePath))
            {
                var formatter = new BinaryFormatter();
                formatter.Serialize(stream, data);
            }
        }

        /// <summary>
        /// Deserializes tree data from a binary file.
        /// </summary>
        /// <param name="filePath">The path to the serialized data file.</param>
        /// <returns>The deserialized tree data dictionary.</returns>
        /// <exception cref="ArgumentNullException">Thrown when filePath is null.</exception>
        /// <exception cref="FileNotFoundException">Thrown when the file doesn't exist.</exception>
        public static Dictionary<string, TreeItem> DeSerializeNow(string filePath)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                throw new ArgumentNullException(nameof(filePath));
            }

            if (!File.Exists(filePath))
            {
                throw new FileNotFoundException("Data file not found.", filePath);
            }

            using (Stream stream = File.OpenRead(filePath))
            {
                var formatter = new BinaryFormatter();
                return (Dictionary<string, TreeItem>)formatter.Deserialize(stream);
            }
        }

        /// <summary>
        /// Attempts to deserialize tree data, returning an empty dictionary on failure.
        /// </summary>
        /// <param name="filePath">The path to the serialized data file.</param>
        /// <returns>The deserialized data or an empty dictionary if deserialization fails.</returns>
        public static Dictionary<string, TreeItem> TryDeserialize(string filePath)
        {
            try
            {
                return DeSerializeNow(filePath);
            }
            catch (Exception)
            {
                return new Dictionary<string, TreeItem>();
            }
        }
    }
}

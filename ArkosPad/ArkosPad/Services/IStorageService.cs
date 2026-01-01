using System.Collections.Generic;

namespace RicherTextBoxDemo.Services
{
    /// <summary>
    /// Interface for storage operations. Implements Strategy Pattern
    /// to abstract local and cloud storage operations.
    /// </summary>
    public interface IStorageService
    {
        /// <summary>
        /// Saves the tree data to storage.
        /// </summary>
        /// <param name="data">The tree data dictionary to save.</param>
        /// <returns>True if save was successful.</returns>
        bool Save(Dictionary<string, TreeItem> data);

        /// <summary>
        /// Loads tree data from storage.
        /// </summary>
        /// <returns>The loaded tree data dictionary.</returns>
        Dictionary<string, TreeItem> Load();

        /// <summary>
        /// Copies a file to the storage location.
        /// </summary>
        /// <param name="sourcePath">The source file path.</param>
        /// <returns>The new file path in storage.</returns>
        string CopyFile(string sourcePath);

        /// <summary>
        /// Deletes a file from storage.
        /// </summary>
        /// <param name="filePath">The file path to delete.</param>
        void DeleteFile(string filePath);

        /// <summary>
        /// Checks if the storage is available.
        /// </summary>
        bool IsAvailable { get; }
    }
}

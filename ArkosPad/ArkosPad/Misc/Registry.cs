using System;
using RicherTextBoxDemo.Core;

namespace RicherTextBoxDemo
{
    /// <summary>
    /// Provides access to application settings stored in the Windows Registry.
    /// </summary>
    internal static class Registry
    {
        /// <summary>
        /// Gets the last opened filename from the registry.
        /// </summary>
        public static string getFilename()
        {
            return GetLastFileName();
        }

        /// <summary>
        /// Gets the last opened filename from the registry.
        /// </summary>
        public static string GetLastFileName()
        {
            try
            {
                using (var key = Microsoft.Win32.Registry.CurrentUser.OpenSubKey(Constants.RegistryKeyName))
                {
                    if (key == null)
                    {
                        return string.Empty;
                    }

                    var value = key.GetValue(Constants.RegistryLastFileName);
                    return value?.ToString() ?? string.Empty;
                }
            }
            catch (Exception)
            {
                return string.Empty;
            }
        }

        /// <summary>
        /// Saves the last used host and username to the registry.
        /// </summary>
        public static void setHostData(string host, string username)
        {
            SetHostData(host, username);
        }

        /// <summary>
        /// Saves the last used host and username to the registry.
        /// </summary>
        public static void SetHostData(string host, string username)
        {
            try
            {
                using (var key = Microsoft.Win32.Registry.CurrentUser.OpenSubKey(Constants.RegistryKeyName, true))
                {
                    if (key == null)
                    {
                        return;
                    }

                    key.SetValue(Constants.RegistryLastHostName, host);
                    key.SetValue(Constants.RegistryLastUserName, username);
                }
            }
            catch (Exception)
            {
                // Registry access may fail silently
            }
        }

        /// <summary>
        /// Gets the last used host and username from the registry.
        /// </summary>
        public static void getHostData(out string host, out string username)
        {
            GetHostData(out host, out username);
        }

        /// <summary>
        /// Gets the last used host and username from the registry.
        /// </summary>
        public static void GetHostData(out string host, out string username)
        {
            host = string.Empty;
            username = string.Empty;

            try
            {
                using (var key = Microsoft.Win32.Registry.CurrentUser.OpenSubKey(Constants.RegistryKeyName, true))
                {
                    if (key == null)
                    {
                        return;
                    }

                    var hostValue = key.GetValue(Constants.RegistryLastHostName);
                    var userValue = key.GetValue(Constants.RegistryLastUserName);

                    if (hostValue != null)
                    {
                        host = hostValue.ToString();
                    }

                    if (userValue != null)
                    {
                        username = userValue.ToString();
                    }
                }
            }
            catch (Exception)
            {
                // Registry access may fail silently
            }
        }

        /// <summary>
        /// Saves the last opened filename to the registry.
        /// </summary>
        public static void SetLastFileName(string fileName)
        {
            try
            {
                using (var key = Microsoft.Win32.Registry.CurrentUser.CreateSubKey(Constants.RegistryKeyName))
                {
                    key?.SetValue(Constants.RegistryLastFileName, fileName);
                }
            }
            catch (Exception)
            {
                // Registry access may fail silently
            }
        }
    }
}

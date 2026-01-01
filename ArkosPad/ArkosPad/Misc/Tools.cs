using System;
using System.Drawing;
using System.Linq;
using System.Runtime.InteropServices;
using System.Windows.Forms;
using Microsoft.Win32;
using RicherTextBoxDemo.Core;

namespace RicherTextBoxDemo.Misc
{
    /// <summary>
    /// Utility tools for application-wide operations.
    /// </summary>
    public static class Tools
    {
        private static readonly Random RandomGenerator = new Random();

        #region Random String Generation

        /// <summary>
        /// Generates a random alphanumeric string of the specified length.
        /// </summary>
        public static string RandomString(int length)
        {
            const string characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

            return new string(
                Enumerable.Repeat(characters, length)
                    .Select(s => s[RandomGenerator.Next(s.Length)])
                    .ToArray());
        }

        #endregion

        #region URI Scheme Registration

        /// <summary>
        /// Registers the arkospad URI scheme with the operating system.
        /// </summary>
        public static void RegisterUriScheme()
        {
            string applicationLocation = typeof(MainForm).Assembly.Location;
            string registryPath = $"SOFTWARE\\Classes\\{Constants.UriScheme}";

            using (var key = Microsoft.Win32.Registry.CurrentUser.CreateSubKey(registryPath))
            {
                key.SetValue(string.Empty, $"URL:{Constants.UriSchemeFriendlyName}");
                key.SetValue("URL Protocol", string.Empty);

                using (var defaultIcon = key.CreateSubKey("DefaultIcon"))
                {
                    defaultIcon.SetValue(string.Empty, $"{applicationLocation},1");
                }

                using (var commandKey = key.CreateSubKey(@"shell\open\command"))
                {
                    commandKey.SetValue(string.Empty, $"\"{applicationLocation}\" \"%1\"");
                }
            }
        }

        #endregion

        #region File Extension Registration

        [DllImport("shell32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        private static extern void SHChangeNotify(uint wEventId, uint uFlags, IntPtr dwItem1, IntPtr dwItem2);

        private const uint SHCNE_ASSOCCHANGED = 0x08000000;
        private const uint SHCNF_IDLIST = 0x0000;

        /// <summary>
        /// Registers a file extension to be opened with the specified application.
        /// </summary>
        public static void RegisterForFileExtension(string extension, string applicationPath)
        {
            string registryPath = $"Software\\Classes\\{extension}";

            using (var fileReg = Microsoft.Win32.Registry.CurrentUser.CreateSubKey(registryPath))
            {
                fileReg.CreateSubKey("shell\\open\\command")
                    .SetValue(string.Empty, $"\"{applicationPath}\" \"%1\"");
            }

            SHChangeNotify(SHCNE_ASSOCCHANGED, SHCNF_IDLIST, IntPtr.Zero, IntPtr.Zero);
        }

        #endregion

        #region ID Generation

        /// <summary>
        /// Gets the next available ID for a new tree node.
        /// </summary>
        public static int getNextID()
        {
            return GetNextId();
        }

        /// <summary>
        /// Gets the next available ID for a new tree node.
        /// </summary>
        public static int GetNextId()
        {
            int maxId = 0;

            foreach (string key in AppSettings.Instance.Data.Keys)
            {
                if (int.TryParse(key, out int id) && id > maxId)
                {
                    maxId = id;
                }
            }

            return maxId == 0 ? 2 : maxId + 1;
        }

        #endregion

        #region Menu Renderer

        /// <summary>
        /// Custom color renderer for the application's menu strip.
        /// </summary>
        public class NewColourRenderer : ToolStripProfessionalRenderer
        {
            public NewColourRenderer() : base(new DarkColorTable())
            {
            }
        }

        /// <summary>
        /// Dark color scheme for menu items.
        /// </summary>
        public class DarkColorTable : ProfessionalColorTable
        {
            private static readonly Color DarkColor = Color.Black;

            public override Color MenuItemSelected => DarkColor;
            public override Color MenuItemSelectedGradientBegin => DarkColor;
            public override Color MenuItemSelectedGradientEnd => DarkColor;
            public override Color MenuItemPressedGradientBegin => DarkColor;
            public override Color MenuItemPressedGradientEnd => DarkColor;
        }

        // Legacy class name for backward compatibility
        [Obsolete("Use DarkColorTable instead")]
        public class MyColours : DarkColorTable { }

        #endregion
    }
}

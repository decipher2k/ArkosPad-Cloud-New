using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace RicherTextBoxDemo.Misc
{
    public class Tools
    {
        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        static string UriScheme = "arkospad";
        static string FriendlyName = "ArkosPad Tree Reference";

        public static void RegisterUriScheme()
        {
            using (var key = Microsoft.Win32.Registry.CurrentUser.CreateSubKey("SOFTWARE\\Classes\\" + UriScheme))
            {
                // Replace typeof(App) by the class that contains the Main method or any class located in the project that produces the exe.
                // or replace typeof(App).Assembly.Location by anything that gives the full path to the exe
                string applicationLocation = typeof(MainForm).Assembly.Location;

                key.SetValue("", "URL:" + FriendlyName);
                key.SetValue("URL Protocol", "");

                using (var defaultIcon = key.CreateSubKey("DefaultIcon"))
                {
                    defaultIcon.SetValue("", applicationLocation + ",1");
                }

                using (var commandKey = key.CreateSubKey(@"shell\open\command"))
                {
                    commandKey.SetValue("", "\"" + applicationLocation + "\" \"%1\"");
                }
            }
        }

        public static int getNextID()
        {
            int max = 0;
            foreach (String key in Globals.data.Keys)
            {
                if (int.Parse(key) > max)
                    max = int.Parse(key);
            }
            if (max == 0)
                max = 1;
            return max + 1;
        }

        public static void RegisterForFileExtension(string extension, string applicationPath)
        {
            RegistryKey FileReg = Microsoft.Win32.Registry.CurrentUser.CreateSubKey("Software\\Classes\\" + extension);
            FileReg.CreateSubKey("shell\\open\\command").SetValue("", $"\"{applicationPath}\" \"%1\"");
            FileReg.Close();

            SHChangeNotify(0x08000000, 0x0000, IntPtr.Zero, IntPtr.Zero);
        }
        [DllImport("shell32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        public static extern void SHChangeNotify(uint wEventId, uint uFlags, IntPtr dwItem1, IntPtr dwItem2);

        public  class NewColourRenderer : ToolStripProfessionalRenderer
        {
            public NewColourRenderer() : base(new MyColours()) { }
        }
        public class MyColours : ProfessionalColorTable
        {
            public override Color MenuItemSelected
            {
                get { return Color.Black; }
            }
            public override Color MenuItemSelectedGradientBegin
            {
                get { return Color.Black; }
            }
            public override Color MenuItemSelectedGradientEnd
            {
                get { return Color.Black; }
            }

            public override Color MenuItemPressedGradientBegin
            {
                get { return Color.Black; }
            }

            public override Color MenuItemPressedGradientEnd
            {
                get { return Color.Black; }
            }
        }
    }
}

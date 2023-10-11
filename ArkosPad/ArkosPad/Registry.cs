using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RicherTextBoxDemo
{
    internal class Registry
    {
        public static String getFilename()
        {
            try
            {
                String filename = "";
                Microsoft.Win32.RegistryKey key;
                key = Microsoft.Win32.Registry.CurrentUser.OpenSubKey("ArkosPad");
                if (key != null)
                {
                   filename = key.GetValue("LastFile").ToString();
                    key.Close();
                    return filename;
                }
            }
            catch (Exception ex) { }
            return "";
        }
    }
}

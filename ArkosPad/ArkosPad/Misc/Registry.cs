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
                    if(key.GetValue("LastFile") != null)
                        filename = key.GetValue("LastFile").ToString();
                    key.Close();
                    return filename;
                }
            }
            catch (Exception ex) { }
            return "";
        }

        public static void setHostData(String host, String username)
        {
            String filename = "";
            Microsoft.Win32.RegistryKey key;
            key = Microsoft.Win32.Registry.CurrentUser.OpenSubKey("ArkosPad",true);
            if (key != null)
            {
                key.SetValue("LastHost", host);
                key.SetValue("LastUser", username);
                key.Close();                
            }
        }

        public static void getHostData(out String host, out String username)
        {
            host = "";
            username = "";
            String filename = "";
            Microsoft.Win32.RegistryKey key;
            key = Microsoft.Win32.Registry.CurrentUser.OpenSubKey("ArkosPad",true);
            if (key != null)
            {
                try
                {
                    if(key.GetValue("LastHost")!=null)
                        host = key.GetValue("LastHost").ToString();
                    if(key.GetValue("LastUser")!= null)
                        username = key.GetValue("LastUser").ToString();
                }catch(Exception ex) { }
                key.Close();
            }
        }


    }
}

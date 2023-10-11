using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;

namespace RicherTextBoxDemo
{
    public class DataStorage
    {
        public static void SerializeNow(String file, Dictionary<String, TreeItem> data)
        {
            Stream s = File.OpenWrite(file);
            BinaryFormatter b = new BinaryFormatter();
            b.Serialize(s, data);
            s.Close();
        }
        public static Dictionary<String, TreeItem> DeSerializeNow(String file)
        {
            Stream s = File.OpenRead(file);
            BinaryFormatter b = new BinaryFormatter();
            Dictionary<String, TreeItem> data = (Dictionary<String, TreeItem>)b.Deserialize(s);
            s.Close();
            return data;
        }
    }
}

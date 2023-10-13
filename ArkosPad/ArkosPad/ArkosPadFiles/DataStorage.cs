using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;

namespace RicherTextBoxDemo.ArkosPadFiles
{
    public class DataStorage
    {
        public static void SerializeNow(string file, Dictionary<string, TreeItem> data)
        {
            Stream s = File.OpenWrite(file);
            BinaryFormatter b = new BinaryFormatter();
            b.Serialize(s, data);
            s.Close();
        }
        public static Dictionary<string, TreeItem> DeSerializeNow(string file)
        {
            Stream s = File.OpenRead(file);
            BinaryFormatter b = new BinaryFormatter();
            Dictionary<string, TreeItem> data = (Dictionary<string, TreeItem>)b.Deserialize(s);
            s.Close();
            return data;
        }
    }
}

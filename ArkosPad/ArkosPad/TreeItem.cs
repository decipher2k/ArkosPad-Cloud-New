using System;
using System.Collections.Generic;
using System.Text;

namespace RicherTextBoxDemo
{
    [Serializable]
    public class TreeItem
    {
        public static int maxWeight = 0;
        public String name="";
        public int weight=0;
        public String data = "";
        public List<FileItem> files = new List<FileItem>();
        public bool focus = false;
    }
}

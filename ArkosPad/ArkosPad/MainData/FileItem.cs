using System;

namespace RicherTextBoxDemo
{
    [Serializable]
    public class FileItem
    {
        public string caption = "";
        public string filepath = "";
        public int idCloud = 0;
        public override string ToString()
        {
            return caption;
        }
    }
}
using System;

namespace RicherTextBoxDemo
{
    [Serializable]
    public class FileItem
    {
        public String caption = "";
        public String filepath = "";
        public override String ToString()
        {
            return caption;
        }
    }
}
using System;

namespace RicherTextBoxDemo
{
    [Serializable]
    public class FileItem
    {
        public String caption = "";
        public String filepath = "";
        public int idCloud = 0;
        public override String ToString()
        {
            return caption;
        }
    }
}
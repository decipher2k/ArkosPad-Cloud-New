using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RicherTextBoxDemo.DtO
{
    public class FileDto
    {
        public class fileCapsule
        {
            public Files file;
        }

        public class Files
        {
            public int id { get; set; }
            public int idNode { get; set; }
            public string fileName { get; set; }
            public string encName { get; set; }

        }
    }
}

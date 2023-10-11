using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WikiDoxServer.Dto
{
    public class FileDto
    {
        public long id { get; set; } = 0;
        public String url { get; set; }="";
        public String filename { get; set; } = "";
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WikiDoxServer.Dto
{
    public class PageDto
    {
        public string session { get; set; } = "";
        public string url { get; set; } = "";
        public string text { get; set; } = "";
        public int weight { get; set; } = 1;
    }
}

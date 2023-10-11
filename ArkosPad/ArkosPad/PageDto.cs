using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RicherTextBoxDemo
{
    public class PageDto
    {
        public string session { get; set; } = "";
        public string url { get; set; } = "";
        public string text { get; set; } = "";
        public int weight { get; set; } = 1;
    }
}

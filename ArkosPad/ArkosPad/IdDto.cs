using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RicherTextBoxDemo
{
    [Serializable]
    public class IdDto
    {
        public string session { get; set; } = "";
        public long id { get; set; } = 0;
    }
}

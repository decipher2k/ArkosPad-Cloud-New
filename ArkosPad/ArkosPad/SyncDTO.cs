using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RicherTextBoxDemo
{
    public class SyncDTO
    {
        public DateTime lastSync = DateTime.Now;
        public String name { get; set; } = "";
        public String data { get; set; } = "";
        public String ID { get; set; }
        public int weight { get; set; }
        public bool focus { get; set; }
        public List<SyncDTO> children { get; set; } = new List<SyncDTO>();
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RicherTextBoxDemo.DtO
{
    public class SyncDTO
    {
        public DateTime lastSync = DateTime.Now;
        public string name { get; set; } = "";
        public string data { get; set; } = "";
        public string ID { get; set; }
        public int weight { get; set; }
        public bool focus { get; set; }
        public List<SyncDTO> children { get; set; } = new List<SyncDTO>();
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WikiDoxServer.Models
{
    public class Files
    {
        [System.ComponentModel.DataAnnotations.Key]
        public int id { get; set; }
        public int idNode { get; set; }
        public string fileName { get; set; }
        public string encName { get; set; }

    }
}
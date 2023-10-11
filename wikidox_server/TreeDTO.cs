using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WikiDoxServer
{
    public class TreeDTO
    {
        public long id { get; set; } = 0;
        public String label { get; set; } = "";
        public List<TreeDTO> children { get; set; } = new List<TreeDTO>();
    }
}

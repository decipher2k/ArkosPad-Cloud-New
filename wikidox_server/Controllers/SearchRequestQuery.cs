using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WikiDoxServer.Controllers
{
    public class SearchRequestQuery
    {
        public string session { get; set; } = "";
        public string query { get; set; } = "";
        public bool searchFiles { get; set; } = false;
        public bool searchPages { get; set; } = false;

    }
}

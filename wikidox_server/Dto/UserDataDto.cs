using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WikiDoxServer.Dto
{
    public class UserDataDto
    {
        public string session { get; set; } = "";
        public string username { get; set; } = "";
        public string password { get; set; } = "";
        public string salt { get; set; } ="";
        public int canEdit { get; set; } = 0;
        public int canUpload { get; set; } = 0;
        public int canCreate { get; set; } = 0;
        public int isAdmin { get; set; } = 0;
    }
}

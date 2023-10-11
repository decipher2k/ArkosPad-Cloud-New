using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WikiDoxServer.Models
{
    public class User
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string username { get; set; } = "";
        [Required]
        public string password { get; set; } = "";
        public string salt { get; set; } = "";
        public int canEdit { get; set; } = 0;
        public int canUpload { get; set; } = 0;
        public int canCreate { get; set; } = 0;
        public int isAdmin { get; set; } = 0;


    }
}

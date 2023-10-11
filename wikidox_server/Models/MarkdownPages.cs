using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WikiDoxServer.Models
{
    public class MarkdownPages
    {
        [Key]
        public long id { get; set; }
        public String text { get; set; }
        public long idUserPublisher { get; set; }
        public List<groups> idGroupsWithAccess { get; set; }
        public List<users> idUsersWithAccess { get; set; }
        public bool userWhitelist { get; set; }
        public bool groupWhitelist { get; set; }
        public String url { get; set; }
        public long idNode { get; set; }

        public class users
        {
            [Key]
            public long id { get; set; }
            public int idUserWithAccess { get; set; }
        }

        public class groups
        {
            [Key]
            public long id { get; set; }
            public int idGroupWithAccess { get; set; }
        }
    }
}

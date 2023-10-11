using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WikiDoxServer.Dto;

namespace WikiDoxServer
{
    public class SessionData
    {
        public DateTime lastUpdate=DateTime.Now;
        public Dictionary<String, String> values=new Dictionary<string, string>();
        public UserDataDto userDataDto=new UserDataDto();
    }
}

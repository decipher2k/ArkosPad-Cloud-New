using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WikiDoxServer.Dto;

namespace WikiDoxServer
{
    public static class Globals
    {
        private static Random random = new Random();
        public static Dictionary<String, SessionData> sessions=new Dictionary<string, SessionData>();
        public static UserDataDto getAuth(String session,bool reset=false)
        {
            if (Globals.sessions.ContainsKey(session))
            {
                sessions[session].lastUpdate = DateTime.Now;/*
                if (reset)
                {
                    SessionData d = sessions[session];
                    d.userDataDto.session = RandomString(40);
                    sessions.Remove(session);
                    sessions.Add(d.userDataDto.session, d);
                    session = d.userDataDto.session;
                }*/
                return sessions[session].userDataDto;
            }
            throw new Exception();
        }

        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Session;
using Microsoft.Extensions.Primitives;
using NuGet.Packaging;
using WikiDoxServer.Dto;
using WikiDoxServer.Models;

namespace WikiDoxServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        
        Context _context;
        public SessionController(Context context)
        {
            _context = context;
        }
        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

     

       //https://stackoverflow.com/questions/2138429/hash-and-salt-passwords-in-c-sharp
        public string CreateSalt(int size)
        {
           //Generate a cryptographic random number.
           RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();
           byte[] buff = new byte[size];
           rng.GetBytes(buff);
           return Convert.ToBase64String(buff);
        }

        public string GenerateHash(string input, string salt)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(input + salt);
            Sha512HashFunction sHA256ManagedString = new Sha512HashFunction();
            sHA256ManagedString.Update(bytes, 0, bytes.Length);
            byte[] hash = sHA256ManagedString.GetHashBytes();
            return Convert.ToBase64String(hash);
        }

        public bool AreEqual(string plainTextInput, string hashedInput, string salt)
        {
            string newHashedPin = GenerateHash(plainTextInput, salt);
            return newHashedPin.Equals(hashedInput);
        }


        [HttpPost]
        [Route("Login")]
        public String Login([FromBody]UserDataDto userData)
        {

            User userTmp = _context.User.Where(a => a.username == userData.username).First();
            String passTmp = GenerateHash(userData.password, userTmp.salt);

            if (_context.User.Where(a => a.username == userData.username && a.password ==passTmp).Count() > 0)
            {
                String sessionID = RandomString(40);
                SessionData sessionData = new SessionData();
                User u = _context.User.Where(a => a.username == userData.username && a.password ==passTmp).Single();
                sessionData.userDataDto.canCreate = u.canCreate;
                sessionData.userDataDto.canEdit = u.canEdit;
                sessionData.userDataDto.canUpload = u.canUpload;
                sessionData.userDataDto.isAdmin = u.isAdmin;


                //              sessionData.mayEdit = _context.User.Where(a => a.username == userData.username && a.password == GetMD5Hash(userData.password)).Single().mayEdit;
                //                sessionData.mayUpload = _context.User.Where(a => a.username == userData.username && a.password == GetMD5Hash(userData.password)).Single().mayUpload;
                Globals.sessions.Add(sessionID, sessionData);
                return sessionID;
            }
            else
            {
                throw new Exception();
            }

        }

        [HttpPost("{session}")]
        [Route("GetAuth")]
        public UserDataDto GetAuth([FromBody] SessionDto session)
        {
            return Globals.getAuth(session.session,true);
        }
        [HttpPost("{session}")]
        [Route("Logout")]
        public void Logout([FromBody]SessionDto session)
        {
            Globals.sessions.Remove(session.session);
        }
    }
}
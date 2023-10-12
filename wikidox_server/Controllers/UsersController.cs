using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Packaging;
using WikiDoxServer.Dto;
using WikiDoxServer.Models;

namespace WikiDoxServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public Context _context;
        public UsersController(Context context)
        {
            _context = context;
        }

        public class userList
        {
            public userList(List<User> users)
            {
                this.users = users;
            }
            public List<User> users = new List<User>();
        }



        [HttpPost]
        [Route("GetUserList")]
        public userList GetUserList([FromBody]SessionDto session)
        {
            if (Globals.getAuth(session.session).isAdmin == 0) throw new Exception();
            return new userList(_context.User.Where(a => a.id!=0).ToList<User>());
        }

        [HttpPost]
        [Route("AddUser")]
        public bool AddUser([FromBody]UserDataDto userData)
        {
            if(Globals.getAuth(userData.session).isAdmin == 0) throw new Exception();
            if (userData.username == "" || userData.username == "undefined" || userData.username == null || userData.password == "" || userData.password == "undefined" || userData.password == null)
                throw new Exception();
            try
            {
                if (_context.User.Where(a => a.username == userData.username).Count() == 0)
                {
                    User u = new User();
                    u.canCreate = 0;
                    u.canEdit = 0;
                    u.canUpload = 0;
                    u.isAdmin = 0;
                    String salt = CreateSalt(16);
                    u.salt = salt;
                    u.username = userData.username;
                    u.password = GenerateHash(userData.password, salt);

                    _context.User.Add(u);
                    _context.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }catch(Exception ex)
            {
                throw new Exception();
            }
        }

        [HttpPost]
        [Route("DeleteUser")]
        public bool DeleteUser([FromBody] UserDataDto userData)
        {
            if(Globals.getAuth(userData.session).isAdmin == 0) throw new Exception();
            try
            {
                if (userData.username == "" || userData.username == "undefined" || userData.username == null)
                    throw new Exception();
                User u=_context.User.Where(a => a.username == userData.username).Single();
                _context.User.Remove(u);
                _context.SaveChanges();
                
                 return true;
            }
            catch (Exception ex)
            {
                throw new Exception();
            }
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
        [Route("GetUserACL")]
        public UserDataDto GetUserACL([FromBody]UserDataDto userData)
        {
            if (Globals.getAuth(userData.session).isAdmin == 0) throw new Exception();
            User u = _context.User.Where(a => a.username == userData.username).Single();
            UserDataDto ret = new UserDataDto();
            ret.canUpload = u.canUpload;
            ret.canEdit = u.canEdit;
            ret.canCreate = u.canCreate;
            ret.isAdmin = u.isAdmin;
            return ret;
        }

        [HttpPost]
        [Route("EditUser")]
        public bool EditUser([FromBody]UserDataDto userData)
        {
            if(Globals.getAuth(userData.session).isAdmin == 0) throw new Exception(); ;
            if (userData.username == "" || userData.username == "undefined" || userData.username == null )
                throw new Exception();
            try
            {
                User u = _context.User.Where(a => a.username == userData.username).Single();
                if (!(userData.password == "" || userData.password == "undefined" || userData.password == null))
                    u.password = userData.password;
                u.canUpload = userData.canUpload;
                u.canEdit = userData.canEdit;
                u.canCreate = userData.canCreate;
                u.isAdmin = userData.isAdmin;
                _context.Update(u);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception();
            }
        }





        public static string GetMD5Hash(string TextToHash)
        {
            //Prüfen ob Daten übergeben wurden.
            if ((TextToHash == null) || (TextToHash.Length == 0))
            {
                return string.Empty;
            }

            //MD5 Hash aus dem String berechnen. Dazu muss der string in ein Byte[]
            //zerlegt werden. Danach muss das Resultat wieder zurück in ein string.
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] textToHash = System.Text.Encoding.Default.GetBytes(TextToHash);
            byte[] result = md5.ComputeHash(textToHash);
            String ret = System.BitConverter.ToString(result).ToLower().Replace("-", "");
            return ret;
        }

    }
}
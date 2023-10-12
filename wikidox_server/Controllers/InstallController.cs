using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Packaging;
using WikiDoxServer.Models;

namespace WikiDoxServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class InstallController : ControllerBase
    {
        public Context _context;
        public InstallController(Context context)
        {
            _context = context;
        }
        public string GenerateHash(string input, string salt)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(input + salt);
            Sha512HashFunction sHA256ManagedString = new Sha512HashFunction();
            sHA256ManagedString.Update(bytes, 0, bytes.Length);
            byte[] hash = sHA256ManagedString.GetHashBytes();
            return Convert.ToBase64String(hash);
        }
        [HttpGet]
        [Route("Install")]
        public String Install()
        {
      

            if (_context.Node.Where(a => a.id == 1).Count() < 1)
            {

                Node n = new Node();
                n.children = new List<Node.NodeCapsule>();
                n.id = 1;
                n.name = "ROOT";
                _context.Node.Add(n);
                _context.SaveChanges();

                MarkdownPages m = new MarkdownPages();
                m.id = 1;
                m.idNode = 1;
                m.url = "root";
                m.text = "Welcome to WikiDox. To change this text, click 'Edit'.<br>Format for page's urls is Category1:Category2:Page. You can enter the page url in the input at the top of the pages,<br> and hit 'Edit' to edit them. This is also necessary to save a new page.";
                _context.MarkdownPages.Add(m);
                _context.SaveChanges();

                User u = new User();
                u.canCreate = 1;
                u.canEdit = 1;
                u.canUpload = 1;
                u.isAdmin = 1;
                u.username = "admin";
                u.password = GenerateHash("admin", "");
                _context.User.Add(u);
                _context.SaveChanges();

                if (!Directory.Exists("./files/"))
                    Directory.CreateDirectory("./files");

                return "Installation finished. Please login using admin:admin and change the password.";
            }            
            return "Installation finished.";
        }
    }
}
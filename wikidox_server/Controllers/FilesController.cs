using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Win32.SafeHandles;
using WikiDoxServer.Dto;
using WikiDoxServer.Models;

namespace WikiDoxServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {

        public Context _context;
        public FilesController(Context context)
        {
            _context = context;
        }

        public class fileCapsule
        {
            public Files file;
        }

        [HttpPost]
        [Route("GetFiles")]
        public List<fileCapsule> GetFiles([FromBody] IdDto id)
        {
            Globals.getAuth(id.session);
            List<fileCapsule> ret = new List<fileCapsule>();
            if (_context.Files.Where(a => a.idNode == id.id).Count() > 0)
            {
                foreach (Files f in _context.Files.Where(a => a.idNode == id.id).ToList())
                {
                    fileCapsule fc = new fileCapsule();
                    fc.file = f;
                    ret.Add(fc);
                }
            }
            return ret;
        }

        [HttpPost]
        [Route("Download")]
        public FileStreamResult Download([FromBody] IdDto idDto)
        {
            Globals.getAuth(idDto.session);
            if (_context.Files.Where(a => a.id == idDto.id).Count() > 0)
            {
                String encName = _context.Files.Where(a => a.id == idDto.id).Single().encName;
                String fullName = _context.Files.Where(a => a.id == idDto.id).Single().fileName;

                Stream stream = System.IO.File.Open("files/" + encName, FileMode.Open);
                return File(stream, "application/octet-stream", fullName); // returns a FileStreamResult
            }
            return null;
        }

        [RequestSizeLimit(2147483648)]
        [HttpPost]
        [Route("Upload")]
        public String Upload()
        {
            UserDataDto auth = Globals.getAuth(Request.Form["session"].ToString());
            if (auth.canUpload == 1)
            {
                var file = Request.Form.Files[0];//*.Files[0];


                var fileName = Request.Form["fileName"];
                var encName = genEncName();
                Files f = new Files();
                f.fileName = fileName;
                f.idNode = int.Parse(Request.Form["id"]);
                f.encName = encName;
                _context.Files.Add(f);
                _context.SaveChanges();


                using (var stream = new System.IO.FileStream("files/" + encName, FileMode.CreateNew))
                {
                    file.CopyTo(stream);
                }


                // Process uploaded files
                // Don't rely on or trust the FileName property without validation.
                return "OK";/*
                return new ContentResult
                {
                    ContentType = "text/html",
                    StatusCode = (int)HttpStatusCode.OK,
                    Content = "<html><body onload='history.back();'>"
                };*/
            }
            else
            {
                throw new Exception();
            }
        }

        private string genEncName()
        {
            return Path.GetRandomFileName();
        }
    }
}
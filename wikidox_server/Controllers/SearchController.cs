using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using WikiDoxServer.Dto;
using WikiDoxServer.Models;

namespace WikiDoxServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        public Context _context;
        public SearchController(Context context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Search")]
        public SearchResultDto Search([FromBody] SearchRequestQuery query)
        {
            Globals.getAuth(query.session);
            SearchResultDto ret = new SearchResultDto();
            if (query.searchPages)
            {
                string query1 = query.query;
                List<MarkdownPages> pages = _context.MarkdownPages.FromSql($"SELECT * FROM markdownpages WHERE INSTR(`text`, {query1})").ToList();

                foreach (MarkdownPages p in pages)
                {
                    PageDto d = new PageDto();
                    d.text = p.text;
                    d.url = p.url;
                    ret.pages.Add(d);
                }
            }

            if (query.searchFiles)
            {
                String filename = query.query;
                List<Files> files = _context.Files.FromSql($"SELECT * FROM files WHERE INSTR(`fileName`, {filename})").ToList();
                List<FileDto> fDto = new List<FileDto>();
                foreach (Files f in files)
                {
                    FileDto fd = new FileDto();
                    fd.id = f.id;
                    fd.filename = f.fileName;
                    ret.files.Add(fd);
                }
            }
            return ret;
        }
    }
}
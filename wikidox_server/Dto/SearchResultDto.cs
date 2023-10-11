using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WikiDoxServer.Dto;

namespace WikiDoxServer.Dto
{
    public class SearchResultDto
    {
        public List<FileDto> files=new List<FileDto>();
        public List<PageDto> pages = new List<PageDto>();

    }
}

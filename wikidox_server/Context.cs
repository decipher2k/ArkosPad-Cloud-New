using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WikiDoxServer.Models;

namespace WikiDoxServer
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options)
            : base(options)
        {
        }
       public DbSet<Models.MarkdownPages> MarkdownPages{ get; set; }
       public DbSet<Node> Node { get; set; }
        public DbSet<Node.NodeCapsule> NodeCapsule { get; set; }
        public DbSet<Files> Files { get; set; }
        public DbSet<User> User { get; set; }

    }
}

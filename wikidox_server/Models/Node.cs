using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WikiDoxServer.Models
{
    public class Node
    {
        [Key]
        public int id { get; set; }

        public int weight { get; set; }
        public string name { get; set; } = "";

        public int focus { get; set; }=0;
        public List<NodeCapsule> children { get; set; } = new List<NodeCapsule>();

        public class NodeCapsule
        {
            public NodeCapsule() { }
            public NodeCapsule(Node node)
            {
                idNode = node.id;
            }
            [Key]
            public long id { get; set; }
            public long idNode { get; set; }
        }

    }
}

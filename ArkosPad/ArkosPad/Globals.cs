using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace RicherTextBoxDemo
{
    public static class Globals
    {
        public static Dictionary<String, TreeItem> data = new Dictionary<String, TreeItem>();
        public static String tempDir = "";
        public static bool isCloud = false;
        public static String cloudSession = "";
        public static String cloudURL = "";
        public static String _zipFileName = "";
        public static String _filename = "";
        public static bool notSaved = false;
        public static int _maxWeight = 1;
    }
}

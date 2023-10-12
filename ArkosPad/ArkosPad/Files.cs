using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace RicherTextBoxDemo
{
    public class Files
    {
        public static void updateFileList(MainForm mainForm)
        {
            mainForm.clearLbFiles();
            String selectedFile = "";
            if (mainForm.getSelectedNode() != null)
            {
                TreeNode n = mainForm.getSelectedNode();
                if (n.Tag != null)
                {
                    String tag = ((XmlNodeData)n.Tag).ID;
                    if (MainForm.data.ContainsKey(tag))
                    {
                        List<FileItem> fileItem = MainForm.data[tag].files;
                        foreach (FileItem item in fileItem)
                        {
                            mainForm.addLbFile(item.caption);
                        }
                    }
                }
            }
        }
    }
}

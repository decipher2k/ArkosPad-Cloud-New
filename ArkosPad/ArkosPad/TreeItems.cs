using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace RicherTextBoxDemo
{
    public class TreeItems
    {
        public static void SelectedItem(MainForm mainForm, Dictionary<String, TreeItem> data )
        {
            
            if (mainForm.getSelectedNode() != null)
            {
                TreeNode n = mainForm.getSelectedNode();
                Files.updateFileList(mainForm);
                if (n.Tag != null)
                {
                    String tag = ((XmlNodeData)n.Tag).ID;
                    if (data.ContainsKey(tag))
                    {
                        String m_data = data[tag].data;
                        mainForm.setRtfContent(m_data);
                    }
                }
                else
                {
                    mainForm.setRtfContent("");
                }
            }
        }
    }
}

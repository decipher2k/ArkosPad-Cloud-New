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
                if (!MainForm.isCloud)
                {
                    Files.updateFileList(mainForm);
                }
                else
                {
                    if (n.Tag != null)
                    {
                        List<FileDto.fileCapsule> files = Sync.GetFiles(int.Parse(((XmlNodeData)n.Tag).ID));
                        foreach (FileDto.fileCapsule file in files)
                        {
                            ListViewItem item = new ListViewItem();
                            item.Text = file.file.fileName;
                            item.Tag = file.file.id;
                            mainForm.addLbFile(item);
                        }
                    }   
                }

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

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace RicherTextBoxDemo.ArkosPadFiles
{
    public class MindMap
    {
        public static void exportToMindMap(TreeView treeView1)
        {
            TreeView tv = treeView1;

            SaveFileDialog dlg = new SaveFileDialog();
            dlg.Title = "Open .mm Document";
            dlg.Filter = "Mindmap Files (*.mm)|*.mm";
            dlg.FileName = Application.StartupPath + "\\export.mm";
            if (dlg.ShowDialog() == DialogResult.OK)
            {
                String filename = "";
                filename = dlg.FileName;

                StreamWriter sr = new StreamWriter(filename, false, System.Text.Encoding.UTF8);
                sr.Write(File.ReadAllText("templates\\mm_header.mm"));
                Nodes.exportNodeToMindmap(tv.SelectedNode.Nodes, sr);

                sr.Write(File.ReadAllText("templates\\mm_footer.mm"));
                sr.Close();
                MessageBox.Show(MainForm.instance, "Export successfull.", "Success");
            }
        }
    }
}

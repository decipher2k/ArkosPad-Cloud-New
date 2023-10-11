using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml;

namespace RicherTextBox
{
    public partial class AddLinkForm : Form
    {
        public String selection = "";
        public AddLinkForm(String file)
        {
            InitializeComponent();
            populateTreeview(file);
        }


        private void button2_Click(object sender, EventArgs e)
        {
            selection = treeView1.SelectedNode.Tag.ToString();
            DialogResult= DialogResult.OK;
            this.Close();
        }
        private void populateTreeview(String filename = "")
        {
            OpenFileDialog dlg = new OpenFileDialog();
            dlg.Title = "Open XML Document";
            dlg.Filter = "XML Files (*.xml)|*.xml";
            dlg.FileName = "treepad.xml";
            dlg.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);




            XmlDocument xDoc = new XmlDocument();
            xDoc.Load(filename);
            treeView1.Nodes.Clear();
            treeView1.Nodes.Add(new
              TreeNode(xDoc.DocumentElement.Name));
            TreeNode tNode = new TreeNode();
            tNode = (TreeNode)treeView1.Nodes[0];
            SaveLoad.addTreeNode(xDoc.DocumentElement, tNode);
            treeView1.ExpandAll();



        }

        private void AddLinkForm_Load(object sender, EventArgs e)
        {
        }

        private void button1_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            this.Close();
        }
    }
}
 


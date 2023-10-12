using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace RicherTextBoxDemo
{
    public partial class OpenFile : Form
    {
        private bool cloudOnly = false;
        public OpenFile(bool cloudOnly=false)
        {
            this.cloudOnly = cloudOnly;
            InitializeComponent();
        }

        public String file;
        public String url;
        public String username;
        public String password;
        public String session;
        public bool isCloud = false;

        private void OpenFile_Load(object sender, EventArgs e)
        {
            if (cloudOnly)
                groupBox1.Enabled = false;

            Registry.getHostData(out url, out username);
            textBox2.Text = url;
            textBox3.Text = username;

            textBox1.Text = Registry.getFilename();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            OpenFileDialog ofd = new OpenFileDialog();
            ofd.Title = "Open ArkosPad Document";
            ofd.Filter = "ArkosPad Files (*.arkospad)|*.arkospad";
            ofd.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
            if (ofd.ShowDialog()==DialogResult.OK)
                textBox1.Text= ofd.FileName;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            file = textBox1.Text;
            if(System.IO.File.Exists(file))
            {
                DialogResult = DialogResult.OK;
                this.Close();
            }
            else
            {
                MessageBox.Show(this,"File not found.","Error",MessageBoxButtons.OK,MessageBoxIcon.Error);
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            url = textBox2.Text;
            username = textBox3.Text;
            password = textBox4.Text;
            if (url!="" && username!="" && password!="") {
                var request = (HttpWebRequest)WebRequest.Create(url+"/api/Session/Login");
                var dto = new UserDataDto();
                dto.username = username;
                dto.password = password;
                var data = Encoding.ASCII.GetBytes(Newtonsoft.Json.JsonConvert.SerializeObject(dto));

                request.Method = "POST";
                request.ContentType ="text/json";
                request.ContentLength = data.Length;

                using (var stream = request.GetRequestStream())
                {
                    stream.Write(data, 0, data.Length);
                }

                var response = (HttpWebResponse)request.GetResponse();

                var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();

                session = responseString;

                this.DialogResult = DialogResult.OK;
                this.isCloud = true;

                Registry.setHostData(url, username);

                this.Close();
            }
            else
            {
                MessageBox.Show(this, "Please fill all fields.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }



        }

        private void textBox4_KeyPress(object sender, KeyPressEventArgs e)
        {
            if(e.KeyChar==13)
            {
                button3_Click(null, null);
            }
        }
    }
}

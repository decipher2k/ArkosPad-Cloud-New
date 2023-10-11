using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace RicherTextBoxDemo
{
    public partial class New : Form
    {
        public String mName = "";
        public String Weight = "";

        public New(String name="",String weight="0")
        {
            this.mName = name;
            this.Weight = weight;
            InitializeComponent();
        }

        private void New_Load(object sender, EventArgs e)
        {
            textBox1.Text = mName;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            mName = textBox1.Text;
           
            if(mName!="")
            {
                DialogResult = DialogResult.OK;
                this.Close();
            }

        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == 13)
            {
                mName = textBox1.Text;

                if (mName != "")
                {
                    DialogResult = DialogResult.OK;
                    this.Close();
                }
            }
        }
    }
}

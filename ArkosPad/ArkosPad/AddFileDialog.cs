﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace RicherTextBoxDemo
{
    public partial class AddFileDialog : Form
    {
        public String caption = "";
        public String file = "";
        public AddFileDialog()
        {
            InitializeComponent();
        }

        private void AddFileDialog_Load(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (textBox1.Text == "" || textBox2.Text == "")
            {
                MessageBox.Show(this, "Please fill all fields.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            else
            {

                caption = textBox1.Text;
                file = textBox2.Text;
                DialogResult = DialogResult.OK;
                this.Close();
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            this.Close();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialog = new OpenFileDialog();
            if(openFileDialog.ShowDialog()== DialogResult.OK)
            {
                textBox2.Text = openFileDialog.FileName;
            }
            
        }
    }
}

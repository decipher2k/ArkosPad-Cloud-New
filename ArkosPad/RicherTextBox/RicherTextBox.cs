﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Text;
using System.Windows.Forms;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

namespace RicherTextBox
{
    public enum RicherTextBoxToolStripGroups
    {
        SaveAndLoad = 0x1,
        FontNameAndSize = 0x2,
        BoldUnderlineItalic = 0x4,
        Alignment = 0x8,
        FontColor = 0x10,
        IndentationAndBullets = 0x20,
        Insert = 0x40,
        Zoom = 0x80
    }

    public partial class RicherTextBox : UserControl
    {
        #region Settings
        private int indent = 10;
        [Category("Settings")]
        [Description("Value indicating the number of characters used for indentation")]
        public int INDENT
        {
            get { return indent; }
            set { indent = value; }
        }
        #endregion

        #region Properties for toolstrip items visibility
        [Category("Toolstip items visibility")]
        public bool GroupSaveAndLoadVisible
        {
            get { return IsGroupVisible(RicherTextBoxToolStripGroups.SaveAndLoad); }
            set { HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.SaveAndLoad, value); }
        }
        [Category("Toolstip items visibility")]
        public bool GroupFontNameAndSizeVisible
        {
            get { return IsGroupVisible(RicherTextBoxToolStripGroups.FontNameAndSize); }
            set { HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.FontNameAndSize, value); }
        }
        [Category("Toolstip items visibility")]
        public bool GroupBoldUnderlineItalicVisible
        {
            get { return IsGroupVisible(RicherTextBoxToolStripGroups.BoldUnderlineItalic); }
            set { HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.BoldUnderlineItalic, value); }
        }
        [Category("Toolstip items visibility")]
        public bool GroupAlignmentVisible
        {
            get { return IsGroupVisible(RicherTextBoxToolStripGroups.Alignment); }
            set { HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.Alignment, value); }
        }
        [Category("Toolstip items visibility")]
        public bool GroupFontColorVisible
        {
            get { return IsGroupVisible(RicherTextBoxToolStripGroups.FontColor); }
            set { HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.FontColor, value); }
        }
        [Category("Toolstip items visibility")]
        public bool GroupIndentationAndBulletsVisible
        {
            get { return IsGroupVisible(RicherTextBoxToolStripGroups.IndentationAndBullets); }
            set { HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.IndentationAndBullets, value); }
        }
        [Category("Toolstip items visibility")]
        public bool GroupInsertVisible
        {
            get { return IsGroupVisible(RicherTextBoxToolStripGroups.Insert); }
            set { HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.Insert, value); }
        }
        [Category("Toolstip items visibility")]
        public bool GroupZoomVisible
        {
            get { return IsGroupVisible(RicherTextBoxToolStripGroups.Zoom); }
            set { HideToolstripItemsByGroup(RicherTextBoxToolStripGroups.Zoom, value); }
        }
        [Category("Toolstip items visibility")]
        public bool ToolStripVisible
        {
            get { return toolStrip1.Visible; }
            set { toolStrip1.Visible = value; }
        }
        [Category("Toolstip items visibility")]
        public bool FindReplaceVisible
        {
            get { return toolStripFindReplace.Visible; }
            set { toolStripFindReplace.Visible = value; }
        }

        
       
        [Category("Toolstrip single items visibility")]
        public bool SeparatorSaveLoadVisible
        {
            get { return toolStripSeparator6.Visible; }
            set { toolStripSeparator6.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool FontFamilyVisible
        {
            get { return tscmbFont.Visible; }
            set { tscmbFont.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool FontSizeVisible
        {
            get { return tscmbFontSize.Visible; }
            set { tscmbFontSize.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool ChooseFontVisible
        {
            get { return tsbtnChooseFont.Visible; }
            set { tsbtnChooseFont.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool SeparatorFontVisible
        {
            get { return toolStripSeparator1.Visible; }
            set { toolStripSeparator1.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool BoldVisible
        {
            get { return tsbtnBold.Visible; }
            set { tsbtnBold.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool ItalicVisible
        {
            get { return tsbtnItalic.Visible; }
            set { tsbtnItalic.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool UnderlineVisible
        {
            get { return tsbtnUnderline.Visible; }
            set { tsbtnUnderline.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool SeparatorBoldUnderlineItalicVisible
        {
            get { return toolStripSeparator2.Visible; }
            set { toolStripSeparator2.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool AlignLeftVisible
        {
            get { return tsbtnAlignLeft.Visible; }
            set { tsbtnAlignLeft.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool AlignRightVisible
        {
            get { return tsbtnAlignRight.Visible; }
            set { tsbtnAlignRight.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool AlignCenterVisible
        {
            get { return tsbtnAlignCenter.Visible; }
            set { tsbtnAlignCenter.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool SeparatorAlignVisible
        {
            get { return toolStripSeparator3.Visible; }
            set { toolStripSeparator3.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool FontColorVisible
        {
            get { return tsbtnFontColor.Visible; }
            set { tsbtnFontColor.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool WordWrapVisible
        {
            get { return tsbtnWordWrap.Visible; }
            set { tsbtnWordWrap.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool SeparatorFontColorVisible
        {
            get { return toolStripSeparator4.Visible; }
            set { toolStripSeparator4.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool IndentVisible
        {
            get { return tsbtnIndent.Visible; }
            set { tsbtnIndent.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool OutdentVisible
        {
            get { return tsbtnOutdent.Visible; }
            set { tsbtnOutdent.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool BulletsVisible
        {
            get { return tsbtnBullets.Visible; }
            set { tsbtnBullets.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool SeparatorIndentAndBulletsVisible
        {
            get { return toolStripSeparator5.Visible; }
            set { toolStripSeparator5.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool InsertPictureVisible
        {
            get { return tsbtnInsertPicture.Visible; }
            set { tsbtnInsertPicture.Visible = value; }
        }
        [Category("Toolstrip single items visibility")]
        public bool SeparatorInsertVisible
        {
            get { return toolStripSeparator7.Visible; }
            set { toolStripSeparator7.Visible = value; }
        }
        

        #endregion

        #region data properties
        [Category("Document data")]
        [Description("RicherTextBox content in plain text")]
        [Browsable(true)]
        public override string Text
        {
            get { return rtbDocument.Text; }
            set { rtbDocument.Text = value; }
        }
        [Category("Document data")]
        [Description("RicherTextBox content in rich-text format")]
        public string Rtf
        {
            get { return rtbDocument.Rtf; }
            set { try { rtbDocument.Rtf = value; } catch (ArgumentException) { rtbDocument.Text = value; } }
        }

        #endregion


        #region Construction and initial loading
        public RicherTextBox()
        {
            InitializeComponent();
        }

        private void RicherTextBox_Load(object sender, EventArgs e)
        {
            // load system fonts
            foreach (FontFamily family in FontFamily.Families)
            {
                tscmbFont.Items.Add(family.Name);
            }
            tscmbFont.SelectedItem = "Microsoft Sans Serif";

            tscmbFontSize.SelectedItem = "9";

            tsbtnWordWrap.Checked = rtbDocument.WordWrap;
        }

        #endregion

        #region Toolstrip items handling

        private void tsbtnBIU_Click(object sender, EventArgs e)
        {
            // bold, italic, underline
            try
            {
                if (!(rtbDocument.SelectionFont == null))
                {
                    Font currentFont = rtbDocument.SelectionFont;
                    FontStyle newFontStyle = rtbDocument.SelectionFont.Style;
                    string txt = (sender as ToolStripButton).Name;
                    if (txt.IndexOf("Bold") >= 0)
                        newFontStyle = rtbDocument.SelectionFont.Style ^ FontStyle.Bold;
                    else if (txt.IndexOf("Italic") >= 0)
                        newFontStyle = rtbDocument.SelectionFont.Style ^ FontStyle.Italic;
                    else if (txt.IndexOf("Underline") >= 0)
                        newFontStyle = rtbDocument.SelectionFont.Style ^ FontStyle.Underline;

                    rtbDocument.SelectionFont = new Font(currentFont.FontFamily, currentFont.Size, newFontStyle);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), "Error");
            }
        }

        private void rtbDocument_SelectionChanged(object sender, EventArgs e)
        {
            if (rtbDocument.SelectionFont != null)
            {
                tsbtnBold.Checked = rtbDocument.SelectionFont.Bold;
                tsbtnItalic.Checked = rtbDocument.SelectionFont.Italic;
                tsbtnUnderline.Checked = rtbDocument.SelectionFont.Underline;

                boldToolStripMenuItem.Checked = rtbDocument.SelectionFont.Bold;
                italicToolStripMenuItem.Checked = rtbDocument.SelectionFont.Italic;
                underlineToolStripMenuItem.Checked = rtbDocument.SelectionFont.Underline;

                switch (rtbDocument.SelectionAlignment)
                {
                    case HorizontalAlignment.Left:
                        tsbtnAlignLeft.Checked = true;
                        tsbtnAlignCenter.Checked = false;
                        tsbtnAlignRight.Checked = false;

                        leftToolStripMenuItem.Checked = true;
                        centerToolStripMenuItem.Checked = false;
                        rightToolStripMenuItem.Checked = false;
                        break;

                    case HorizontalAlignment.Center:
                        tsbtnAlignLeft.Checked = false;
                        tsbtnAlignCenter.Checked = true;
                        tsbtnAlignRight.Checked = false;

                        leftToolStripMenuItem.Checked = false;
                        centerToolStripMenuItem.Checked = true;
                        rightToolStripMenuItem.Checked = false;
                        break;

                    case HorizontalAlignment.Right:
                        tsbtnAlignLeft.Checked = false;
                        tsbtnAlignCenter.Checked = false;
                        tsbtnAlignRight.Checked = true;

                        leftToolStripMenuItem.Checked = false;
                        centerToolStripMenuItem.Checked = false;
                        rightToolStripMenuItem.Checked = true;
                        break;
                }

                tsbtnBullets.Checked = rtbDocument.SelectionBullet;
                bulletsToolStripMenuItem.Checked = rtbDocument.SelectionBullet;

                tscmbFont.SelectedItem = rtbDocument.SelectionFont.FontFamily.Name;
                tscmbFontSize.SelectedItem = rtbDocument.SelectionFont.Size.ToString();
            }
        }

        private void tsbtnAlignment_Click(object sender, EventArgs e)
        {
            // alignment: left, center, right
            try
            {
                string txt = (sender as ToolStripButton).Name;
                if (txt.IndexOf("Left") >= 0)
                {
                    rtbDocument.SelectionAlignment = HorizontalAlignment.Left;
                    tsbtnAlignLeft.Checked = true;
                    tsbtnAlignCenter.Checked = false;
                    tsbtnAlignRight.Checked = false;
                }
                else if (txt.IndexOf("Center") >= 0)
                {
                    rtbDocument.SelectionAlignment = HorizontalAlignment.Center;
                    tsbtnAlignLeft.Checked = false;
                    tsbtnAlignCenter.Checked = true;
                    tsbtnAlignRight.Checked = false;
                }
                else if (txt.IndexOf("Right") >= 0)
                {
                    rtbDocument.SelectionAlignment = HorizontalAlignment.Right;
                    tsbtnAlignLeft.Checked = false;
                    tsbtnAlignCenter.Checked = false;
                    tsbtnAlignRight.Checked = true;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), "Error");
            }
        }

        private void tsbtnFontColor_Click(object sender, EventArgs e)
        {
            // font color
            try
            {
                using (ColorDialog dlg = new ColorDialog())
                {
                    dlg.Color = rtbDocument.SelectionColor;
                    if (dlg.ShowDialog() == DialogResult.OK)
                    {
                        rtbDocument.SelectionColor = dlg.Color;
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), "Error");
            }
        }

        private void tsbtnBulletsAndNumbering_Click(object sender, EventArgs e)
        {
            // bullets, indentation
            try
            {
                string name = (sender as ToolStripButton).Name;
                if (name.IndexOf("Bullets") >= 0)
                    rtbDocument.SelectionBullet = tsbtnBullets.Checked;
                else if (name.IndexOf("Indent") >= 0)
                    rtbDocument.SelectionIndent += INDENT;
                else if (name.IndexOf("Outdent") >= 0)
                    rtbDocument.SelectionIndent -= INDENT;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), "Error");
            }
        }

        private void tscmbFontSize_Click(object sender, EventArgs e)
        {
            // font size
            try
            {
                if (!(rtbDocument.SelectionFont == null))
                {
                    Font currentFont = rtbDocument.SelectionFont;
                    float newSize = Convert.ToSingle(tscmbFontSize.SelectedItem.ToString());
                    rtbDocument.SelectionFont = new Font(currentFont.FontFamily, newSize, currentFont.Style);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), "Error");
            }
        }


        private void tscmbFontSize_TextChanged(object sender, EventArgs e)
        {
            // font size custom
            try
            {
                if (!(rtbDocument.SelectionFont == null))
                {
                    Font currentFont = rtbDocument.SelectionFont;
                    float newSize = Convert.ToSingle(tscmbFontSize.Text);
                    rtbDocument.SelectionFont = new Font(currentFont.FontFamily, newSize, currentFont.Style);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), "Error");
            }
        }

        private void tscmbFont_Click(object sender, EventArgs e)
        {
            // font
            try
            {
                if (!(rtbDocument.SelectionFont == null))
                {
                    Font currentFont = rtbDocument.SelectionFont;
                    FontFamily newFamily = new FontFamily(tscmbFont.SelectedItem.ToString());
                    rtbDocument.SelectionFont = new Font(newFamily, currentFont.Size, currentFont.Style);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), "Error");
            }
        }

        private void btnChooseFont_Click(object sender, EventArgs e)
        {
            using (FontDialog dlg = new FontDialog())
            {
                if (rtbDocument.SelectionFont != null) dlg.Font = rtbDocument.SelectionFont;
                if (dlg.ShowDialog() == DialogResult.OK)
                {
                    rtbDocument.SelectionFont = dlg.Font;
                }
            }
        }

        private void tsbtnInsertPicture_Click(object sender, EventArgs e)
        {
            using (OpenFileDialog dlg = new OpenFileDialog())
            {
                dlg.Title = "Insert picture";
                dlg.DefaultExt = "jpg";
                dlg.Filter = "Bitmap Files|*.bmp|JPEG Files|*.jpg|GIF Files|*.gif|All files|*.*";
                dlg.FilterIndex = 1;
                if (dlg.ShowDialog() == DialogResult.OK)
                {
                    try
                    {
                        string strImagePath = dlg.FileName;
                        Image img = Image.FromFile(strImagePath);
                        Clipboard.SetDataObject(img);
                        DataFormats.Format df;
                        df = DataFormats.GetFormat(DataFormats.Bitmap);
                        if (this.rtbDocument.CanPaste(df))
                        {
                            this.rtbDocument.Paste(df);
                        }
                    }
                    catch
                    {
                        MessageBox.Show("Unable to insert image.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                }
            }
        }

        private void tsbtnSave_Click(object sender, EventArgs e)
        {
            using (SaveFileDialog dlg = new SaveFileDialog())
            {
                dlg.Filter = "Rich text format|*.rtf";
                dlg.FilterIndex = 0;
                dlg.OverwritePrompt = true;
                if (dlg.ShowDialog() == DialogResult.OK)
                {
                    try
                    {
                        rtbDocument.SaveFile(dlg.FileName, RichTextBoxStreamType.RichText);
                    }
                    catch (IOException exc)
                    {
                        MessageBox.Show("Error writing file: \n" + exc.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                    catch (ArgumentException exc_a)
                    {
                        MessageBox.Show("Error writing file: \n" + exc_a.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                }
            }
        }

        private void tsbtnOpen_Click(object sender, EventArgs e)
        {
            using (OpenFileDialog dlg = new OpenFileDialog())
            {
                dlg.Filter = "Rich text format|*.rtf";
                dlg.FilterIndex = 0;
                if (dlg.ShowDialog() == DialogResult.OK)
                {
                    try
                    {
                        rtbDocument.LoadFile(dlg.FileName, RichTextBoxStreamType.RichText);
                    }
                    catch (IOException exc)
                    {
                        MessageBox.Show("Error reading file: \n" + exc.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                    catch (ArgumentException exc_a)
                    {
                        MessageBox.Show("Error reading file: \n" + exc_a.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }

                }
            }
        }

     

        private void tstxtZoomFactor_Leave(object sender, EventArgs e)
        {
     
        }


        private void tsbtnWordWrap_Click(object sender, EventArgs e)
        {
            rtbDocument.WordWrap = tsbtnWordWrap.Checked;
        }

        #endregion

        #region Changing visibility of toolstrip items

        public void HideToolstripItemsByGroup(RicherTextBoxToolStripGroups group, bool visible)
        {
            if ((group & RicherTextBoxToolStripGroups.SaveAndLoad) != 0)
            {
                
                toolStripSeparator6.Visible = visible;
            }
            if ((group & RicherTextBoxToolStripGroups.FontNameAndSize) != 0)
            {
                tscmbFont.Visible = visible;
                tscmbFontSize.Visible = visible;
                tsbtnChooseFont.Visible = visible;
                toolStripSeparator1.Visible = visible;
            }
            if ((group & RicherTextBoxToolStripGroups.BoldUnderlineItalic) != 0)
            {
                tsbtnBold.Visible = visible;
                tsbtnItalic.Visible = visible;
                tsbtnUnderline.Visible = visible;
                toolStripSeparator2.Visible = visible;
            }
            if ((group & RicherTextBoxToolStripGroups.Alignment) != 0)
            {
                tsbtnAlignLeft.Visible = visible;
                tsbtnAlignRight.Visible = visible;
                tsbtnAlignCenter.Visible = visible;
                toolStripSeparator3.Visible = visible;
            }
            if ((group & RicherTextBoxToolStripGroups.FontColor) != 0)
            {
                tsbtnFontColor.Visible = visible;
                tsbtnWordWrap.Visible = visible;
                toolStripSeparator4.Visible = visible;
            }
            if ((group & RicherTextBoxToolStripGroups.IndentationAndBullets) != 0)
            {
                tsbtnIndent.Visible = visible;
                tsbtnOutdent.Visible = visible;
                tsbtnBullets.Visible = visible;
                toolStripSeparator5.Visible = visible;
            }
            if ((group & RicherTextBoxToolStripGroups.Insert) != 0)
            {
                tsbtnInsertPicture.Visible = visible;
                toolStripSeparator7.Visible = visible;
            }
            if ((group & RicherTextBoxToolStripGroups.Zoom) != 0)
            {
              
            }
        }

        public bool IsGroupVisible(RicherTextBoxToolStripGroups group)
        {
            switch (group)
            {
               

                case RicherTextBoxToolStripGroups.FontNameAndSize:
                    return tscmbFont.Visible && tscmbFontSize.Visible && tsbtnChooseFont.Visible && toolStripSeparator1.Visible;

                case RicherTextBoxToolStripGroups.BoldUnderlineItalic:
                    return tsbtnBold.Visible && tsbtnItalic.Visible && tsbtnUnderline.Visible && toolStripSeparator2.Visible;

                case RicherTextBoxToolStripGroups.Alignment:
                    return tsbtnAlignLeft.Visible && tsbtnAlignRight.Visible && tsbtnAlignCenter.Visible && toolStripSeparator3.Visible;

                case RicherTextBoxToolStripGroups.FontColor:
                    return tsbtnFontColor.Visible && tsbtnWordWrap.Visible && toolStripSeparator4.Visible;

                case RicherTextBoxToolStripGroups.IndentationAndBullets:
                    return tsbtnIndent.Visible && tsbtnOutdent.Visible && tsbtnBullets.Visible && toolStripSeparator5.Visible;

                case RicherTextBoxToolStripGroups.Insert:
                    return tsbtnInsertPicture.Visible && toolStripSeparator7.Visible;

               

                default:
                    return false;
            }
        }
        #endregion

        #region Public methods for accessing the functionality of the RicherTextBox

        public void SetFontFamily(FontFamily family)
        {
            if (family != null)
            {
                tscmbFont.SelectedItem = family.Name;
            }
        }

        public void SetFontSize(float newSize)
        {
            tscmbFontSize.Text = newSize.ToString();
        }

        public void ToggleBold()
        {
            tsbtnBold.PerformClick();
        }

        public void ToggleItalic()
        {
            tsbtnItalic.PerformClick();
        }

        public void ToggleUnderline()
        {
            tsbtnUnderline.PerformClick();
        }

        public void SetAlign(HorizontalAlignment alignment)
        {
            switch (alignment)
            {
                case HorizontalAlignment.Center:
                    tsbtnAlignCenter.PerformClick();
                    break;

                case HorizontalAlignment.Left:
                    tsbtnAlignLeft.PerformClick();
                    break;

                case HorizontalAlignment.Right:
                    tsbtnAlignRight.PerformClick();
                    break;
            }
        }

        public void Indent()
        {
            tsbtnIndent.PerformClick();
        }

        public void Outdent()
        {
            tsbtnOutdent.PerformClick();
        }

        public void ToggleBullets()
        {
            tsbtnBullets.PerformClick();
        }

        public void ZoomIn()
        {
           
        }

        public void ZoomOut()
        {
          
        }

        public void ZoomTo(float factor)
        {
            rtbDocument.ZoomFactor = factor;
        }

        public void SetWordWrap(bool activated)
        {
            rtbDocument.WordWrap = activated;
        }
        #endregion


        #region Context menu handlers
        private void cutToolStripMenuItem_Click(object sender, EventArgs e)
        {
            rtbDocument.Cut();
        }

        private void copyToolStripMenuItem_Click(object sender, EventArgs e)
        {
            rtbDocument.Copy();
        }

        private void pasteToolStripMenuItem_Click(object sender, EventArgs e)
        {
            rtbDocument.Paste();
        }

        private void deleteToolStripMenuItem_Click(object sender, EventArgs e)
        {
            rtbDocument.Clear();
        }

        private void selectAllToolStripMenuItem_Click(object sender, EventArgs e)
        {
            rtbDocument.SelectAll();
        }

        private void undoToolStripMenuItem_Click(object sender, EventArgs e)
        {
            rtbDocument.Undo();
        }

        private void redoToolStripMenuItem_Click(object sender, EventArgs e)
        {
            rtbDocument.Redo();
        }

        private void leftToolStripMenuItem_Click(object sender, EventArgs e)
        {
            tsbtnAlignLeft.PerformClick();

            leftToolStripMenuItem.Checked = true;
            centerToolStripMenuItem.Checked = false;
            rightToolStripMenuItem.Checked = false;


        }

        private void centerToolStripMenuItem_Click(object sender, EventArgs e)
        {
            tsbtnAlignCenter.PerformClick();

            leftToolStripMenuItem.Checked = false;
            centerToolStripMenuItem.Checked = true;
            rightToolStripMenuItem.Checked = false;
        }

        private void rightToolStripMenuItem_Click(object sender, EventArgs e)
        {
            tsbtnAlignRight.PerformClick();

            leftToolStripMenuItem.Checked = false;
            centerToolStripMenuItem.Checked = false;
            rightToolStripMenuItem.Checked = true;
        }

        private void boldToolStripMenuItem_Click(object sender, EventArgs e)
        {
            tsbtnBold.PerformClick();
        }

        private void italicToolStripMenuItem_Click(object sender, EventArgs e)
        {
            tsbtnItalic.PerformClick();
        }

        private void underlineToolStripMenuItem_Click(object sender, EventArgs e)
        {
            tsbtnUnderline.PerformClick();
        }

        private void increaseToolStripMenuItem_Click(object sender, EventArgs e)
        {
            tsbtnIndent.PerformClick();
        }

        private void decreaseToolStripMenuItem_Click(object sender, EventArgs e)
        {
            tsbtnOutdent.PerformClick();
        }

        private void bulletsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            tsbtnBullets.PerformClick();
        }

        private void zoomInToolStripMenuItem_Click(object sender, EventArgs e)
        {
           
        }

        private void zoomOuToolStripMenuItem_Click(object sender, EventArgs e)
        {
           
        }

        private void insertPictureToolStripMenuItem_Click(object sender, EventArgs e)
        {
            tsbtnInsertPicture.PerformClick();
        }

        #endregion

        #region Find and Replace
        private void tsbtnFind_Click(object sender, EventArgs e)
        {
            FindForm findForm = new FindForm();
            findForm.RtbInstance = this.rtbDocument;
            findForm.InitialText = this.tstxtSearchText.Text;
            findForm.Show();
        }

        private void tsbtnReplace_Click(object sender, EventArgs e)
        {
            ReplaceForm replaceForm = new ReplaceForm();
            replaceForm.RtbInstance = this.rtbDocument;
            replaceForm.InitialText = this.tstxtSearchText.Text;
            replaceForm.Show();
        }
        #endregion

        public bool save = false;
        public string linkClicked = null;
        public string File = null;
        private void rtbDocument_KeyUp(object sender, KeyEventArgs e)
        {
            if(e.KeyData==(Keys.S|Keys.Control))
                save = true;
        }

        private void rtbDocument_TextChanged(object sender, EventArgs e)
        {

        }
       
        private void rtbDocument_LinkClicked(object sender, LinkClickedEventArgs e)
        {
            if (e.LinkText.StartsWith("https://arkospad:"))
            {
                linkClicked = e.LinkText.Replace("https://arkospad:","");
            }            
        }

        private void toolStripButton1_Click_1(object sender, EventArgs e)
        {
            AddLinkForm addLinkForm = new AddLinkForm(File);
            addLinkForm.ShowDialog();
            String selection = addLinkForm.selection;
            Clipboard.SetText("https://arkospad:" + selection);
            rtbDocument.Paste();
        }
    }
}

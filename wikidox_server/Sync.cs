using System;
using System.IO;
using System.Text;


namespace WikiDoxServer
{
    public class Sync
    {
        public static String ConvertRTFToHTML(String RTF)
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            return RtfPipe.Rtf.ToHtml(RTF);            
        }


    }
}

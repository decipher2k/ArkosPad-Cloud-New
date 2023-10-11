using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Windows.Forms;

namespace RicherTextBoxDemo
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main(string[] args)
        {
            if (args.Length > 0)
            {
                if (Uri.TryCreate(args[0], UriKind.Absolute, out var uri) &&
                    string.Equals(uri.Scheme, "arkospad", StringComparison.OrdinalIgnoreCase))
                {
                    if(Process.GetProcessesByName("ArkosPad").Count()>1)
                    {
                        Process.GetProcessesByName("ArkosPad").Where(a => a.Id != Process.GetCurrentProcess().Id).First().Kill();
                    }



                    Application.EnableVisualStyles();
                    Application.SetCompatibleTextRenderingDefault(false);
                    Application.Run(new MainForm(args.Contains(":") ? args[0].Split(':')[1] : args[0]));

                }
                else
                {
                    Application.EnableVisualStyles();
                    Application.SetCompatibleTextRenderingDefault(false);
                    Application.Run(new MainForm(args.Contains(":") ? args[0].Split(':')[1] : args[0]));

                }
            }
            else
            {
                Application.EnableVisualStyles();
                Application.SetCompatibleTextRenderingDefault(false);
                Application.Run(new MainForm());

            }

        }
    }
}

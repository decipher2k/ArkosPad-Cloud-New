using System;
using System.Diagnostics;
using System.Linq;
using System.Windows.Forms;

namespace RicherTextBoxDemo
{
    internal static class Program
    {
        private const string UriScheme = "arkospad";

        [STAThread]
        private static void Main(string[] args)
        {
            ConfigureApplication();
            
            string startupParameter = ParseStartupArguments(args);
            KillOtherInstancesIfCustomUri(args);
            
            Application.Run(new MainForm(startupParameter));
        }

        private static void ConfigureApplication()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
        }

        private static string ParseStartupArguments(string[] args)
        {
            if (args == null || args.Length == 0)
            {
                return string.Empty;
            }

            string argument = args[0];
            
            if (argument.Contains(":"))
            {
                int colonIndex = argument.IndexOf(':');
                return argument.Substring(colonIndex + 1);
            }

            return argument;
        }

        private static void KillOtherInstancesIfCustomUri(string[] args)
        {
            if (args == null || args.Length == 0)
            {
                return;
            }

            if (!IsCustomUriScheme(args[0]))
            {
                return;
            }

            var currentProcess = Process.GetCurrentProcess();
            var otherInstances = Process.GetProcessesByName("ArkosPad")
                .Where(p => p.Id != currentProcess.Id)
                .ToList();

            foreach (var instance in otherInstances)
            {
                try
                {
                    instance.Kill();
                }
                catch (Exception)
                {
                    // Process may have already exited
                }
            }
        }

        private static bool IsCustomUriScheme(string argument)
        {
            return Uri.TryCreate(argument, UriKind.Absolute, out var uri) &&
                   string.Equals(uri.Scheme, UriScheme, StringComparison.OrdinalIgnoreCase);
        }
    }
}

using System;

namespace RicherTextBoxDemo.DtO
{
    /// <summary>
    /// Data transfer object for page/content operations.
    /// </summary>
    [Serializable]
    public class PageDto
    {
        public string Session { get; set; } = string.Empty;
        public string Url { get; set; } = string.Empty;
        public string Text { get; set; } = string.Empty;
        public int Weight { get; set; } = 1;

        // Legacy property accessors for JSON serialization compatibility
        public string session
        {
            get => Session;
            set => Session = value;
        }

        public string url
        {
            get => Url;
            set => Url = value;
        }

        public string text
        {
            get => Text;
            set => Text = value;
        }

        public int weight
        {
            get => Weight;
            set => Weight = value;
        }
    }
}

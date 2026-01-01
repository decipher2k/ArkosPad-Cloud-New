using System;

namespace RicherTextBoxDemo.DtO
{
    /// <summary>
    /// Data transfer object for user authentication and permissions.
    /// </summary>
    [Serializable]
    public class UserDataDto
    {
        public string Session { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Salt { get; set; } = string.Empty;
        public bool CanEdit { get; set; }
        public bool CanUpload { get; set; }
        public bool CanCreate { get; set; }
        public bool IsAdmin { get; set; }

        // Legacy property accessors for JSON compatibility
        public string session
        {
            get => Session;
            set => Session = value;
        }

        public string username
        {
            get => Username;
            set => Username = value;
        }

        public string password
        {
            get => Password;
            set => Password = value;
        }

        public string salt
        {
            get => Salt;
            set => Salt = value;
        }

        public int canEdit
        {
            get => CanEdit ? 1 : 0;
            set => CanEdit = value != 0;
        }

        public int canUpload
        {
            get => CanUpload ? 1 : 0;
            set => CanUpload = value != 0;
        }

        public int canCreate
        {
            get => CanCreate ? 1 : 0;
            set => CanCreate = value != 0;
        }

        public int isAdmin
        {
            get => IsAdmin ? 1 : 0;
            set => IsAdmin = value != 0;
        }
    }
}

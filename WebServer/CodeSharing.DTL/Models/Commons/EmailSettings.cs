namespace CodeSharing.DTL.Models.Commons;

public class MailSettings
{
    public string Mail { get; set; } = default!;
    public string DisplayName { get; set; } = default!;
    public string Password { get; set; } = default!;
    public string Host { get; set; } = default!;
    public int Port { get; set; }
}
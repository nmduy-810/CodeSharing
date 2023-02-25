namespace CodeSharing.DTL.Models.Commons;

public class MailContent
{
    public string To { get; set; } = default!; // Mail To 
    public string Subject { get; set; } = default!; // Mail subject
    public string Body { get; set; } = default!; // Mail content
    public string UserName { get; set; } = default!;
    public string Url { get; set; } = default!;
}
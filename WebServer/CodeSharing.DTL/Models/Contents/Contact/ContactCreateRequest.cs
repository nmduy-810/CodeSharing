namespace CodeSharing.DTL.Models.Contents.Contact;

public class ContactCreateRequest
{
    public string Phone { get; set; } = default!;

    public string Email { get; set; } = default!;

    public string Location { get; set; } = default!;
}
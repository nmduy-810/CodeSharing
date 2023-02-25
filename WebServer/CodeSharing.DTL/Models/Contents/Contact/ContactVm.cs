namespace CodeSharing.DTL.Models.Contents.Contact;

public class ContactVm
{
    public int Id { get; set; }

    public string Phone { get; set; } = default!;

    public string Email { get; set; } = default!;

    public string Location { get; set; } = default!;
}
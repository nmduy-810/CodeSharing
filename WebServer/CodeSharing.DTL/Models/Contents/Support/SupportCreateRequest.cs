namespace CodeSharing.DTL.Models.Contents.Support;

public class SupportCreateRequest
{
    public string Name { get; set; } = default!;

    public string Email { get; set; } = default!;

    public string Subject { get; set; } = default!;

    public string Message { get; set; } = default!;
}
namespace CodeSharing.DTL.Models.Systems.User;

public class UserCreateRequest
{
    public string UserName { get; set; } = default!;
    public string Password { get; set; } = default!;
    public string Email { get; set; } = default!;
    public string PhoneNumber { get; set; } = default!;
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
    public DateTime Birthday { get; set; }
}
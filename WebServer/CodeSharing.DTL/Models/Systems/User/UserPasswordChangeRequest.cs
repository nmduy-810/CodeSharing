namespace CodeSharing.DTL.Models.Systems.User;

public class UserPasswordChangeRequest
{
    public string UserId { get; set; } = default!;

    public string CurrentPassword { get; set; } = default!;

    public string NewPassword { get; set; } = default!;
}
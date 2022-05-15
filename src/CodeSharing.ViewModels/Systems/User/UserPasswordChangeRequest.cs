namespace CodeSharing.ViewModels.Systems.User;

public class UserPasswordChangeRequest
{
    public string UserId { get; set; }

    public string CurrentPassword { get; set; }

    public string NewPassword { get; set; }
}
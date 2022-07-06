using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Systems.User;

namespace CodeSharing.WebPortal.ViewModels;

public class UserViewModel
{
    public Pagination<UserVm> Users { get; set; }
}
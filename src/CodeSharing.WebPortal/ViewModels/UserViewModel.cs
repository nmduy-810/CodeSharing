using CodeSharing.Core.Models.Pagination;
using CodeSharing.ViewModels.Systems.User;

namespace CodeSharing.WebPortal.ViewModels;

public class UserViewModel
{
    public Pagination<UserVm> Users { get; set; }
}
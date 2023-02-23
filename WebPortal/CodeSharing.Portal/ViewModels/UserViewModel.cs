using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Systems.User;

namespace CodeSharing.Portal.ViewModels;

public class UserViewModel
{
    public Pagination<UserVm> Users { get; set; }  = default!;
}
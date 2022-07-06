using CodeSharing.ViewModels.Contents.Category;
using CodeSharing.ViewModels.Systems.User;

namespace CodeSharing.WebPortal.ViewModels;

public class HeaderViewModel
{
    public List<CategoryVm> Categories { get; set; }
    public UserVm CurrentUser { get; set; }
}
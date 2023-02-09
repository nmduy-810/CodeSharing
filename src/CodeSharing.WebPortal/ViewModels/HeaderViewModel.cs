using CodeSharing.DTL.Models.Contents.Category;
using CodeSharing.DTL.Models.Systems.User;

namespace CodeSharing.WebPortal.ViewModels;

public class HeaderViewModel
{
    public List<CategoryVm> Categories { get; set; }
    public UserVm CurrentUser { get; set; }
}
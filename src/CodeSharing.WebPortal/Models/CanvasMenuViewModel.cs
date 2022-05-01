using CodeSharing.ViewModels.Contents.Category;
using CodeSharing.ViewModels.Systems.User;

namespace CodeSharing.WebPortal.Models;

public class CanvasMenuViewModel
{
    public List<CategoryVm> Categories { get; set; }
    public UserVm CurrentUser { get; set; }
}
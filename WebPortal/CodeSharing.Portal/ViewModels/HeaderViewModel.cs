using CodeSharing.DTL.Models.Contents.Category;
using CodeSharing.DTL.Models.Systems.User;

namespace CodeSharing.Portal.ViewModels;

public class HeaderViewModel
{
    public List<CategoryVm> Categories { get; set; }  = default!;
    
    public UserVm CurrentUser { get; set; }  = default!;
}
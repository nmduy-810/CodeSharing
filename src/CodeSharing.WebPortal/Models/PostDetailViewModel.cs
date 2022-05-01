using CodeSharing.ViewModels.Contents.Label;
using CodeSharing.ViewModels.Contents.Post;
using CodeSharing.ViewModels.Systems.User;

namespace CodeSharing.WebPortal.Models;

public class PostDetailViewModel
{
    public PostVm Post { get; set; }
    public List<LabelInPostVm> Label { get; set; }
    public UserVm CurrentUser { get; set; }
}
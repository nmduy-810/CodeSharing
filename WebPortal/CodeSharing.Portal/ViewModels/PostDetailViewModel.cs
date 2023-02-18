using CodeSharing.DTL.Models.Contents.Label;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Systems.User;

namespace CodeSharing.Portal.ViewModels;

public class PostDetailViewModel
{
    public PostVm Post { get; set; }
    public List<LabelInPostVm> Label { get; set; }
    public UserVm CurrentUser { get; set; }
}
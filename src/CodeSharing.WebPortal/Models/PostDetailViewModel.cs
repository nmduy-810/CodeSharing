using CodeSharing.ViewModels.Contents.Label;
using CodeSharing.ViewModels.Contents.Post;

namespace CodeSharing.WebPortal.Models;

public class PostDetailViewModel
{
    public PostVm Post { get; set; }
    public List<LabelInPostVm> Label { get; set; }
}
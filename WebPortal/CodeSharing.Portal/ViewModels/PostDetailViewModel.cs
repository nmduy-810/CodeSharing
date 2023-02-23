using CodeSharing.DTL.Models.Contents.Label;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Systems.User;

namespace CodeSharing.Portal.ViewModels;

public class PostDetailViewModel
{
    public PostVm Post { get; set; }  = default!;
    
    public List<LabelInPostVm> Label { get; set; }  = default!;
    
    public UserVm CurrentUser { get; set; }  = default!;
}
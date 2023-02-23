using CodeSharing.DTL.Models.Contents.Label;
using CodeSharing.DTL.Models.Contents.Post;

namespace CodeSharing.Portal.ViewModels;

public class SideBarViewModel
{
    public List<PostQuickVm> PopularPosts { get; set; }  = default!;
    
    public List<PostQuickVm> LatestPosts { get; set; }  = default!;
    
    public List<PostQuickVm> TrendingPosts { get; set; }  = default!;
    
    public List<LabelVm> PopularLabels { get; set; }  = default!;
    
    public List<PostQuickVm> ExplorerTopics { get; set; }  = default!;
}
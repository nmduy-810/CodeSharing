using CodeSharing.ViewModels.Contents.Label;
using CodeSharing.ViewModels.Contents.Post;

namespace CodeSharing.WebPortal.Models;

public class SideBarViewModel
{
    public List<PostQuickVm> PopularPosts { get; set; }
    public List<PostQuickVm> LatestPosts { get; set; }
    public List<LabelVm> PopularLabels { get; set; }
    public List<PostQuickVm> ExplorerTopics { get; set; }
}
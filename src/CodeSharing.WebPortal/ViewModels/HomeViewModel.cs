using CodeSharing.Core.Models.Pagination;
using CodeSharing.ViewModels.Contents.Post;

namespace CodeSharing.WebPortal.ViewModels;

public class HomeViewModel
{
    public Pagination<PostQuickVm> LatestPosts { get; set; }
}
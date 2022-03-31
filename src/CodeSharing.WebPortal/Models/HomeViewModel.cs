using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Post;

namespace CodeSharing.WebPortal.Models;

public class HomeViewModel
{
    public Pagination<PostQuickVm> LatestPosts { get; set; }
}
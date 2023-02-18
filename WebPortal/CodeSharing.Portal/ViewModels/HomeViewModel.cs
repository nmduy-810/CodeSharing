using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Post;

namespace CodeSharing.Portal.ViewModels;

public class HomeViewModel
{
    public Pagination<PostQuickVm> LatestPosts { get; set; }
}
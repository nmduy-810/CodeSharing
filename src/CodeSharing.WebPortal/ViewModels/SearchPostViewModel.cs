using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Post;

namespace CodeSharing.WebPortal.ViewModels;

public class SearchPostViewModel
{
    public Pagination<PostQuickVm> Data { set; get; }
    public string Keyword { set; get; }
}
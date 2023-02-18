using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Post;

namespace CodeSharing.Portal.ViewModels;

public class SearchPostViewModel
{
    public Pagination<PostQuickVm> Data { set; get; }
    public string Keyword { set; get; }
}
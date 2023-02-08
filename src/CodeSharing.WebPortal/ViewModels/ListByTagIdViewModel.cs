using CodeSharing.Core.Models.Pagination;
using CodeSharing.ViewModels.Contents.Label;
using CodeSharing.ViewModels.Contents.Post;

namespace CodeSharing.WebPortal.ViewModels;

public class ListByTagIdViewModel
{
    public Pagination<PostQuickVm> Data { get; set; }
    public LabelVm Label { get; set; }
}
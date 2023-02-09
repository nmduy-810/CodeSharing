using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Label;
using CodeSharing.DTL.Models.Contents.Post;

namespace CodeSharing.WebPortal.ViewModels;

public class ListByTagIdViewModel
{
    public Pagination<PostQuickVm> Data { get; set; }
    public LabelVm Label { get; set; }
}
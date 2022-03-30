using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Label;
using CodeSharing.ViewModels.Contents.Post;

namespace CodeSharing.WebPortal.Models;

public class ListByTagIdViewModel
{
    public Pagination<PostQuickVm> Data { get; set; }
    public LabelVm Label { get; set; }
}
using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Label;
using CodeSharing.DTL.Models.Contents.Post;

namespace CodeSharing.Portal.ViewModels;

public class ListByTagIdViewModel
{
    public Pagination<PostQuickVm> Data { get; set; }  = default!;
    
    public LabelVm Label { get; set; }  = default!;
}
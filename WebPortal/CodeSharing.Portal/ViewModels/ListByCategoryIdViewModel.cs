using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Category;
using CodeSharing.DTL.Models.Contents.Post;

namespace CodeSharing.Portal.ViewModels;

public class ListByCategoryIdViewModel
{
    public Pagination<PostQuickVm> Data { get; set; }  = default!;
    
    public CategoryVm Category { get; set; }  = default!;
}
namespace CodeSharing.DTL.Models.Contents.Category;

public class CategoryUpdateRequest
{
    public int? ParentCategoryId { get; set; }
    public string Title { get; set; } = default!;
    public string Slug { get; set; } = default!;
    public int SortOrder { get; set; }
    public bool IsParent { get; set; }
}
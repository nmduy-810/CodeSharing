namespace CodeSharing.ViewModels.Contents.Category;

public class CategoryCreateRequest
{
    public int? ParentCategoryId { get; set; }
    public string Title { get; set; }
    public string Slug { get; set; }
    public int SortOrder { get; set; }
    public bool IsParent { get; set; }
}
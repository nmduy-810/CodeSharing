namespace CodeSharing.ViewModels.Contents.Category;

public class CategoryVm
{
    public int Id { get; set; }
    public int? ParentCategoryId { get; set; }
    public string Title { get; set; }
    public string Slug { get; set; }
    public int SortOrder { get; set; }

}
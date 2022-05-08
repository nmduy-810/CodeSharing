namespace CodeSharing.ViewModels.Contents.Post;

public class PostQuickVm
{
    public int Id { get; set; }
    public int CategoryId { get; set; }
    public string CategoryTitle { get; set; }
    public string CategorySlug { get; set; }
    public string FullName { get; set; }
    public string CoverImage { get; set; }
    public string Title { get; set; }
    public string Summary { get; set; }
    public string Content { get; set; }
    public string Slug { get; set; }
    
    public int? ViewCount { get; set; } = 0;
    public int? TotalPost { get; set; }
    public DateTime CreateDate { get; set; }
    public int? NumberOfVotes { get; set; } = 0;
    public int? NumberOfComments { get; set; } = 0;
}
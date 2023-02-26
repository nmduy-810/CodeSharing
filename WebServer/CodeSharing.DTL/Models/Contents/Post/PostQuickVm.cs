namespace CodeSharing.DTL.Models.Contents.Post;

public class PostQuickVm
{
    public int Id { get; set; }
    public int CategoryId { get; set; }
    public string CategoryTitle { get; set; } = default!;
    public string CategorySlug { get; set; } = default!;
    public string FullName { get; set; } = default!;
    public string CoverImage { get; set; } = default!;
    public string Title { get; set; } = default!;
    public string Summary { get; set; } = default!;
    public string Content { get; set; } = default!;
    public string Slug { get; set; } = default!;
    public int? ViewCount { get; set; } = 0;
    public int? TotalPost { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime? LastModifiedDate { get; set; }
    public int? NumberOfVotes { get; set; } = 0;
    public int? NumberOfComments { get; set; } = 0;
}
namespace CodeSharing.ViewModels.Contents.Post;

public class PostVm
{
    public int Id { get; set; }
    public int CategoryId { get; set; }
    public string CategoryTitle { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public string Slug { get; set; }
    public string Note { get; set; }
    public string[]? Labels { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime? LastModifiedDate { get; set; }
    public int? NumberOfComments { get; set; }
    public int? NumberOfVotes { get; set; }
    public int? NumberOfReports { get; set; }
}
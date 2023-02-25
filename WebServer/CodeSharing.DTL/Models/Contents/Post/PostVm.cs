using CodeSharing.DTL.Models.Contents.Attachment;

namespace CodeSharing.DTL.Models.Contents.Post;

public class PostVm
{
    public int Id { get; set; }
    public int CategoryId { get; set; }
    public string CategoryTitle { get; set; } = default!;
    public string CategorySlug { get; set; } = default!;
    public string FullName { get; set; } = default!;
    public string Title { get; set; } = default!;
    public string Summary { get; set; } = default!;
    public string Content { get; set; } = default!;
    public string Slug { get; set; } = default!;
    public string Note { get; set; } = default!;
    public string OwnerUserId { get; set; } = default!;
    public string[]? Labels { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime? LastModifiedDate { get; set; }
    public int? NumberOfComments { get; set; }
    public int? NumberOfVotes { get; set; }
    public int? ViewCount { get; set; }
    public int? NumberOfReports { get; set; }
    public List<AttachmentVm> Attachments { set; get; } = default!;
    public string CoverImage { get; set; } = default!;
}
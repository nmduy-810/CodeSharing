namespace CodeSharing.DTL.Models.Contents.Comment;

public class CommentVm
{
    public int Id { get; set; }

    public string Content { get; set; } = default!;

    public int PostId { get; set; }

    public string PostTitle { get; set; } = default!;

    public string PostSlug { get; set; } = default!;

    public string OwnerUserId { get; set; } = default!;

    public string OwnerName { get; set; } = default!;

    public DateTime CreateDate { get; set; }

    public DateTime? LastModifiedDate { get; set; }

    public int? ReplyId { get; set; }

    public List<CommentVm> Children { get; set; } = new();
}
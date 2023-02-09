namespace CodeSharing.DTL.Models.Contents.Comment;

public class CommentCreateRequest
{
    public string Content { get; set; } = default!;
    public int PostId { get; set; }
    public int? ReplyId { get; set; }
}
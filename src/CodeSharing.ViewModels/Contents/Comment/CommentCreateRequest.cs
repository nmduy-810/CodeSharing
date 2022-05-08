namespace CodeSharing.ViewModels.Contents.Comment;

public class CommentCreateRequest
{
    public string Content { get; set; }
    public int PostId { get; set; }
    public int? ReplyId { get; set; }
}
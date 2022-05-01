namespace CodeSharing.ViewModels.Contents.Comment;

public class CommentCreateResponse
{
    public int Id { get; set; }
    public string Content { get; set; }
    public int PostId { get; set; }
    public int? ReplyId { get; set; }
}
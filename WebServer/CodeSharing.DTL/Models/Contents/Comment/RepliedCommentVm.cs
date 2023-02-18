namespace CodeSharing.DTL.Models.Contents.Comment;

public class RepliedCommentVm
{
    public string RepliedName { get; set; } = default!;

    public string CommentContent { get; set; } = default!;

    public string PostTitle { get; set; } = default!;

    public int PostId { get; set; }

    public string PostSlug { get; set; } = default!;
}
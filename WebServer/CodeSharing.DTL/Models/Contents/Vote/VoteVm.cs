namespace CodeSharing.DTL.Models.Contents.Vote;

public class VoteVm
{
    public int PostId { get; set; }

    public string UserId { get; set; } = default!;

    public DateTime CreateDate { get; set; }

    public DateTime? LastModifiedDate { get; set; }
}
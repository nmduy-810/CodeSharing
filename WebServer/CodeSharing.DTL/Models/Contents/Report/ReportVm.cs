namespace CodeSharing.DTL.Models.Contents.Report;

public class ReportVm
{
    public int Id { get; set; }

    public int? PostId { get; set; }

    public string Content { get; set; } = default!;

    public string ReportUserId { get; set; } = default!;

    public string ReportUserName { get; set; } = default!;

    public DateTime CreateDate { get; set; }

    public DateTime? LastModifiedDate { get; set; }

    public bool IsProcessed { get; set; }

    public string Type { get; set; } = default!;
}
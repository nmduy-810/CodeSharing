namespace CodeSharing.DTL.Models.Contents.Report;

public class ReportCreateRequest
{
    public int? PostId { get; set; }

    public string Content { get; set; } = default!;
}
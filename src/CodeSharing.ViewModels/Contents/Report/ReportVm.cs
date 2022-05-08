namespace CodeSharing.ViewModels.Contents.Report;

public class ReportVm
{
    public int Id { get; set; }
    
    public int? PostId { get; set; }
    
    public string Content { get; set; }

    public string ReportUserId { get; set; }

    public string ReportUserName { get; set; }

    public DateTime CreateDate { get; set; }
    
    public DateTime? LastModifiedDate { get; set; }

    public bool IsProcessed { get; set; }

    public string Type { get; set; }
}
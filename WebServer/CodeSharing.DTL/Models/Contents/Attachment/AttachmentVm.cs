namespace CodeSharing.DTL.Models.Contents.Attachment;

public class AttachmentVm
{
    public int Id { get; set; }
    public string FileName { get; set; } = default!;
    public string FilePath { get; set; } = default!;
    public string FileType { get; set; } = default!;
    public long FileSize { get; set; }
    public int PostId { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime? LastModifiedDate { get; set; }
}
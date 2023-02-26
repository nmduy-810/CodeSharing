using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.DTL.Interfaces;

namespace CodeSharing.DTL.EFCoreEntities;

[Table(CodeSharingDbConfig.Tables.CdsAttachment.TableName)]
public class CdsAttachment : EntityBase<int>, IDateTracking
{
    [Required] [MaxLength(200)] public string FileName { get; set; } = default!;

    [Required] [MaxLength(200)] public string FilePath { get; set; } = default!;

    [Required]
    [MaxLength(4)]
    [Column(TypeName = "varchar(4)")]
    public string FileType { get; set; } = default!;

    [Required] public long FileSize { get; set; }

    public int PostId { get; set; }

    public DateTime CreateDate { get; set; }
    public DateTime? LastModifiedDate { get; set; }
}
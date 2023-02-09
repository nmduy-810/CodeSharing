using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.DTL.Interfaces;

namespace CodeSharing.DTL.EFCoreEntities;

[Table("Reports")]
public class Report : EntityBase<int>, IDateTracking
{
    public int PostId { get; set; }

    [MaxLength(500)] public string Content { get; set; } = default!;

    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string ReportUserId { get; set; } = default!;

    public bool IsProcessed { get; set; }

    public DateTime CreateDate { get; set; }

    public DateTime? LastModifiedDate { get; set; }
}
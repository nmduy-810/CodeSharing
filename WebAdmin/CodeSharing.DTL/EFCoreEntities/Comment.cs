using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.DTL.Interfaces;

namespace CodeSharing.DTL.EFCoreEntities;

[Table("Comments")]
public class Comment : EntityBase<int>, IDateTracking
{
    [MaxLength(500)] 
    [Required] 
    public string Content { get; set; } = default!;

    [Required]
    [Range(1, double.PositiveInfinity)]
    public int PostId { get; set; } 

    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string OwnerUserId { get; set; } = default!;

    public int? ReplyId { get; set; }

    public DateTime CreateDate { get; set; }

    public DateTime? LastModifiedDate { get; set; }
}
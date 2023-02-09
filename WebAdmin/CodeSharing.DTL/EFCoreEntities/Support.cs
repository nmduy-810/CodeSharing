using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.DTL.Interfaces;

namespace CodeSharing.DTL.EFCoreEntities;

[Table("Supports")]
public class Support : EntityBase<int>, IDateTracking
{
    [Required]
    [MaxLength(100)]
    [Column(TypeName = "nvarchar(100)")]
    public string Name { get; set; } = default!;

    [Required] public string Email { get; set; } = default!;

    [Required]
    [MaxLength(200)]
    [Column(TypeName = "nvarchar(200)")]
    public string Subject { get; set; } = default!;

    [Required]
    [MaxLength(500)]
    [Column(TypeName = "nvarchar(500)")]
    public string Message { get; set; } = default!;

    public DateTime CreateDate { get; set; }
    public DateTime? LastModifiedDate { get; set; }
}
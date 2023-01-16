using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.Server.Datas.Interfaces;

namespace CodeSharing.Server.Datas.Entities;

[Table("Supports")]
public class Support : IDateTracking
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

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
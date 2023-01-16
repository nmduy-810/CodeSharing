using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.Server.Datas.Interfaces;

namespace CodeSharing.Server.Datas.Entities;

[Table("ActivityLogs")]
public class ActivityLog : IDateTracking
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string Action { get; set; } = default!;

    [Required]
    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string EntityName { get; set; } = default!;

    [Required]
    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string EntityId { get; set; } = default!;

    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string UserId { get; set; } = default!;

    [MaxLength(500)] public string Content { get; set; } = default!;

    public DateTime CreateDate { get; set; }

    public DateTime? LastModifiedDate { get; set; }
}
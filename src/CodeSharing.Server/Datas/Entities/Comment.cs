using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.Server.Datas.Interfaces;

namespace CodeSharing.Server.Datas.Entities;

[Table("Comments")]
public class Comment : IDateTracking
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [MaxLength(500)] [Required] public string Content { get; set; }

    [Required]
    [Range(1, double.PositiveInfinity)]
    public int PostId { get; set; }

    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string OwnerUserId { get; set; }

    public int? ReplyId { get; set; }

    public DateTime CreateDate { get; set; }

    public DateTime? LastModifiedDate { get; set; }
}
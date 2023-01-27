using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.Server.Datas.Interfaces;

namespace CodeSharing.Server.Datas.Entities;

[Table("Votes")]
public class Vote : IDateTracking
{
    public int PostId { get; set; }

    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string UserId { get; set; } = default!;

    public DateTime CreateDate { get; set; }

    public DateTime? LastModifiedDate { get; set; }
}
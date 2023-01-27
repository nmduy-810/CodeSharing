using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodeSharing.Server.Datas.Entities;

[Table("Labels")]
public class Label : EntityBase<string>
{
    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public new string Id { get; set; } = default!;

    [MaxLength(50)] 
    public string Name { get; set; } = default!;
}
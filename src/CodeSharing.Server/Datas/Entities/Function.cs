using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodeSharing.Server.Datas.Entities;

[Table("Functions")]
public class Function
{
    [Key]
    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string Id { get; set; }

    [Required] [MaxLength(200)] public string Name { get; set; }

    [Required] [MaxLength(200)] public string Url { get; set; }

    [Required] public int SortOrder { get; set; }

    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string? ParentId { get; set; }

    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string? Icon { get; set; }
}
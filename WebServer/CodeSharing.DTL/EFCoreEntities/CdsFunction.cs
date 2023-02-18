using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodeSharing.DTL.EFCoreEntities;

[Table(CodeSharingDbConfig.Tables.CdsFunction.TableName)]
public class CdsFunction : EntityBase<string>
{
    [Key]
    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public new string Id { get; set; } = default!;

    [Required] [MaxLength(200)] 
    public string Name { get; set; } = default!;

    [Required] [MaxLength(200)] 
    public string Url { get; set; } = default!;

    [Required] public int SortOrder { get; set; }

    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string? ParentId { get; set; }

    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string? Icon { get; set; }
}
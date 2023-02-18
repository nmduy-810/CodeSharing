using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodeSharing.DTL.EFCoreEntities;

[Table(CodeSharingDbConfig.Tables.CdsLabel.TableName)]
public class CdsLabel : EntityBase<string>
{
    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public new string Id { get; set; } = default!;

    [MaxLength(50)] 
    public string Name { get; set; } = default!;
}
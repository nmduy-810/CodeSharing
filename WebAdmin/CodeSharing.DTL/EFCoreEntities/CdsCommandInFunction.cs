using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodeSharing.DTL.EFCoreEntities;

[Table(CodeSharingDbConfig.Tables.CdsCommandInFunction.TableName)]
public class CdsCommandInFunction
{
    [Required]
    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string CommandId { get; set; } = default!;

    [Required]
    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string FunctionId { get; set; } = default!;
}
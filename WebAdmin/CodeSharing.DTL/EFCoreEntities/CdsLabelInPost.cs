using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodeSharing.DTL.EFCoreEntities;

[Table(CodeSharingDbConfig.Tables.CdsLabelInPost.TableName)]
public class CdsLabelInPost
{
    public int PostId { get; set; }

    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string LabelId { get; set; } = default!;
}
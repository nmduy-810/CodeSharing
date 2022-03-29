using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodeSharing.Server.Datas.Entities;

[Table("LabelInPosts")]
public class LabelInPost
{
    public int PostId { get; set; }
    
    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string LabelId { get; set; }
}
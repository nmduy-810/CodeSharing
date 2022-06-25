using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.Server.Datas.Interfaces;

namespace CodeSharing.Server.Datas.Entities;

[Table("Attachments")]
public class Attachment : IDateTracking
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required] [MaxLength(200)] public string FileName { get; set; }

    [Required] [MaxLength(200)] public string FilePath { get; set; }

    [Required]
    [MaxLength(4)]
    [Column(TypeName = "varchar(4)")]
    public string FileType { get; set; }

    [Required] public long FileSize { get; set; }

    public int PostId { get; set; }

    public DateTime CreateDate { get; set; }
    public DateTime? LastModifiedDate { get; set; }
}
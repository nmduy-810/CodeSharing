using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.DTL.Interfaces;

namespace CodeSharing.DTL.EFCoreEntities;

[Table(CodeSharingDbConfig.Tables.CdsCoverImage.TableName)]
public class CdsCoverImage : EntityBase<int>, IDateTracking
{
    [Required]
    [Column(TypeName = "nvarchar(1000)")]
    public string ImageUrl { get; set; } = default!;
    
    public DateTime CreateDate { get; set; }
    
    public DateTime? LastModifiedDate { get; set; }
}
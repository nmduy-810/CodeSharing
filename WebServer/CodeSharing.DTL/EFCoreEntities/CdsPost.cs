using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.DTL.Interfaces;

namespace CodeSharing.DTL.EFCoreEntities;

[Table(CodeSharingDbConfig.Tables.CdsPost.TableName)]
public class CdsPost : IDateTracking
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public int Id { get; set; }

    [Required]
    [Range(1, double.PositiveInfinity)]
    public int CategoryId { get; set; }

    [Required] [MaxLength(500)] 
    public string Title { get; set; } = default!;

    [Required] [MaxLength(500)] 
    public string Summary { get; set; } = default!;

    [Required] 
    public string Content { get; set; } = default!;

    [Required]
    [MaxLength(500)]
    [Column(TypeName = "varchar(500)")]
    public string Slug { get; set; } = default!;

    public string Note { get; set; } = default!;

    [Required]
    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string OwnerUserId { get; set; } = default!;

    public string Labels { get; set; } = default!;

    public int? NumberOfComments { get; set; }

    public int? NumberOfVotes { get; set; }

    public int? NumberOfReports { get; set; }

    public int? ViewCount { get; set; }

    public DateTime CreateDate { get; set; }

    public DateTime? LastModifiedDate { get; set; }

    public CdsCoverImage CdsCoverImage { get; set; } = default!;
    
    public int? CoverImageId { get; set; }
}
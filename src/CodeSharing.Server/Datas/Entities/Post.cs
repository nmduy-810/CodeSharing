using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.Server.Datas.Interfaces;

namespace CodeSharing.Server.Datas.Entities;

[Table("Posts")]
public class Post : IDateTracking
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public int Id { get; set; }

    [Required]
    [Range(1, double.PositiveInfinity)]
    public int CategoryId { get; set; }

    public string CoverImage { get; set; } = default!;

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
}
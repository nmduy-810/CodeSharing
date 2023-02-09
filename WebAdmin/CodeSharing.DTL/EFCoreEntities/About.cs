using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.DTL.Interfaces;

namespace CodeSharing.DTL.EFCoreEntities;

[Table("Abouts")]
public class About : EntityBase<int>, IDateTracking
{
    public string Image { get; set; } = default!;
    public string Description { get; set; } = default!;
    public DateTime CreateDate { get; set; }
    public DateTime? LastModifiedDate { get; set; }
}
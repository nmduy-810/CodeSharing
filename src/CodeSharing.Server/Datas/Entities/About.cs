using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.Server.Datas.Interfaces;

namespace CodeSharing.Server.Datas.Entities;

[Table("Abouts")]
public class About : EntityBase<int>, IDateTracking
{
    public string Image { get; set; } = default!;
    public string Description { get; set; } = default!;
    public DateTime CreateDate { get; set; }
    public DateTime? LastModifiedDate { get; set; }
}
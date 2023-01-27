using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.Server.Datas.Interfaces;

namespace CodeSharing.Server.Datas.Entities;

[Table("Categories")]
public class Category : EntityBase<int>, IDateTracking 
{
    public int? ParentCategoryId { get; set; }

    [Required]
    [StringLength(100, MinimumLength = 3)]
    public string Title { get; set; } = default!;

    [Required]
    [StringLength(100, MinimumLength = 3)]
    [RegularExpression(@"^[a-z0-9-]*$", ErrorMessage = "Use only characters [a-z0-9-]")]
    public string Slug { get; set; } = default!;
    public int SortOrder { get; set; }
    public bool IsParent { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime? LastModifiedDate { get; set; }
}
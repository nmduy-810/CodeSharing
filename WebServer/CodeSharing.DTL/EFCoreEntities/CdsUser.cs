using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.DTL.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace CodeSharing.DTL.EFCoreEntities;

public class CdsUser : IdentityUser, IDateTracking
{
    [Required]
    [MaxLength(50)]
    [Column(TypeName = "nvarchar(50)")]
    public string FirstName { get; set; } = default!;

    [Required]
    [MaxLength(50)]
    [Column(TypeName = "nvarchar(50)")]
    public string LastName { get; set; } = default!;

    [Required] public DateTime Birthday { get; set; }

    public int? NumberOfPosts { get; set; }

    public int? NumberOfVotes { get; set; }

    public int? NumberOfReports { get; set; }

    public DateTime CreateDate { get; set; }

    public DateTime? LastModifiedDate { get; set; }
}
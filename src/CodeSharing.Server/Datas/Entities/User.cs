using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.Server.Datas.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace CodeSharing.Server.Datas.Entities;

public class User : IdentityUser, IDateTracking
{
    [Required]
    [MaxLength(50)]
    [Column(TypeName = "nvarchar(50)")]
    public string FirstName { get; set; }

    [Required]
    [MaxLength(50)]
    [Column(TypeName = "nvarchar(50)")]
    public string LastName { get; set; }

    [Required] public DateTime Birthday { get; set; }

    public int? NumberOfPosts { get; set; }

    public int? NumberOfVotes { get; set; }

    public int? NumberOfReports { get; set; }

    public DateTime CreateDate { get; set; }

    public DateTime? LastModifiedDate { get; set; }
}
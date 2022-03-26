using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace CodeSharing.Server.Datas.Entities;

public class User : IdentityUser
{
    [Required]
    [MaxLength(50)]
    public string FirstName { get; set; }

    [Required]
    [MaxLength(50)]
    public string LastName { get; set; }

    [Required]
    public DateTime Birthday { get; set; }
}
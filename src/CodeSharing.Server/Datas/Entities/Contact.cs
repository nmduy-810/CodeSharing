using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodeSharing.Server.Datas.Entities;

[Table("Contacts")]
public class Contact
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [MaxLength(12)] 
    public string Phone { get; set; } = default!;

    public string Email { get; set; } = default!;

    [MaxLength(500)] 
    public string Location { get; set; } = default!;
}
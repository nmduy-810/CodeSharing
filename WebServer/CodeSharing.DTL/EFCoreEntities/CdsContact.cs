using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodeSharing.DTL.EFCoreEntities;

[Table(CodeSharingDbConfig.Tables.CdsContact.TableName)]
public class CdsContact : EntityBase<int>
{
    [MaxLength(12)] 
    public string Phone { get; set; } = default!;

    public string Email { get; set; } = default!;

    [MaxLength(500)] 
    public string Location { get; set; } = default!;
}
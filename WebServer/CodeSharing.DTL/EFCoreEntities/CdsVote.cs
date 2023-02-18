﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CodeSharing.DTL.Interfaces;

namespace CodeSharing.DTL.EFCoreEntities;

[Table(CodeSharingDbConfig.Tables.CdsVote.TableName)]
public class CdsVote : IDateTracking
{
    public int PostId { get; set; }

    [MaxLength(50)]
    [Column(TypeName = "varchar(50)")]
    public string UserId { get; set; } = default!;

    public DateTime CreateDate { get; set; }

    public DateTime? LastModifiedDate { get; set; }
}
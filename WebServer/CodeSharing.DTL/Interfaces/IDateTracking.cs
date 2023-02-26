namespace CodeSharing.DTL.Interfaces;

public interface IDateTracking
{
    DateTime CreateDate { get; set; }
    DateTime? LastModifiedDate { get; set; }
}
namespace CodeSharing.Server.Datas.Interfaces;

public interface IDateTracking
{
    DateTime CreateDate { get; set; }
    DateTime? LastModifiedDate { get; set; }
}
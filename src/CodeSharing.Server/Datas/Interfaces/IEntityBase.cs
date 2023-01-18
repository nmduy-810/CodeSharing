namespace CodeSharing.Server.Datas.Interfaces;

public interface IEntityBase<T>
{
    T Id { get; set; }
}
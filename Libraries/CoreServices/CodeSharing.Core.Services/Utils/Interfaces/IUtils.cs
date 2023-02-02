namespace CodeSharing.Core.Services.Utils.Interfaces;

public interface IUtils
{
    IList<T> Transform<TU, T>(IList<TU> entity);
    T Transform<TU, T>(TU entity);
}
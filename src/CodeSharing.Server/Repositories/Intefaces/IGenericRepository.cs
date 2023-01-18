using System.Linq.Expressions;
using CodeSharing.Server.Datas.Entities;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IGenericRepository<T, TK> where T : EntityBase<TK>
{
    IQueryable<T> FindAll(bool trackChanges = false);

    IQueryable<T> FindAll(bool trackChanges = false, params Expression<Func<T, object[]>>[] includeProperties);

    IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression, bool trackChanges = false);

    IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression, bool trackChanges = false, params Expression<Func<T, object[]>>[] includeProperties);

    Task<T?> GetByIdAsync(TK id);

    Task<T?> GetByIdAsync(TK id, params Expression<Func<T, object[]>>[] includeProperties);

    Task<TK> CreateAsync(T entity);

    Task<IList<TK>> CreateListAsync(IEnumerable<T> entities);

    Task UpdateAsync(T entity);

    Task UpdateListAsync(IEnumerable<T> entities);

    Task DeleteAsync(T entity);

    Task DeleteListAsync(IEnumerable<T> entities);

    Task<int> SaveChangesAsync();
}
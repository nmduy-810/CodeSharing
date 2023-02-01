using System.Linq.Expressions;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface ICoreRepository<TEntity>
{
    IQueryable<TEntity> FindAll(bool trackChanges = false);
    IQueryable<TEntity> FindAll(bool trackChanges = false, params Expression<Func<TEntity, object[]>>[] includeProperties);
    IQueryable<TEntity> FindByCondition(Expression<Func<TEntity, bool>> expression, bool trackChanges = false);
    IQueryable<TEntity> FindByCondition(Expression<Func<TEntity, bool>> expression, bool trackChanges = false, params Expression<Func<TEntity, object[]>>[] includeProperties);
    Task<TEntity?> FindByIdAsync(object id);
    Task<TEntity> CreateAsync(TEntity entity);
    TEntity UpdateAsync(TEntity entity);
    TEntity DeleteAsync(TEntity entity);
    Task<int> SaveChangesAsync();
}
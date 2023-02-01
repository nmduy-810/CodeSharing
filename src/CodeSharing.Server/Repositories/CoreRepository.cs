using System.Linq.Expressions;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class CoreRepository<TEntity> : ICoreRepository<TEntity> where TEntity : class
{
    private readonly ApplicationDbContext _context;

    protected CoreRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public IQueryable<TEntity> FindAll(bool trackChanges = false)
    {
        return !trackChanges 
            ? _context.Set<TEntity>().AsNoTracking() 
            : _context.Set<TEntity>();
    }

    public IQueryable<TEntity> FindAll(bool trackChanges = false, params Expression<Func<TEntity, object[]>>[] includeProperties)
    {
        var items = FindAll(trackChanges);
        items = includeProperties.Aggregate(items, (current, includeProperty) => current.Include(includeProperty));
        return items;
    }

    public IQueryable<TEntity> FindByCondition(Expression<Func<TEntity, bool>> expression, bool trackChanges = false)
    {
        return !trackChanges
            ? _context.Set<TEntity>().Where(expression).AsNoTracking()
            : _context.Set<TEntity>().Where(expression);
    }

    public IQueryable<TEntity> FindByCondition(Expression<Func<TEntity, bool>> expression, bool trackChanges = false, params Expression<Func<TEntity, object[]>>[] includeProperties)
    {
        var items = FindByCondition(expression, trackChanges);
        items = includeProperties.Aggregate(items, (current, includeProperty) => current.Include(includeProperty));
        return items;
    }

    public async Task<TEntity?> FindByIdAsync(object id)
    {
        var entity = await _context.Set<TEntity>().FindAsync(id);
        return entity;
    }

    public async Task<TEntity> CreateAsync(TEntity entity)
    {
        await _context.Set<TEntity>().AddAsync(entity);
        return entity;
    }

    public TEntity UpdateAsync(TEntity entity)
    { 
        _context.Set<TEntity>().Update(entity);
        return entity;
    }
    
    public TEntity DeleteAsync(TEntity entity)
    {
        _context.Set<TEntity>().Remove(entity);
        return entity;
    }

    public async Task<int> SaveChangesAsync()
    { 
        return await _context.SaveChangesAsync();
    }
}
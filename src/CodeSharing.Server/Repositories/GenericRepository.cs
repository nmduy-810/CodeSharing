using System.Linq.Expressions;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class GenericRepository<T, TK> : IGenericRepository<T, TK> where T : EntityBase<TK>
{
    private readonly ApplicationDbContext _context;

    protected GenericRepository(ApplicationDbContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }
    
    public IQueryable<T> FindAll(bool trackChanges = false)
    {
        return !trackChanges 
            ? _context.Set<T>().AsNoTracking() 
            : _context.Set<T>();
    }

    public IQueryable<T> FindAll(bool trackChanges = false, params Expression<Func<T, object[]>>[] includeProperties)
    {
        var items = FindAll(trackChanges);
        items = includeProperties.Aggregate(items, (current, includeProperty) => current.Include(includeProperty));
        return items;
    }

    public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression, bool trackChanges = false)
    {
        return !trackChanges
            ? _context.Set<T>().Where(expression).AsNoTracking()
            : _context.Set<T>().Where(expression);
    }

    public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression, bool trackChanges = false, params Expression<Func<T, object[]>>[] includeProperties)
    {
        var items = FindByCondition(expression, trackChanges);
        items = includeProperties.Aggregate(items, (current, includeProperty) => current.Include(includeProperty));
        return items;
    }

    public async Task<T?> GetByIdAsync(TK id)
    {
        return await FindByCondition(x => x.Id != null && x.Id.Equals(id)).FirstOrDefaultAsync();
    }

    public async Task<T?> GetByIdAsync(TK id, params Expression<Func<T, object[]>>[] includeProperties)
    {
        return await FindByCondition(x => x.Id != null && x.Id.Equals(id), trackChanges: false, includeProperties)
            .FirstOrDefaultAsync();
    }

    public async Task<TK> CreateAsync(T entity)
    {
        await _context.Set<T>().AddAsync(entity);
        return entity.Id;
    }

    public async Task<IList<TK>> CreateListAsync(IEnumerable<T> entities)
    {
        var entityBases = entities.ToList();
        await _context.Set<T>().AddRangeAsync(entityBases);
        return entityBases.Select(x => x.Id).ToList();
    }

    public Task UpdateAsync(T entity)
    {
        if (_context.Entry(entity).State == EntityState.Unchanged)
            return Task.CompletedTask;

        var exist = _context.Set<T>().Find(entity.Id);
        _context.Entry(exist).CurrentValues.SetValues(entity);
        return Task.CompletedTask;
    }

    public Task UpdateListAsync(IEnumerable<T> entities)
    {
        return _context.Set<T>().AddRangeAsync(entities);
    }

    public Task DeleteAsync(T entity)
    {
        _context.Set<T>().Remove(entity);
        return Task.CompletedTask;
    }

    public Task DeleteListAsync(IEnumerable<T> entities)
    {
        _context.Set<T>().RemoveRange(entities);
        return Task.CompletedTask;
    }

    public Task<int> SaveChangesAsync()
    {
        return _context.SaveChangesAsync();
    }
}
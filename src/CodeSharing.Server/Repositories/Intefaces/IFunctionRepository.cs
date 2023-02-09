using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.DTL.Models.Systems.Function;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IFunctionRepository : IGenericRepository<ApplicationDbContext>
{
    Task<List<FunctionVm>> GetFunctions();

    Task<FunctionVm?> GetById(string id);

    Task<List<FunctionVm>> GetFunctionsByParentId(string functionId);
}
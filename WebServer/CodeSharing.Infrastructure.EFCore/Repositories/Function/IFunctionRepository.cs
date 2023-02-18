using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;

namespace CodeSharing.Infrastructure.EFCore.Repositories.Function;

public interface IFunctionRepository : ICoreRepository<CdsFunction>
{
    Task<List<CdsFunction>> GetFunctions();

    Task<CdsFunction?> GetById(string id);

    Task<List<CdsFunction>> GetFunctionsByParentId(string functionId);
}
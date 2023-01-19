using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;

namespace CodeSharing.Server.Repositories;

public class FunctionRepository : GenericRepository<Function, string>, IFunctionRepository
{
    public FunctionRepository(ApplicationDbContext context) : base(context)
    {
    }
}
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;

namespace CodeSharing.Server.Repositories;

public class LabelRepository : GenericRepository<Label, string>, ILabelRepository
{
    public LabelRepository(ApplicationDbContext context) : base(context)
    {
    }
}
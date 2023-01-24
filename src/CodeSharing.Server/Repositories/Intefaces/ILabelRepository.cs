using CodeSharing.Server.Datas.Provider;
using CodeSharing.ViewModels.Contents.Label;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface ILabelRepository : IGenericRepository<ApplicationDbContext>
{
    Task<List<LabelVm>> GetLabels();

    Task<LabelVm?> GetById(string id);

    Task<List<LabelInPostVm>?> GetLabelsByPostId(int postId);

    Task<List<LabelVm>> GetPopularLabels(int take);
}
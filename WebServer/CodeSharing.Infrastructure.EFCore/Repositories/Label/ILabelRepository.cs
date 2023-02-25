using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.DTL.Models.Contents.Label;
using CodeSharing.Infrastructure.EFCore.Repositories.Generic;

namespace CodeSharing.Infrastructure.EFCore.Repositories.Label;

public interface ILabelRepository : IGenericRepository<ApplicationDbContext>
{
    Task<List<LabelVm>> GetLabels();

    Task<LabelVm?> GetById(string id);

    Task<List<LabelInPostVm>?> GetLabelsByPostId(int postId);

    Task<List<LabelVm>> GetPopularLabels(int take);
}
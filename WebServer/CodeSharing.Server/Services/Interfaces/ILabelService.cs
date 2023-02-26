using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Contents.Label;

namespace CodeSharing.Server.Services.Interfaces;

public interface ILabelService 
{
    Task<Result<List<LabelVm>>> GetLabels();

    Task<Result<LabelVm?>> GetById(string id);

    Task<Result<List<LabelInPostVm>?>> GetLabelsByPostId(int postId);

    Task<Result<List<LabelVm>>> GetPopularLabels(int take);
}
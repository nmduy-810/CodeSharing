using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Contents.Label;

namespace CodeSharing.Portal.Interfaces;

public interface ILabelApiClient
{
    Task<Result<List<LabelVm>>> GetPopularLabels(int take);
    
    Task<Result<LabelVm>> GetById(string labelId);
    
    Task<Result<List<LabelInPostVm>>> GetLabelsByPostId(int id);
}
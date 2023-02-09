using CodeSharing.DTL.Models.Contents.Label;

namespace CodeSharing.WebPortal.Interfaces;

public interface ILabelApiClient
{
    Task<List<LabelVm>> GetPopularLabels(int take);
    Task<LabelVm> GetById(string labelId);
    Task<List<LabelInPostVm>> GetLabelsByPostId(int id);
}
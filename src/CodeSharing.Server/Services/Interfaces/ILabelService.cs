using CodeSharing.ViewModels.Contents.Label;

namespace CodeSharing.Server.Services.Interfaces;

public interface ILabelService 
{
    Task<List<LabelVm>> GetLabels();

    Task<LabelVm?> GetById(string id);
}
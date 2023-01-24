using CodeSharing.Server.Datas.Entities;
using CodeSharing.ViewModels.Contents.Label;
using CodeSharing.ViewModels.Contents.Post;

namespace CodeSharing.Server.Services.Interfaces;

public interface ILabelService 
{
    Task<List<LabelVm>> GetLabels();

    Task<LabelVm?> GetById(string id);
}
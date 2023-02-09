using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Contents.Label;

namespace CodeSharing.Server.Services;

public class LabelService : ILabelService
{
    private readonly ILabelRepository _repository;
    
    public LabelService(ILabelRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<LabelVm>> GetLabels()
    {
        var result = await _repository.GetLabels();
        return result;
    }

    public async Task<LabelVm?> GetById(string id)
    {
        var result = await _repository.GetById(id);
        return result;
    }

    public async Task<List<LabelInPostVm>?> GetLabelsByPostId(int postId)
    {
        var result = await _repository.GetLabelsByPostId(postId);
        return result;
    }

    public async Task<List<LabelVm>> GetPopularLabels(int take)
    {
        var result = await _repository.GetPopularLabels(take);
        return result;
    }
}
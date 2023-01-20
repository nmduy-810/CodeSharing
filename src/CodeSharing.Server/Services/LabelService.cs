using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Contents.Label;
using Microsoft.EntityFrameworkCore;

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
        var items = await _repository.FindAll().Select(x => new LabelVm
        {
            Id = x.Id,
            Name = x.Name
        }).ToListAsync();
        
        return items;
    }

    public async Task<LabelVm?> GetById(string id)
    {
        var label = await _repository.GetByIdAsync(id);
        if (label == null)
            return null;

        var labelVm = new LabelVm
        {
            Id = label.Id,
            Name = label.Name
        };

        return labelVm;
    }
}
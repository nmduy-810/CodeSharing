using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Contents.Support;

namespace CodeSharing.Server.Services;

public class SupportService : ISupportService
{
    private readonly ISupportRepository _repository;

    public SupportService(ISupportRepository repository)
    {
        _repository = repository;
    }
    public async Task<bool> PostSupport(SupportCreateRequest request)
    {
        var support = new Support
        {
            Name = request.Name,
            Email = request.Email,
            Message = request.Message,
            Subject = request.Subject
        };

        return await _repository.PostSupport(support);
    }
}
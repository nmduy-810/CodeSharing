using System.Net.Http.Headers;
using CodeSharing.Server.AdditionalServices.Interfaces;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.About;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Services;

public class AboutService : IAboutService
{
    private readonly IAboutRepository _repository;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IStorageService _storageService;
    public AboutService(IAboutRepository repository, IHttpContextAccessor httpContextAccessor, IStorageService storageService)
    {
        _repository = repository;
        _httpContextAccessor = httpContextAccessor;
        _storageService = storageService;
    }

    public async Task<List<AboutVm>> GetAbouts()
    {
        var items = await _repository.FindAll().Select(x => new AboutVm
        {
            Id = x.Id,
            Image = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.Image,
            Description = x.Description
        }).ToListAsync();

        return items;
    }

    public async Task<AboutVm?> GetById(int id)
    {
        var about = await _repository.GetByIdAsync(id);
        if (about == null)
            return null;
            
        var item = new AboutVm
        {
            Id = about.Id,
            Image = FunctionBase.GetBaseUrl(_httpContextAccessor) + about.Image,
            Description = about.Description
        };

        return item;
    }

    public async Task<bool> PostAbout(AboutCreateRequest request)
    {
        var item = new About
        {
            Description = request.Description
        };
        
        if (request.Image != null)
        {
            var coverImagePath = await SaveFile(request.Image);
            item.Image = coverImagePath;
        }

        return await _repository.PostAbout(item);
    }

    public async Task<bool> PutAbout(int id, AboutCreateRequest request)
    {
        var about = await _repository.GetByIdAsync(id);
        if (about == null)
            return false;
            
        // Process Image
        if (request.Image != null)
        {
            var coverImagePath = await SaveFile(request.Image);
            about.Image = coverImagePath;
        }

        about.Description = request.Description;
        
        return await _repository.PutAbout(about);
    }

    public async Task<bool> DeleteAbout(int id)
    {
        var about = await _repository.GetByIdAsync(id);
        if (about == null)
            return false;
        
        return await _repository.DeleteAbout(about);
    }
    
    private async Task<string> SaveFile(IFormFile file)
    {
        var originalFileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName?.Trim('"');
        var fileName = FunctionBase.GenerateFileName("Image") + Path.GetExtension(originalFileName);
        await _storageService.SaveFileAsync(file.OpenReadStream(), fileName);
        var filePath = _storageService.GetFileUrl(fileName);
        return filePath;
    }
}
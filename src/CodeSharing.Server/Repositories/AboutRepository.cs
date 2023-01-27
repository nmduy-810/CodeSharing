using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.About;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class AboutRepository : GenericRepository<ApplicationDbContext>, IAboutRepository
{
    private readonly ILogger<AboutRepository> _logger;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IUploadRepository _uploadRepository;

    public AboutRepository(ApplicationDbContext context, ILogger<AboutRepository> logger, IHttpContextAccessor httpContextAccessor, IUploadRepository uploadRepository) : base(context)
    {
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
        _httpContextAccessor = httpContextAccessor;
        _uploadRepository = uploadRepository;
    }

    public async Task<List<AboutVm>> GetAbouts()
    {
        var items = await _context.Abouts.Select(x => new AboutVm
        {
            Id = x.Id,
            Image = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.Image,
            Description = x.Description
        }).ToListAsync();

        return items;
    }

    public async Task<AboutVm?> GetById(int id)
    {
        var about = await _context.Abouts.FindAsync(id);
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
        try
        {
            var item = new About
            {
                Description = request.Description
            };
        
            if (request.Image != null)
            {
                var coverImagePath = await _uploadRepository.SaveFile(request.Image);
                item.Image = coverImagePath;
            }
            
            await _context.Abouts.AddAsync(item);
            var result = await _context.SaveChangesAsync();
            return result > 0;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }

    public async Task<bool> PutAbout(int id, AboutCreateRequest request)
    {
        try
        {
            var about = await _context.Abouts.FindAsync(id);
            if (about == null)
                return false;
            
            // Process Image
            if (request.Image != null)
            {
                var coverImagePath = await _uploadRepository.SaveFile(request.Image);
                about.Image = coverImagePath;
            }

            about.Description = request.Description;

            _context.Abouts.Update(about);
            var result = await _context.SaveChangesAsync();
            return result > 0;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }

    public async Task<bool> DeleteAbout(int id)
    {
        try
        {
            var about = await _context.Abouts.FindAsync(id);
            if (about == null)
                return false;

            _context.Abouts.Remove(about);
            var result = await _context.SaveChangesAsync();
            return result > 0;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }
}
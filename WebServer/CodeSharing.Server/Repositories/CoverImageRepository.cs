using CodeSharing.Core.Helpers;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.DTL.Models.Contents.CoverImage;
using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Infrastructure.EFCore.Repositories.Generic;
using CodeSharing.Server.Repositories.Intefaces;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class CoverImageRepository : GenericRepository<ApplicationDbContext>, ICoverImageRepository
{
    private readonly ILogger<CoverImageRepository> _logger;
    private readonly IHttpContextAccessor _httpContextAccessor;
    
    public CoverImageRepository(ApplicationDbContext context, ILogger<CoverImageRepository> logger, IHttpContextAccessor httpContextAccessor) : base(context)
    {
        _logger = logger;
        _httpContextAccessor = httpContextAccessor;
    }

    public async Task<List<CoverImageVm>> GetCoverImages()
    {
        try
        {
            return await _context.CdsCoverImages.Select(x => new CoverImageVm()
            {
                Id = x.Id,
                ImageUrl = HttpHelper.GetBaseUrl(_httpContextAccessor) + x.ImageUrl,
                CreateDate = x.CreateDate
            }).ToListAsync();
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<CoverImageVm>();
        }
    }

    public async Task<CoverImageVm?> GetCoverImageById(int id)
    {
        try
        {
            var coverImages = await _context.CdsCoverImages.FirstOrDefaultAsync(x => x.Id == id);
            if (coverImages == null)
                return null;

            var coverImageVm = new CoverImageVm()
            {
                Id = coverImages.Id, 
                ImageUrl = HttpHelper.GetBaseUrl(_httpContextAccessor) + coverImages.ImageUrl,
                CreateDate = coverImages.CreateDate
            };
            
            return coverImageVm;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new CoverImageVm();
        }
    }

    public async Task<int> PostCoverImage(CdsCoverImage request)
    {
        try
        {
            var coverImage = new CdsCoverImage() { ImageUrl = request.ImageUrl, CreateDate = DateTime.UtcNow };
            _context.CdsCoverImages.Add(coverImage);
            await _context.SaveChangesAsync(); // Save changes to the database
            return coverImage.Id; // Return the ID of the inserted record
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return 0;
        }
    }
}
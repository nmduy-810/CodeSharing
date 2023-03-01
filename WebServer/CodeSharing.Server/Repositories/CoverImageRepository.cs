using CodeSharing.Core.Helpers;
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
}
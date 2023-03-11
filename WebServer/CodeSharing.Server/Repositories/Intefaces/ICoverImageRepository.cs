using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.DTL.Models.Contents.CoverImage;
using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Infrastructure.EFCore.Repositories.Generic;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface ICoverImageRepository : IGenericRepository<ApplicationDbContext>
{
    Task<List<CoverImageVm>> GetCoverImages();

    Task<CoverImageVm?> GetCoverImageById(int id);

    Task<int> PostCoverImage(CdsCoverImage request);
}
using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Contents.CoverImage;

namespace CodeSharing.Portal.Interfaces;

public interface ICoverImagesApiClient
{
    Task<Result<List<CoverImageVm>>> GetCoverImages();

    Task<Result<CoverImageVm>> GetCoverImageById(int id);
}
using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Contents.CoverImage;

namespace CodeSharing.Server.Services.Interfaces;

public interface ICoverImageService
{
    Task<Result<List<CoverImageVm>>> GetCoverImages();
}
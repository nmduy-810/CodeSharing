using AutoMapper;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.DTL.Models.Contents.About;
using CodeSharing.DTL.Models.Contents.Category;

namespace CodeSharing.DTL;

public class EfCoreMapperProfile : Profile
{
    public EfCoreMapperProfile()
    {
        #region About

        CreateMap<CdsAbout, AboutVm>().ReverseMap();

        #endregion

        #region Category

        CreateMap<CdsCategory, CategoryVm>().ReverseMap();

        #endregion
    }
}
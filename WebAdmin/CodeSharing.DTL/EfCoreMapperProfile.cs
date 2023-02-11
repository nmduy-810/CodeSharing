using AutoMapper;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.DTL.Models.Contents.About;
using CodeSharing.DTL.Models.Contents.Category;
using CodeSharing.DTL.Models.Contents.Contact;
using CodeSharing.DTL.Models.Systems.Command;
using CodeSharing.DTL.Models.Systems.Function;

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

        #region Command

        CreateMap<CdsCommand, CommandVm>().ReverseMap();

        #endregion

        #region Contact

        CreateMap<CdsContact, ContactVm>().ReverseMap();

        #endregion

        #region Function

        CreateMap<CdsFunction, FunctionVm>().ReverseMap();

        #endregion
    }
}
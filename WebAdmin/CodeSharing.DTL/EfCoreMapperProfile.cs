using AutoMapper;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.DTL.Models.Contents.About;

namespace CodeSharing.DTL;

public class EfCoreMapperProfile : Profile
{
    public EfCoreMapperProfile()
    {
        CreateMap<About, AboutVm>().ReverseMap();
    }
}
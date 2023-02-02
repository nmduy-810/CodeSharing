using AutoMapper;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.ViewModels.Contents.About;

namespace CodeSharing.Server;

public class EfCoreMapperProfile : Profile
{
    public EfCoreMapperProfile()
    {
        CreateMap<About, AboutVm>().ReverseMap();
    }
}
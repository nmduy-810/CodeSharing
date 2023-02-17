using AutoMapper;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.DTL.Models.Commons;
using CodeSharing.DTL.Models.Contents.About;
using CodeSharing.DTL.Models.Contents.Category;
using CodeSharing.DTL.Models.Contents.Contact;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Contents.Vote;
using CodeSharing.DTL.Models.Systems.Command;
using CodeSharing.DTL.Models.Systems.Function;
using CodeSharing.DTL.Models.Systems.Role;
using Microsoft.AspNetCore.Identity;

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

        #region Support

        CreateMap<CdsSupport, SupportVm>().ReverseMap();

        #endregion

        #region Role

        CreateMap<IdentityRole, RoleVm>().ReverseMap();

        #endregion

        #region Post
        
        CreateMap<CdsPost, PostQuickVm>().ReverseMap();

        #endregion

        #region Vote

        CreateMap<CdsVote, VoteVm>().ReverseMap();
        
        #endregion
    }
}
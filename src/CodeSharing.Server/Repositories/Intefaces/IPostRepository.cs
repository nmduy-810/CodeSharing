using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Post;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IPostRepository : IGenericRepository<ApplicationDbContext>
{
    Task<List<PostQuickVm>> GetPosts();

    Task<List<PostQuickVm>> GetLatestPosts(int take);

    Task<List<PostQuickVm>> GetPopularPosts(int take);

    Task<List<PostQuickVm>> GetTrendingPosts(int take);

    Task<PostVm?> GetById(int id);
    
    Task<Pagination<PostQuickVm>> GetPostsByCategoryId(int? categoryId, int pageIndex, int pageSize);

    Task<Pagination<PostQuickVm>> GetPostsByTagId(string tagId, int pageIndex, int pageSize);

    Task<List<PostQuickVm>> GetTotalPostInCategory();

    Task<Pagination<PostQuickVm>> GetPostsPaging(string filter, int? categoryId, int pageIndex, int pageSize);

    Task<Pagination<PostQuickVm>> GetPostsPaging(int pageIndex, int pageSize);

    Task<bool> Post(Post post);

    Task ProcessLabel(PostCreateRequest request, Post post);
    
    Task<bool> Put(int id, PostCreateRequest request);

    Task<bool> Delete(int id);

    Task<bool> UpdateViewCount(int id);
}
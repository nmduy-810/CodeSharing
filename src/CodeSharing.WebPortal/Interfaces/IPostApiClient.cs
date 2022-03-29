using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Post;

namespace CodeSharing.WebPortal.Interfaces;

public interface IPostApiClient
{
    Task<List<PostQuickVm>> GetLatestPosts(int take);
    Task<List<PostQuickVm>> GetPopularPosts(int take);
    Task<PostVm> GetDetailsPost(int id);
    Task<Pagination<PostQuickVm>> GetPostsByCategoryId(int categoryId, int pageIndex, int pageSize);
}
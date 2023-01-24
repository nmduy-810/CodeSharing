using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Post;
using CodeSharing.ViewModels.Contents.Vote;

namespace CodeSharing.Server.Services.Interfaces;

public interface IPostService
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

    Task<bool> Post(PostCreateRequest request, string userId);
    
    Task<bool> Put(int id, PostCreateRequest request);

    Task<bool> Delete(int id);

    Task<bool> UpdateViewCount(int id);

    Task< List<VoteVm>> GetVotes(int postId);

    Task<int> PostVote(int postId, string userId);

    Task<bool> DeleteVote(int postId, string userId);
}
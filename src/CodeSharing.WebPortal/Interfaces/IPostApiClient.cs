using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Comment;
using CodeSharing.ViewModels.Contents.Post;

namespace CodeSharing.WebPortal.Interfaces;

public interface IPostApiClient
{
    Task<List<PostQuickVm>> GetPopularPosts(int take);
    Task<PostVm> GetDetailsPost(int id);
    Task<Pagination<PostQuickVm>> GetPostsByCategoryId(int categoryId, int pageIndex, int pageSize);
    Task<Pagination<PostQuickVm>> GetPostsByTagId(string tagId, int pageIndex, int pageSize);
    Task<List<PostQuickVm>> GetTotalPostInCategory();
    Task<Pagination<PostQuickVm>> SearchPosts(string keyword, int pageIndex, int pageSize);
    Task<Pagination<PostQuickVm>> GetLatestPostsPaging(int pageIndex, int pageSize);
    Task<List<CommentVm>> GetRecentComments(int take);
    Task<List<CommentVm>> GetCommentsTree(int postId);
    Task<CommentVm> PostComment(CommentCreateRequest request);
}
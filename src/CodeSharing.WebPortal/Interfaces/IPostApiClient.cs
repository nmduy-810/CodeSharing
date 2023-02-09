using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Comment;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Contents.Report;
using CodeSharing.DTL.Models.Contents.Vote;

namespace CodeSharing.WebPortal.Interfaces;

public interface IPostApiClient
{
    Task<List<PostQuickVm>> GetPopularPosts(int take);
    Task<List<PostQuickVm>> GetLatestPosts(int take);
    Task<List<PostQuickVm>> GetTrendingPosts(int take);
    Task<PostVm> GetDetailsPost(int id);
    Task<Pagination<PostQuickVm>> GetPostsByCategoryId(int categoryId, int pageIndex, int pageSize);
    Task<Pagination<PostQuickVm>> GetPostsByTagId(string tagId, int pageIndex, int pageSize);
    Task<List<PostQuickVm>> GetTotalPostInCategory();
    Task<Pagination<PostQuickVm>> SearchPosts(string keyword, int pageIndex, int pageSize);
    Task<Pagination<PostQuickVm>> GetLatestPostsPaging(int pageIndex, int pageSize);
    Task<List<CommentVm>> GetRecentComments(int take);
    Task<List<CommentVm>> GetCommentsTree(int postId);
    Task<CommentVm> PostComment(CommentCreateRequest request);
    Task<int> PostVote(VoteCreateRequest request);
    Task<bool> UpdateViewCount(int id);
    Task<ReportVm> PostReport(ReportCreateRequest request);
    Task<bool> PostPost(PostCreateRequest request);
    Task<bool> PutPost(int id, PostCreateRequest request);
    Task<bool> DeletePost(int id);
}
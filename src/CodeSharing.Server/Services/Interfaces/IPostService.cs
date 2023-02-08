using CodeSharing.Core.Models.Pagination;
using CodeSharing.ViewModels.Contents.Comment;
using CodeSharing.ViewModels.Contents.Post;
using CodeSharing.ViewModels.Contents.Report;
using CodeSharing.ViewModels.Contents.Vote;

namespace CodeSharing.Server.Services.Interfaces;

public interface IPostService
{
    #region Post

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

    #endregion Post
    
    #region Vote

    Task< List<VoteVm>> GetVotes(int postId);

    Task<int> PostVote(int postId, string userId);

    Task<bool> DeleteVote(int postId, string userId);

    #endregion Vote

    #region Report

    Task<bool> PostReport(int postId, ReportCreateRequest request, string userId);

    #endregion Report

    #region Comment

    Task<List<CommentVm>> GetRecentComments(int take);

    Task< IEnumerable<CommentVm>> GetCommentTreeByPostId(int postId, int pageIndex, int pageSize);

    Task< List<CommentVm>> GetCommentsByPostId(int postId);

    Task<CommentVm?> GetCommentDetail(int commentId);

     Task<List<CommentVm>> GetComments();

    Task<bool> PostComment(int postId, CommentCreateRequest request, string userId);

    Task<bool> PutComment(int commentId, CommentCreateRequest request, string userId);

    Task<bool> DeleteComment(int postId, int commentId);

    #endregion Comment
}
using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Comment;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Contents.Report;
using CodeSharing.DTL.Models.Contents.Vote;

namespace CodeSharing.Server.Services.Interfaces;

public interface IPostService
{
    #region Post

    Task<Result<List<PostQuickVm>>> GetPosts();

    Task<Result<List<PostQuickVm>>> GetLatestPosts(int take);

    Task<Result<List<PostQuickVm>>> GetPopularPosts(int take);

    Task<Result<List<PostQuickVm>>> GetTrendingPosts(int take);

    Task<Result<PostVm?>> GetById(int id);

    Task<Result<Pagination<PostQuickVm>>> GetPostsByCategoryId(int? categoryId, int pageIndex, int pageSize);

    Task<Result<Pagination<PostQuickVm>>> GetPostsByTagId(string tagId, int pageIndex, int pageSize);

    Task<Result<List<PostQuickVm>>> GetTotalPostInCategory();

    Task<Result<Pagination<PostQuickVm>>> GetPostsPaging(string filter, int? categoryId, int pageIndex, int pageSize);

    Task<Result<Pagination<PostQuickVm>>> GetPostsPaging(int pageIndex, int pageSize);

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
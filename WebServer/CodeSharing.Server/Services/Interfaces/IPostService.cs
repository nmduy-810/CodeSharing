using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.EFCoreEntities;
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

    Task<Result<int>> Post(PostCreateRequest request, string userId);
    
    Task<Result<int>> Put(int id, PostCreateRequest request);

    Task<Result<PostQuickVm?>>Delete(int id);

    Task<Result<bool>> UpdateViewCount(int postId);

    #endregion Post
    
    #region Vote

    Task<Result<List<VoteVm>>> GetVotes(int postId);

    Task<Result<int>> PostVote(int postId, string userId);

    Task<Result<VoteVm?>> DeleteVote(int postId, string userId);

    #endregion Vote

    #region Report

    Task<Result<ReportVm?>>  PostReport(int postId, ReportCreateRequest request, string userId);

    #endregion Report

    #region Comment

    Task<Result<List<CommentVm>>> GetRecentComments(int take);

    Task<Result<IEnumerable<CommentVm>>> GetCommentTreeByPostId(int postId, int pageIndex, int pageSize);

    Task<Result<List<CommentVm>>> GetCommentsByPostId(int postId);

    Task<Result<CommentVm?>> GetCommentDetail(int commentId);

     Task<Result<List<CommentVm>>> GetComments();

    Task<Result<CommentVm?>> PostComment(int postId, CommentCreateRequest request, string userId);

    Task<Result<CommentVm?>> PutComment(int commentId, CommentCreateRequest request, string userId);

    Task<Result<CommentVm?>> DeleteComment(int postId, int commentId);

    #endregion Comment
}
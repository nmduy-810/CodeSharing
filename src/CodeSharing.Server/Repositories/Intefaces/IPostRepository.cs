using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Comment;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Contents.Report;
using CodeSharing.DTL.Models.Contents.Vote;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IPostRepository : IGenericRepository<ApplicationDbContext>
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

    Task<CdsPost?> Post(CdsPost post);
    
    Task<CdsPost?> Put(int id, PostCreateRequest request);

    Task<CdsPost?> Delete(int id);

    Task<CdsPost?> UpdateViewCount(int id);

    #endregion Post

    #region Vote

    Task<List<VoteVm>> GetVotes(int postId);

    Task<int> PostVote(int postId, string userId);

    Task<CdsVote?> DeleteVote(int postId, string userId);

    #endregion Vote

    #region Report

    Task<CdsReport?> PostReport(int postId, ReportCreateRequest request, string userId); 

    #endregion Report
    
    #region Comment

    Task<List<CommentVm>> GetRecentComments(int take);

    Task<IEnumerable<CommentVm>> GetCommentTreeByPostId(int postId, int pageIndex, int pageSize);

    Task<List<CommentVm>> GetCommentsByPostId(int postId);

    Task<CommentVm?> GetCommentDetail(int commentId);

    Task<List<CommentVm>> GetComments();

    Task<CdsComment?> PostComment(int postId, CommentCreateRequest request, string userId);

    Task<CdsComment?> PutComment(int commentId, CommentCreateRequest request, string userId);

    Task<CdsComment?> DeleteComment(int postId, int commentId);

    #endregion Comment
    
    Task ProcessLabel(PostCreateRequest request, CdsPost post);
}
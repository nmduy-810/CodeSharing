using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace CodeSharing.DTL.Models.Contents.Post;

public class PostCreateRequest
{
    public int? Id { get; set; }
    
    [Required(ErrorMessage = "Danh mục không được để trống")]
    public int CategoryId { get; set; }
    
    public IFormFile? CoverImage { get; set; }
    public string? PreviewCoverImage { get; set; }
    
    [Required(ErrorMessage="Tiêu đề không được để trống")]
    public string Title { get; set; } = default!;
    
    
    [Required(ErrorMessage = "Tóm tắt bài viết không được để trống")]
    public string Summary { get; set; } = default!;
    
    
    [Required(ErrorMessage = "Nội dung không được để trống")]
    public string Content { get; set; } = default!;
    
    public string? Slug { get; set; }
    
    [Required(ErrorMessage = "Ghi chú không được để trống")]
    public string Note { get; set; } = default!;

    [Required(ErrorMessage = "Nhãn không được để trống")]
    public string[] Labels { get; set; } = Array.Empty<string>();
    
    public string? PreviewLabel { get; set; }
    
    public int CoverImageId { get; set; }
}
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace CodeSharing.ViewModels.Contents.Post;

public class PostCreateRequest
{
    public int? Id { get; set; }
    
    [Required(ErrorMessage = "Danh mục không được để trống")]
    public int CategoryId { get; set; }
    
    [Required(ErrorMessage = "Hình ảnh không được để trống")]
    public IFormFile? CoverImage { get; set; }
    public string? PreviewCoverImage { get; set; }
    
    [Required(ErrorMessage="Tiêu đề không được để trống")]
    public string Title { get; set; }
    
    [Required(ErrorMessage = "Tóm tắt bài viết không được để trống")]
    public string Summary { get; set; }
    
    [Required(ErrorMessage = "Nội dung không được để trống")]
    public string Content { get; set; }
    public string? Slug { get; set; }
    
    [Required(ErrorMessage = "Ghi chú không được để trống")]
    public string Note { get; set; }
    
    [Required(ErrorMessage = "Nhãn không được để trống")]
    public string[] Labels { get; set; } = Array.Empty<string>();
    public string? PreviewLabel { get; set; }
}
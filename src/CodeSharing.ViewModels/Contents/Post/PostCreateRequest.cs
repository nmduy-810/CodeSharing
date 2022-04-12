using Microsoft.AspNetCore.Http;

namespace CodeSharing.ViewModels.Contents.Post;

public class PostCreateRequest
{
    public int? Id { get; set; }
    public int CategoryId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public string Slug { get; set; }
    public string[] Labels { get; set; }
    public List<IFormFile> Attachments { get; set; }
}
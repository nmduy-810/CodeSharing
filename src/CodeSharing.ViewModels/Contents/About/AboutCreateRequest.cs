using Microsoft.AspNetCore.Http;

namespace CodeSharing.ViewModels.Contents.About;

public class AboutCreateRequest
{
    public IFormFile? Image { get; set; }
    public string Description { get; set; }
}
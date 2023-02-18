using System.ComponentModel.DataAnnotations;

namespace CodeSharing.DTL.Models.Commons;

public class SupportVm
{
    [Required(ErrorMessage = "Bạn chưa nhập họ tên nè")]
    public string Name { get; set; } = default!;
    
    [Required(ErrorMessage = "Bạn chưa nhập email nè")]
    public string Email { get; set; } = default!;
    
    [Required(ErrorMessage = "Tiêu đề giúp mình có thể hỗ trợ bạn nhanh hơn á")]
    public string Subject { get; set; } = default!;
    
    [Required(ErrorMessage = "Đừng quên nhập nội dung để mình còn hỗ trợ bạn nhé")]
    public string Message { get; set; } = default!;
}
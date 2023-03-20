using System.ComponentModel.DataAnnotations;

namespace CodeSharing.DTL.Models.Commons;

public class SupportVm
{
    [Required(ErrorMessage = "Bạn chưa nhập họ tên nè")]
    public string Name { get; set; } = default!;
    
    [Required(ErrorMessage = "Bạn chưa nhập email nè")]
    [EmailAddress]
    public string Email { get; set; } = default!;
    
    [Required(ErrorMessage = "Bạn chưa nhập tiêu đề thì phải")]
    public string Subject { get; set; } = default!;
    
    [Required(ErrorMessage = "Đừng quên nhập nội dung để mình còn hỗ trợ hoặc trao đổi bạn nhé")]
    public string Message { get; set; } = default!;
}
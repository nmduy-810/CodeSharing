namespace CodeSharing.ViewModels.Commons;

public class Message {
    public string Title {set; get;} = "Thông báo";      // Tiêu đề của Box hiện thị
    public string Htmlcontent {set; get;} = "";         // Nội dung HTML hiện thị
    public string Urlredirect {set; get;} = "/";        // Url chuyển hướng đến
    public int Secondwait {set; get;} = 3;              // Sau secondwait giây thì chuyển
}
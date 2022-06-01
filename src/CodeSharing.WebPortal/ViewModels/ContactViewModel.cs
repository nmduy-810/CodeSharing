using CodeSharing.ViewModels.Contents.Contact;
using CodeSharing.ViewModels.Systems.User;

namespace CodeSharing.WebPortal.ViewModels;

public class ContactViewModel
{
    public ContactVm Contact { get; set; }
    public UserVm CurrentUser { get; set; }
}
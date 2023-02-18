using CodeSharing.DTL.Models.Commons;
using CodeSharing.DTL.Models.Contents.Contact;
using CodeSharing.DTL.Models.Systems.User;

namespace CodeSharing.Portal.ViewModels;

public class ContactViewModel
{
    public ContactVm? Contact { get; set; }
    public UserVm? CurrentUser { get; set; }
    public SupportVm Support { get; set; }
}
using CodeSharing.ViewModels.Commons;
using CodeSharing.ViewModels.Contents.Support;
using CodeSharing.WebPortal.Attribute;
using CodeSharing.WebPortal.Extensions;
using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CodeSharing.WebPortal.Controllers;

public class ContactController : Controller
{
    private readonly IContactApiClient _contactApiClient;
    private readonly IUserApiClient _userApiClient;

    public ContactController(IContactApiClient contactApiClient, IUserApiClient userApiClient)
    {
        _contactApiClient = contactApiClient;
        _userApiClient = userApiClient;
    }

    [HttpGet]
    public async Task<IActionResult> Index()
    {
        var contact = await _contactApiClient.GetById(1);
        var items = new ContactViewModel
        {
            Contact = contact
        };

        var user = User;
        if (user?.Identity != null && user.Identity.IsAuthenticated)
            items.CurrentUser = await _userApiClient.GetById(user.GetUserId());

        return View(items);
    }

    [HttpPost]
    [ServiceFilter(typeof(ValidateReCaptchaAttribute))]
    public async Task<IActionResult> Index([FromForm] ContactViewModel request)
    {
        if (ModelState.IsValid)
        {
            var supportCreateRequest = new SupportCreateRequest()
            {
                Email = request.Support.Email,
                Message = request.Support.Message,
                Name = request.Support.Name,
                Subject = request.Support.Subject
            };
        
            await _contactApiClient.PostSupport(supportCreateRequest);

            return ViewComponent("MessagePage", new Message
            {
                Title = "GỬI HỖ TRỢ",
                Htmlcontent =
                    "Thông tin góp ý của bạn đã được gửi thành công. Code Sharing sẽ sớm phản hồi qua email trong thời gian sớm nhất!",
                Secondwait = 5,
                Urlredirect = "/"
            });
        }
        
        var errors = ModelState.Select(x => x.Value.Errors)
            .Where(y=>y.Count>0)
            .ToList();

        var contact = await _contactApiClient.GetById(1);
        var items = new ContactViewModel
        {
            Contact = contact
        };

        var user = User;
        if (user?.Identity != null && user.Identity.IsAuthenticated)
            items.CurrentUser = await _userApiClient.GetById(user.GetUserId());

        return View(items);
    }
}
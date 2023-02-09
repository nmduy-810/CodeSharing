// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

#nullable disable

using System.ComponentModel.DataAnnotations;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using CodeSharing.DTL.EFCoreEntities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;

namespace CodeSharing.Server.Areas.Identity.Pages.Account;

[AllowAnonymous]
public class ExternalLoginModel : PageModel
{
    private readonly IEmailSender _emailSender;
    private readonly IUserEmailStore<User> _emailStore;
    private readonly ILogger<ExternalLoginModel> _logger;
    private readonly SignInManager<User> _signInManager;
    private readonly UserManager<User> _userManager;
    private readonly IUserStore<User> _userStore;

    public ExternalLoginModel(
        SignInManager<User> signInManager,
        UserManager<User> userManager,
        IUserStore<User> userStore,
        ILogger<ExternalLoginModel> logger,
        IEmailSender emailSender)
    {
        _signInManager = signInManager;
        _userManager = userManager;
        _userStore = userStore;
        _emailStore = GetEmailStore();
        _logger = logger;
        _emailSender = emailSender;
    }

    /// <summary>
    ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
    ///     directly from your code. This API may change or be removed in future releases.
    /// </summary>
    [BindProperty]
    public InputModel Input { get; set; }

    /// <summary>
    ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
    ///     directly from your code. This API may change or be removed in future releases.
    /// </summary>
    public string ProviderDisplayName { get; set; }

    /// <summary>
    ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
    ///     directly from your code. This API may change or be removed in future releases.
    /// </summary>
    public string ReturnUrl { get; set; }

    /// <summary>
    ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
    ///     directly from your code. This API may change or be removed in future releases.
    /// </summary>
    [TempData]
    public string ErrorMessage { get; set; }

    public IActionResult OnGet()
    {
        return RedirectToPage("./Login");
    }

    // Post request login by external login
    // Provider = Google, Facebook, Twitter
    public async Task<IActionResult> OnPost(string provider, string returnUrl = null)
    {
        // Check provider service request is exists
        var listProvider = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();

        var providerProcess = listProvider.Find(m => m.Name == provider);
        if (providerProcess == null) return NotFound("Service not valid" + provider);

        // Request a redirect to the external login provider.
        // redirectUrl - là Url sẽ chuyển hướng đến - sau khi CallbackPath (/dang-nhap-tu-google) thi hành xong
        // nó bằng identity/account/externallogin?handler=Callback
        // tức là gọi OnGetCallbackAsync
        var redirectUrl = Url.Page("./ExternalLogin", "Callback", new { returnUrl });

        // Config
        var properties = _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);

        // Chuyển hướng đến dịch vụ ngoài (Googe, Facebook)
        return new ChallengeResult(provider, properties);
    }

    public async Task<IActionResult> OnGetCallbackAsync(string returnUrl = null, string remoteError = null)
    {
        returnUrl = returnUrl ?? Url.Content("~/");
        if (remoteError != null)
        {
            ErrorMessage = $"Lỗi provider: {remoteError}";
            return RedirectToPage("./Login", new { ReturnUrl = returnUrl });
        }

        // Lấy thông tin do dịch vụ ngoài chuyển đến
        var info = await _signInManager.GetExternalLoginInfoAsync();
        if (info == null)
        {
            ErrorMessage = "Lỗi thông tin từ dịch vụ đăng nhập.";
            return RedirectToPage("./Login", new { ReturnUrl = returnUrl });
        }

        // Đăng nhập bằng thông tin LoginProvider, ProviderKey từ info cung cấp bởi dịch vụ ngoài
        // User nào có 2 thông tin này sẽ được đăng nhập - thông tin này lưu tại bảng UserLogins của Database
        // Trường LoginProvider và ProviderKey ---> tương ứng UserId 
        var result = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey,
            false, true);

        if (result.Succeeded)
        {
            // User đăng nhập thành công vào hệ thống theo thông tin info
            _logger.LogInformation("{Name} logged in with {LoginProvider} provider.", info.Principal.Identity.Name,
                info.LoginProvider);
            return LocalRedirect(returnUrl);
        }

        if (result.IsLockedOut)
            // Bị tạm khóa
            return RedirectToPage("./Lockout");

        var userExisted = await _userManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);
        if (userExisted != null)
            // Đã có Acount, đã liên kết với tài khoản ngoài - nhưng không đăng nhập được
            // có thể do chưa kích hoạt email
            return RedirectToPage("./RegisterConfirmation", new { userExisted.Email });

        // Chưa có Account liên kết với tài khoản ngoài
        // Hiện thị form để thực hiện bước tiếp theo ở OnPostConfirmationAsync
        ReturnUrl = returnUrl;
        ProviderDisplayName = info.ProviderDisplayName;
        if (info.Principal.HasClaim(c => c.Type == ClaimTypes.Email))
            // Có thông tin về email từ info, lấy email này hiện thị ở Form
            Input = new InputModel
            {
                Email = info.Principal.FindFirstValue(ClaimTypes.Email)
            };

        return Page();
    }

    public async Task<IActionResult> OnPostConfirmationAsync(string returnUrl = null)
    {
        returnUrl = returnUrl ?? Url.Content("~/");
        // Lấy lại Info
        var info = await _signInManager.GetExternalLoginInfoAsync();
        if (info == null)
        {
            ErrorMessage = "Không có thông tin tài khoản ngoài.";
            return RedirectToPage("./Login", new { ReturnUrl = returnUrl });
        }

        if (ModelState.IsValid)
        {
            string externalMail = null;
            if (info.Principal.HasClaim(c => c.Type == ClaimTypes.Email))
                externalMail = info.Principal.FindFirstValue(ClaimTypes.Email);

            var userWithexternalMail =
                externalMail != null ? await _userManager.FindByEmailAsync(externalMail) : null;

            // Xử lý khi có thông tin về email từ info, đồng thời có user với email đó
            // Trường hợp này sẽ thực hiện liên kết tài khoản ngoài + xác thực email luôn     
            if (userWithexternalMail != null && Input.Email == externalMail)
            {
                // xác nhận email luôn nếu chưa xác nhận
                if (!userWithexternalMail.EmailConfirmed)
                {
                    var codeactive = await _userManager.GenerateEmailConfirmationTokenAsync(userWithexternalMail);
                    await _userManager.ConfirmEmailAsync(userWithexternalMail, codeactive);
                }

                // Thực hiện liên kết info và user
                var resultAdd = await _userManager.AddLoginAsync(userWithexternalMail, info);
                if (resultAdd.Succeeded)
                {
                    // Thực hiện login    
                    await _signInManager.SignInAsync(userWithexternalMail, false);
                    return LocalRedirect(returnUrl);
                }
            }

            var firstName = info.Principal.Claims
                .Where(c => c.Type == ClaimTypes.Surname)
                .Select(c => c.Value)
                .SingleOrDefault();

            var lastName = info.Principal.Claims
                .Where(c => c.Type == ClaimTypes.GivenName)
                .Select(c => c.Value)
                .SingleOrDefault();

            var addr = new MailAddress(Input.Email);
            var userName = addr.User;

            // Tài khoản chưa có, tạo tài khoản mới
            var user = new User
            {
                UserName = userName,
                Email = Input.Email,
                FirstName = firstName ?? string.Empty,
                LastName = lastName ?? string.Empty,
                Birthday = DateTime.Now,
                CreateDate = DateTime.Now
            };
            var result = await _userManager.CreateAsync(user);
            if (result.Succeeded)
            {
                // Set default roles is Member for user
                await _userManager.AddToRoleAsync(user, "Member");

                // Liên kết tài khoản ngoài với tài khoản vừa tạo
                result = await _userManager.AddLoginAsync(user, info);
                if (result.Succeeded)
                {
                    _logger.LogInformation("Đã tạo user mới từ thông tin {Name}.", info.LoginProvider);

                    // Email tạo tài khoản và email từ info giống nhau -> xác thực email luôn
                    if (user.Email == externalMail)
                    {
                        var codeactive = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                        await _userManager.ConfirmEmailAsync(user, codeactive);
                        await _signInManager.SignInAsync(user, false, info.LoginProvider);
                        return LocalRedirect(returnUrl);
                    }

                    // Trường hợp này Email tạo User khác với Email từ info (hoặc info không có email)
                    // sẽ gửi email xác để người dùng xác thực rồi mới có thể đăng nhập
                    var userId = await _userManager.GetUserIdAsync(user);
                    var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
                    var callbackUrl = Url.Page(
                        "/Account/ConfirmEmail",
                        null,
                        new { area = "Identity", userId, code },
                        Request.Scheme);

                    await _emailSender.SendEmailAsync(Input.Email, "Xác nhận địa chỉ email",
                        $"Hãy xác nhận địa chỉ email bằng cách <a href='{callbackUrl}'>bấm vào đây</a>.");

                    // Chuyển đến trang thông báo cần kích hoạt tài khoản
                    if (_userManager.Options.SignIn.RequireConfirmedEmail)
                        return RedirectToPage("./RegisterConfirmation", new { Input.Email });

                    // Đăng nhập ngay do không yêu cầu xác nhận email
                    await _signInManager.SignInAsync(user, false, info.LoginProvider);

                    return LocalRedirect(returnUrl);
                }
            }

            foreach (var error in result.Errors) ModelState.AddModelError(string.Empty, error.Description);
        }

        ProviderDisplayName = info.ProviderDisplayName;
        ReturnUrl = returnUrl;
        return Page();
    }

    private User CreateUser()
    {
        try
        {
            return Activator.CreateInstance<User>();
        }
        catch
        {
            throw new InvalidOperationException($"Can't create an instance of '{nameof(User)}'. " +
                                                $"Ensure that '{nameof(User)}' is not an abstract class and has a parameterless constructor, or alternatively " +
                                                "override the external login page in /Areas/Identity/Pages/Account/ExternalLogin.cshtml");
        }
    }

    private IUserEmailStore<User> GetEmailStore()
    {
        if (!_userManager.SupportsUserEmail)
            throw new NotSupportedException("The default UI requires a user store with email support.");

        return (IUserEmailStore<User>)_userStore;
    }

    /// <summary>
    ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
    ///     directly from your code. This API may change or be removed in future releases.
    /// </summary>
    public class InputModel
    {
        /// <summary>
        ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
        ///     directly from your code. This API may change or be removed in future releases.
        /// </summary>
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
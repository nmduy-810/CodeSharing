// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

#nullable disable

using System.ComponentModel.DataAnnotations;
using System.Text;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Server.AdditionalServices.Interfaces;
using CodeSharing.DTL.Models.Commons;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;

namespace CodeSharing.Server.Areas.Identity.Pages.Account;

[AllowAnonymous]
public class ForgotPasswordModel : PageModel
{
    private readonly IEmailSender _emailSender;
    private readonly UserManager<CdsUser> _userManager;
    private readonly IViewRenderService _viewRenderService;

    public ForgotPasswordModel(UserManager<CdsUser> userManager, IEmailSender emailSender,
        IViewRenderService viewRenderService)
    {
        _userManager = userManager;
        _emailSender = emailSender;
        _viewRenderService = viewRenderService;
    }

    /// <summary>
    ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
    ///     directly from your code. This API may change or be removed in future releases.
    /// </summary>
    [BindProperty]
    public InputModel Input { get; set; }

    public async Task<IActionResult> OnPostAsync()
    {
        if (ModelState.IsValid)
        {
            var user = await _userManager.FindByEmailAsync(Input.Email);
            if (user == null || !await _userManager.IsEmailConfirmedAsync(user))
                // Don't reveal that the user does not exist or is not confirmed
                return RedirectToPage("./ForgotPasswordConfirmation");

            // For more information on how to enable account confirmation and password reset please
            // visit https://go.microsoft.com/fwlink/?LinkID=532713
            var code = await _userManager.GeneratePasswordResetTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
            var callbackUrl = Url.Page(
                "/Account/ResetPassword",
                null,
                new { area = "Identity", code },
                Request.Scheme);

            // Get information user
            var emailModel = new MailContent
            {
                To = Input.Email,
                Subject = "Đặt lại mật khẩu",
                Body =
                    "Bạn nhận được email này vì đã gửi yêu cầu đặt lại mật khẩu tài khoản CodeSharing. Vui lòng nhấp chuột vào đường dẫn dưới đây để đặt lại mật khẩu:",
                UserName = user.LastName + " " + user.FirstName,
                Url = callbackUrl
            };

            var htmlContent = await _viewRenderService.RenderToStringAsync("_ResetPasswordEmail", emailModel);

            await _emailSender.SendEmailAsync(
                Input.Email,
                "[CodeSharing] Yêu Cầu Lấy Lại Mật Khẩu",
                htmlContent);

            return RedirectToPage("./ForgotPasswordConfirmation");
        }

        return Page();
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
        [Required(ErrorMessage = "Email không được để trống")]
        [EmailAddress]
        public string Email { get; set; }
    }
}
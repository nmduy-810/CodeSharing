// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

#nullable disable

using CodeSharing.DTL.EFCoreEntities;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CodeSharing.Server.Areas.Identity.Pages.Account;

public class LogoutModel : PageModel
{
    private readonly ILogger<LogoutModel> _logger;
    private readonly SignInManager<CdsUser> _signInManager;

    private IIdentityServerInteractionService _interaction;

    public LogoutModel(SignInManager<CdsUser> signInManager, ILogger<LogoutModel> logger,
        IIdentityServerInteractionService interaction)
    {
        _signInManager = signInManager;
        _logger = logger;
        _interaction = interaction;
    }

    public async Task<IActionResult> OnGet(string returnUrl = null)
    {
        return await OnPost(returnUrl);
    }

    public async Task<IActionResult> OnPost(string returnUrl = null)
    {
        await _signInManager.SignOutAsync();
        _logger.LogInformation("User logged out.");

        var logoutId = Request.Query["logoutId"].ToString();

        if (returnUrl != null) return LocalRedirect(returnUrl);

        if (!string.IsNullOrEmpty(logoutId))
        {
            var logoutContext = await _interaction.GetLogoutContextAsync(logoutId);
            returnUrl = logoutContext.PostLogoutRedirectUri;

            if (!string.IsNullOrEmpty(returnUrl)) return Redirect(returnUrl);

            return Page();
        }

        return Page();
    }
}
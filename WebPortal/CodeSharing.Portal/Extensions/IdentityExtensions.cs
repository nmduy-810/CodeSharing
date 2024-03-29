using System.Security.Claims;

namespace CodeSharing.Portal.Extensions;

public static class IdentityExtensions
{
    public static string GetUserId(this ClaimsPrincipal claimsPrincipal)
    {
        var claim = ((ClaimsIdentity)claimsPrincipal.Identity!)?.Claims
            .SingleOrDefault(x => x.Type == ClaimTypes.NameIdentifier);
        return claim != null ? claim.Value : "";
    }
}
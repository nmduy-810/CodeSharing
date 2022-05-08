using System.Security.Claims;

namespace CodeSharing.Server.Extensions;

public static class IdentityExtensions
{
    public static string GetUserId(this ClaimsPrincipal claimsPrincipal)
    {
        var claim = ((ClaimsIdentity)claimsPrincipal.Identity!).Claims
            .SingleOrDefault(x => x.Type == ClaimTypes.NameIdentifier);
        return claim?.Value != null ? claim.Value : string.Empty;
    }
}
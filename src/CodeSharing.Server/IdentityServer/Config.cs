using IdentityServer4;
using IdentityServer4.Models;

namespace CodeSharing.Server.IdentityServer;

public class Config
{
    public static IEnumerable<IdentityResource> Ids =>
        new IdentityResource[]
        {
            new IdentityResources.OpenId(),
            new IdentityResources.Profile()
        };

    public static IEnumerable<ApiResource> Apis =>
        new[]
        {
            new ApiResource("api.codesharing", "CodeSharing API")
        };

    public static IEnumerable<ApiScope> ApiScopes =>
        new[]
        {
            new ApiScope("api.codesharing", "CodeSharing API")
        };
}
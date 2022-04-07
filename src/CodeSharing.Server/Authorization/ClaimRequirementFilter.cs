using CodeSharing.Utilities.Constants;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;

namespace CodeSharing.Server.Authorization;

public class ClaimRequirementFilter : IAuthorizationFilter
{
    private readonly FunctionCodeConstants _functionCode;
    private readonly CommandCodeConstants _commandCode;

    public ClaimRequirementFilter(FunctionCodeConstants functionCode, CommandCodeConstants commandCode)
    {
        _functionCode = functionCode;
        _commandCode = commandCode;
    }

    public void OnAuthorization(AuthorizationFilterContext context)
    {
        var permissionsClaim = context.HttpContext.User.Claims
            .SingleOrDefault(c => c.Type == SystemConstants.Claims.Permissions);
        if (permissionsClaim != null)
        {
            var permissions = JsonConvert.DeserializeObject<List<string>>(permissionsClaim.Value);
            if (permissions != null && !permissions.Contains(_functionCode + "_" + _commandCode))
            {
                context.Result = new ForbidResult();
            }
        }
        else
        {
            context.Result = new ForbidResult();
        }
    }
}
using CodeSharing.Core.Resources.Constants;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;

namespace CodeSharing.Server.Authorization;

public class ClaimRequirementFilter : IAuthorizationFilter
{
    private readonly CommandCodeEnum _commandCode;
    private readonly FunctionCodeEnum _functionCode;

    public ClaimRequirementFilter(FunctionCodeEnum functionCode, CommandCodeEnum commandCode)
    {
        _functionCode = functionCode;
        _commandCode = commandCode;
    }

    public void OnAuthorization(AuthorizationFilterContext context)
    {
        var permissionsClaim = context.HttpContext.User.Claims
            .SingleOrDefault(c => c.Type == SystemConstant.Claims.Permissions);
        if (permissionsClaim != null)
        {
            var permissions = JsonConvert.DeserializeObject<List<string>>(permissionsClaim.Value);
            if (permissions != null && !permissions.Contains(_functionCode + "_" + _commandCode))
                context.Result = new ForbidResult();
        }
        else
        {
            context.Result = new ForbidResult();
        }
    }
}
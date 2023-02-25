using CodeSharing.Core.Resources.Constants;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Authorization;

public class ClaimRequirementAttribute : TypeFilterAttribute
{
    public ClaimRequirementAttribute(FunctionCodeEnum functionId, CommandCodeEnum commandId)
        : base(typeof(ClaimRequirementFilter))
    {
        Arguments = new object[] { functionId, commandId };
    }
}
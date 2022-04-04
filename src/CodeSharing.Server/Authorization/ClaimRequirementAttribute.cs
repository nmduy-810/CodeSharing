using CodeSharing.Utilities.Constants;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Authorization
{
    public class ClaimRequirementAttribute : TypeFilterAttribute
    {
        public ClaimRequirementAttribute(FunctionCodeConstants functionId, CommandCodeConstants commandId)
            : base(typeof(ClaimRequirementFilter))
        {
            Arguments = new object[] { functionId, commandId };
        }
    }
}
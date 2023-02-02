using System.Net;
using CodeSharing.Core.Models.BaseModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

[ApiController]
[Route("/api/[controller]")]
[Authorize("Bearer")]
public class BaseController : ControllerBase
{
    protected virtual IActionResult CodeSharingResult<T>(Result<T> result)
    {
        if (result == null)
            return new NotFoundObjectResult(result);
        
        switch (result.Status)
        {
            case (int)HttpStatusCode.OK:
                return Ok(result);
            
            case (int)HttpStatusCode.NoContent:
                return NoContent();
            
            case (int)HttpStatusCode.BadRequest:
                return BadRequest(result);
            
            case (int)HttpStatusCode.NotFound:
                return NotFound(result);
            
            default:
                return new CodeSharingObjectResult(result.Status, result);
        }
    }

    private class CodeSharingObjectResult : ObjectResult
    {
        public CodeSharingObjectResult(int statusCode, object value) : base(value)
        {
            StatusCode = statusCode;
        }
    }
}
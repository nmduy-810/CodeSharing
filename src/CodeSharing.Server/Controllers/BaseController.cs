using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

[ApiController]
[Route("/api/[controller]")]
[Authorize("Bearer")]
public class BaseController : ControllerBase
{
   
}
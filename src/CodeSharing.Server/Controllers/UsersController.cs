using CodeSharing.Server.Authorization;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Utilities.Commons;
using CodeSharing.Utilities.Constants;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Post;
using CodeSharing.ViewModels.Systems.Function;
using CodeSharing.ViewModels.Systems.Role;
using CodeSharing.ViewModels.Systems.User;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class UsersController : BaseController
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<UsersController> _logger;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly UserManager<User> _userManager;

    public UsersController(UserManager<User> userManager, ILogger<UsersController> logger, ApplicationDbContext context,
        RoleManager<IdentityRole> roleManager)
    {
        _userManager = userManager;
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
        _context = context;
        _roleManager = roleManager;
    }

    [HttpGet]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_USER, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetUsers()
    {
        var items = await _userManager.Users.Select(u => new UserVm
        {
            Id = u.Id,
            UserName = u.UserName,
            Birthday = u.Birthday,
            Email = u.Email,
            PhoneNumber = u.PhoneNumber,
            FirstName = u.FirstName,
            LastName = u.LastName,
            CreateDate = u.CreateDate
        }).ToListAsync();

        _logger.LogInformation("Successful execution of get users request");
        return Ok(items);
    }

    [HttpGet("{id}")]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_USER, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetById(string id)
    {
        var user = await _userManager.FindByIdAsync(id);
        if (user == null) return NotFound(new ApiNotFoundResponse($"Cannot found user item for id = {id} in database"));

        var item = new UserVm
        {
            Id = user.Id,
            UserName = user.UserName,
            Birthday = user.Birthday,
            Email = user.Email,
            PhoneNumber = user.PhoneNumber,
            FirstName = user.FirstName,
            LastName = user.LastName,
            CreateDate = user.CreateDate
        };

        _logger.LogInformation("Successful execution of get use by id request");
        return Ok(item);
    }

    [HttpPost]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_USER, CommandCodeConstants.CREATE)]
    public async Task<IActionResult> PostUser(UserCreateRequest request)
    {
        var user = new User
        {
            Id = Guid.NewGuid().ToString(),
            Email = request.Email,
            Birthday = request.Birthday,
            UserName = request.UserName,
            LastName = request.LastName,
            FirstName = request.FirstName,
            PhoneNumber = request.PhoneNumber
        };
        var result = await _userManager.CreateAsync(user, request.Password);
        if (result.Succeeded)
            return CreatedAtAction(nameof(GetById), new { id = user.Id }, request);
        return BadRequest(new ApiBadRequestResponse(result));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutUser(string id, [FromBody] UserCreateRequest request)
    {
        var user = await _userManager.FindByIdAsync(id);
        if (user == null)
            return NotFound(new ApiNotFoundResponse($"Cannot found user with id: {id}"));

        user.FirstName = request.FirstName;
        user.LastName = request.LastName;
        user.Birthday = request.Birthday;

        var result = await _userManager.UpdateAsync(user);

        if (result.Succeeded) return NoContent();

        return BadRequest(new ApiBadRequestResponse(result));
    }

    [HttpPut("{id}/change-password")]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_USER, CommandCodeConstants.UPDATE)]
    public async Task<IActionResult> PutUserPassword(string id, [FromBody] UserPasswordChangeRequest request)
    {
        var user = await _userManager.FindByIdAsync(id);
        if (user == null)
            return NotFound(new ApiNotFoundResponse($"Cannot found user with id: {id}"));

        var result = await _userManager.ChangePasswordAsync(user, request.CurrentPassword, request.NewPassword);

        if (result.Succeeded) return NoContent();
        return BadRequest(new ApiBadRequestResponse(result));
    }

    [HttpDelete("{id}")]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_USER, CommandCodeConstants.DELETE)]
    public async Task<IActionResult> DeleteUser(string id)
    {
        var user = await _userManager.FindByIdAsync(id);
        if (user == null)
            return NotFound();

        var adminUsers = await _userManager.GetUsersInRoleAsync(SystemConstants.Roles.Admin);
        var otherUsers = adminUsers.Where(x => x.Id != id).ToList();
        if (otherUsers.Count == 0)
            return BadRequest(new ApiBadRequestResponse("You cannot remove the only admin user remaining."));
        var result = await _userManager.DeleteAsync(user);

        if (result.Succeeded)
        {
            var uservm = new UserVm
            {
                Id = user.Id,
                UserName = user.UserName,
                Birthday = user.Birthday,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber,
                FirstName = user.FirstName,
                LastName = user.LastName
            };
            return Ok(uservm);
        }

        return BadRequest(new ApiBadRequestResponse(result));
    }

    [HttpGet("{userId}/menu")]
    public async Task<IActionResult> GetMenuByUserPermission(string userId)
    {
        var user = await _userManager.FindByIdAsync(userId);
        var roles = await _userManager.GetRolesAsync(user);
        var query = from f in _context.Functions
            join p in _context.Permissions on f.Id equals p.FunctionId
            join r in _roleManager.Roles on p.RoleId equals r.Id
            join a in _context.Commands on p.CommandId equals a.Id
            where roles.Contains(r.Name) && a.Id == "VIEW"
            select new FunctionVm
            {
                Id = f.Id,
                Name = f.Name,
                Url = f.Url,
                ParentId = f.ParentId,
                SortOrder = f.SortOrder,
                Icon = f.Icon
            };
        var data = await query.Distinct()
            .OrderBy(x => x.ParentId)
            .ThenBy(x => x.SortOrder)
            .ToListAsync();
        return Ok(data);
    }

    [HttpGet("{userId}/roles")]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_USER, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetUserRoles(string userId)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null) return NotFound(new ApiNotFoundResponse($"Cannot found user with id: {userId}"));

        var roles = await _userManager.GetRolesAsync(user);

        return Ok(roles);
    }

    [HttpPost("{userId}/roles")]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_USER, CommandCodeConstants.UPDATE)]
    public async Task<IActionResult> PostRolesToUserUser(string userId, [FromBody] RoleAssignRequest request)
    {
        if (request.RoleNames.Length == 0) return BadRequest(new ApiBadRequestResponse("Role names cannot empty"));

        var user = await _userManager.FindByIdAsync(userId);
        if (user == null) return NotFound(new ApiNotFoundResponse($"Cannot found user with id: {userId}"));

        var result = await _userManager.AddToRolesAsync(user, request.RoleNames);
        if (result.Succeeded) return Ok();

        return BadRequest(new ApiBadRequestResponse(result));
    }

    [HttpDelete("{userId}/roles")]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_USER, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> RemoveRolesFromUser(string userId, [FromQuery] RoleAssignRequest request)
    {
        var user = await _userManager.FindByIdAsync(userId);

        if (user == null) return NotFound(new ApiNotFoundResponse($"Cannot found user with id: {userId}"));

        if (request.RoleNames.Length == 0) return BadRequest(new ApiBadRequestResponse("Role names cannot empty"));

        if (request.RoleNames.Length == 1 && request.RoleNames[0] == SystemConstants.Roles.Admin &&
            user.UserName == "admin")
            return BadRequest(new ApiBadRequestResponse($"Cannot remove {SystemConstants.Roles.Admin} role"));

        var result = await _userManager.RemoveFromRolesAsync(user, request.RoleNames);
        if (result.Succeeded) return Ok();

        return BadRequest(new ApiBadRequestResponse(result));
    }

    #region Post

    [HttpGet("{userId}/posts")]
    public async Task<IActionResult> GetPostsByUserId(string userId, int pageIndex, int pageSize)
    {
        var query = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            where p.OwnerUserId == userId
            orderby p.CreateDate descending
            select new { p, c };

        var totalRecords = await query.CountAsync();

        var items = await query.Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(x => new PostQuickVm
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Summary = x.p.Summary,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                ViewCount = x.p.ViewCount
            }).ToListAsync();

        var pagination = new Pagination<PostQuickVm>
        {
            Items = items,
            TotalRecords = totalRecords,
            PageIndex = pageIndex,
            PageSize = pageSize
        };

        return Ok(pagination);
    }

    #endregion
}
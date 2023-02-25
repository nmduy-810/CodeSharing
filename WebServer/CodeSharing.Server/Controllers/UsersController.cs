using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.Authorization;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Systems.Role;
using CodeSharing.DTL.Models.Systems.User;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public class UsersController : BaseController
{
    private readonly IUserService _userService;

    public UsersController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetUsers()
    {
        return CodeSharingResult(await _userService.GetUsers());
    }
    
    [HttpGet("paging")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetUsersPaging(int pageIndex, int pageSize)
    {
        return CodeSharingResult(await _userService.GetUsersPaging(pageIndex, pageSize));
    }

    [HttpGet("{id}")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetById(string id)
    {
        return CodeSharingResult(await _userService.GetById(id));
    }

    [HttpPost]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.CREATE)]
    public async Task<IActionResult> PostUser(UserCreateRequest request)
    {
        return CodeSharingResult(await _userService.PostUser(request));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutUser(string id, [FromBody] UserCreateRequest request)
    {
        return CodeSharingResult(await _userService.PutUser(id, request));
    }

    [HttpPut("{id}/change-password")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.UPDATE)]
    public async Task<IActionResult> PutUserPassword(string id, [FromBody] UserPasswordChangeRequest request)
    {
        return CodeSharingResult(await _userService.PutUserPassword(id, request));
    }

    [HttpDelete("{id}")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.DELETE)]
    public async Task<IActionResult> DeleteUser(string id)
    {
        return CodeSharingResult(await _userService.DeleteUser(id));
    }

    [HttpGet("{userId}/menu")]
    public async Task<IActionResult> GetMenuByUserPermission(string userId)
    {
        return CodeSharingResult(await _userService.GetMenuByUserPermission(userId));
    }

    [HttpGet("{userId}/roles")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetUserRoles(string userId)
    {
        return CodeSharingResult(await _userService.GetUserRoles(userId));
    }

    [HttpPost("{userId}/roles")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.UPDATE)]
    public async Task<IActionResult> PostRolesToUserUser(string userId, [FromBody] RoleAssignRequest request)
    {
        return CodeSharingResult(await _userService.PostRolesToUserUser(userId, request));
    }

    [HttpDelete("{userId}/roles")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> RemoveRolesFromUser(string userId, [FromQuery] RoleAssignRequest request)
    {
        return CodeSharingResult(await _userService.RemoveRolesFromUser(userId, request));
    }

    #region Post

    [HttpGet("{userId}/posts")]
    public async Task<IActionResult> GetPostsByUserId(string userId, int pageIndex, int pageSize)
    {
        return CodeSharingResult(await _userService.GetPostsByUserId(userId, pageIndex, pageSize));
    }

    #endregion Post
}
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.Authorization;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Systems.Role;
using CodeSharing.ViewModels.Systems.User;
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
        var result = await _userService.GetUsers();
        return Ok(result);
    }
    
    [HttpGet("paging")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetUsersPaging(int pageIndex, int pageSize)
    {
        var result = await _userService.GetUsersPaging(pageIndex, pageSize);
        return Ok(result);
    }

    [HttpGet("{id}")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetById(string id)
    {
        var result = await _userService.GetById(id);
        if (result == null)
            return NotFound(new ApiNotFoundResponse($"Not found USER item for id = {id} in database"));
        
        return Ok(result);
    }

    [HttpPost]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.CREATE)]
    public async Task<IActionResult> PostUser(UserCreateRequest request)
    {
        var result = await _userService.PostUser(request);
        if (result)
            return Ok(result);
        
        return BadRequest(new ApiBadRequestResponse("Insert USER failed"));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutUser(string id, [FromBody] UserCreateRequest request)
    {
        var result = await _userService.PutUser(id, request);
        if (result) 
            return NoContent();

        return BadRequest(new ApiBadRequestResponse("Update USER failed"));
    }

    [HttpPut("{id}/change-password")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.UPDATE)]
    public async Task<IActionResult> PutUserPassword(string id, [FromBody] UserPasswordChangeRequest request)
    {
        var result = await _userService.PutUserPassword(id, request);
        if (result) 
            return NoContent();
        
        return BadRequest(new ApiBadRequestResponse("Update USER PASSWORD failed"));
    }

    [HttpDelete("{id}")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.DELETE)]
    public async Task<IActionResult> DeleteUser(string id)
    {
        var result = await _userService.DeleteUser(id);
        if (result)
            return Ok(result);

        return BadRequest(new ApiBadRequestResponse("Delete USER failed"));
    }

    [HttpGet("{userId}/menu")]
    public async Task<IActionResult> GetMenuByUserPermission(string userId)
    {
        var result = await _userService.GetMenuByUserPermission(userId);
        return Ok(result);
    }

    [HttpGet("{userId}/roles")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetUserRoles(string userId)
    {
        var result = await _userService.GetUserRoles(userId);
        return Ok(result);
    }

    [HttpPost("{userId}/roles")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.UPDATE)]
    public async Task<IActionResult> PostRolesToUserUser(string userId, [FromBody] RoleAssignRequest request)
    {
        var result = await _userService.PostRolesToUserUser(userId, request);
        if (result) 
            return Ok();

        return BadRequest(new ApiBadRequestResponse("Insert ROLES TO USER failed"));
    }

    [HttpDelete("{userId}/roles")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_USER, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> RemoveRolesFromUser(string userId, [FromQuery] RoleAssignRequest request)
    {
        var result = await _userService.RemoveRolesFromUser(userId, request);
        if (result) return Ok();

        return BadRequest(new ApiBadRequestResponse("Delete ROLES OF USER failed"));
    }

    #region Post

    [HttpGet("{userId}/posts")]
    public async Task<IActionResult> GetPostsByUserId(string userId, int pageIndex, int pageSize)
    {
        var result = await _userService.GetPostsByUserId(userId, pageIndex, pageSize);
        return Ok(result);
    }

    #endregion
}
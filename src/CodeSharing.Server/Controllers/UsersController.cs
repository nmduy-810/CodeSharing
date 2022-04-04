using System.Linq;
using CodeSharing.Server.Authorization;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Utilities.Constants;
using CodeSharing.ViewModels.Systems.User;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class UsersController : BaseController
{
    private readonly UserManager<User> _userManager;
    
    public UsersController(UserManager<User> userManager)
    {
        _userManager = userManager;
    }
    
    [HttpGet]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_USER, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetUsers()
    {
        var items = await _userManager.Users.Select(u => new UserVm()
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

        return Ok(items);
    }
    
    [HttpGet("{id}")]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_USER, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetById(string id)
    {
        var user = await _userManager.FindByIdAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        var item = new UserVm()
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
        return Ok(item);
    }
}
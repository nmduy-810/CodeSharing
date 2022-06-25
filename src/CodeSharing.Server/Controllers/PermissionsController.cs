using System.Data;
using CodeSharing.Server.Authorization;
using CodeSharing.Utilities.Constants;
using CodeSharing.ViewModels.Systems.Permission;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace CodeSharing.Server.Controllers;

public class PermissionsController : BaseController
{
    private readonly IConfiguration _configuration;
    private readonly ILogger<PermissionsController> _logger;

    public PermissionsController(IConfiguration configuration, ILogger<PermissionsController> logger)
    {
        _configuration = configuration;
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
    }

    [HttpGet]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_PERMISSION, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetCommandViews()
    {
        await using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        if (connection.State == ConnectionState.Closed) await connection.OpenAsync();

        const string sql = @"SELECT 
                            f.Id, 
	                        f.Name, 
	                        f.ParentId,
	                        SUM(CASE WHEN cmd.Id = 'CREATE' THEN 1 ELSE 0 END) as HasCreate,
	                        SUM(CASE WHEN cmd.Id = 'UPDATE' THEN 1 ELSE 0 END) as HasUpdate,
	                        SUM(CASE WHEN cmd.Id = 'DELETE' THEN 1 ELSE 0 END) as HasDelete,
	                        SUM(CASE WHEN cmd.Id = 'VIEW' THEN 1 ELSE 0 END) as HasView,
                            SUM(CASE WHEN cmd.Id = 'APPROVE' THEN 1 ELSE 0 END) as HasApprove
                         FROM 
                            Functions f
                         LEFT JOIN 
                            CommandInFunctions cif ON f.Id = cif.FunctionId
                         LEFT JOIN 
                            Commands cmd ON cif.CommandId = cmd.Id
                         GROUP BY 
                            f.Id, f.Name, f.ParentId
                         ORDER BY 
                            f.ParentId";

        _logger.LogInformation("Successful execution of get commands view request");
        var result = await connection.QueryAsync<PermissionScreenVm>(sql, null, null, 120, CommandType.Text);
        return Ok(result.ToList());
    }
}
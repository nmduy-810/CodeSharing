using System.Data;
using CodeSharing.Server.AdditionalServices.Interfaces;
using Dapper;
using Microsoft.Data.SqlClient;

namespace CodeSharing.Server.AdditionalServices;

public class SequenceService : ISequenceService
{
    private readonly IConfiguration _configuration;

    public SequenceService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task<int> GetPostNewId()
    {
        await using var conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        if (conn.State == ConnectionState.Closed) await conn.OpenAsync();

        var result = await conn.ExecuteScalarAsync<int>(@"SELECT (NEXT VALUE FOR PostSequence)", null, null, 120,
            CommandType.Text);
        return result;
    }
}
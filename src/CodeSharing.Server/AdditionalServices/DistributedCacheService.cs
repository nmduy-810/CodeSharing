using System.Text;
using System.Text.Json;
using CodeSharing.Server.AdditionalServices.Interfaces;
using Microsoft.Extensions.Caching.Distributed;

namespace CodeSharing.Server.AdditionalServices;

public class DistributedCacheService : ICacheService
{
    private readonly IConfiguration _configuration;
    private readonly IDistributedCache _distributedCache;

    public DistributedCacheService(IDistributedCache cache, IConfiguration configuration)
    {
        _distributedCache = cache;
        _configuration = configuration;
    }

    public async Task<T?> GetAsync<T>(string key)
    {
        var cacheData = await _distributedCache.GetAsync(key);
        if (cacheData != null) return JsonSerializer.Deserialize<T>(Encoding.UTF8.GetString(cacheData));

        return default;
    }

    public async Task SetAsync<T>(string key, T value, int timeDurationInHours = 0)
    {
        var byteValue = Encoding.UTF8.GetBytes(JsonSerializer.Serialize(value));
        if (timeDurationInHours == 0) timeDurationInHours = _configuration.GetValue<int>("CacheDurationInHours");

        await _distributedCache.SetAsync(key, byteValue, new DistributedCacheEntryOptions()
            .SetSlidingExpiration(TimeSpan.FromHours(timeDurationInHours)));
    }

    public async Task RemoveAsync(string key)
    {
        await _distributedCache.RemoveAsync(key);
    }
}
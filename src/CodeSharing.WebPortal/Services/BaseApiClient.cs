using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace CodeSharing.WebPortal.Services;

public class BaseApiClient
{
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IConfiguration _configuration;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public BaseApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
    {
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
        _httpContextAccessor = httpContextAccessor;
    }

    protected async Task<List<T>> GetListAsync<T>(string url)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);

        var response = await client.GetAsync(url);
        
        var datas =  (List<T>)JsonConvert.DeserializeObject(await response.Content.ReadAsStringAsync(), typeof(List<T>))!;

        return datas;
    }

    protected async Task<T> GetAsync<T>(string url)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);

        var response = await client.GetAsync(url);

        var body = await response.Content.ReadAsStringAsync();

        var datas = JsonConvert.DeserializeObject<T>(body);

        return datas;

    }
}
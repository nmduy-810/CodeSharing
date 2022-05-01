using System.Net.Http.Headers;
using System.Text;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication;
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

    protected async Task<List<T>> GetListAsync<T>(string url, bool requiredLogin = false)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);
        
        // Have authorized
        if (requiredLogin)
        {
            if (_httpContextAccessor.HttpContext != null)
            {
                var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
            }
        }

        var response = await client.GetAsync(url);
        
        var datas =  (List<T>)JsonConvert.DeserializeObject(await response.Content.ReadAsStringAsync(), typeof(List<T>))!;

        return datas;
    }

    protected async Task<T> GetAsync<T>(string url, bool requiredLogin = false)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);
        
        // Have authorized
        if (requiredLogin)
        {
            if (_httpContextAccessor.HttpContext != null)
            {
                var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
            }
        }

        var response = await client.GetAsync(url);

        var body = await response.Content.ReadAsStringAsync();

        var datas = JsonConvert.DeserializeObject<T>(body);

        return datas;
    }
    
    protected async Task<TResponse> PostAsync<TRequest, TResponse>(string url, TRequest requestContent, bool requiredLogin = true)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);
        StringContent? httpContent = null;
        if (requestContent != null)
        {
            var json = JsonConvert.SerializeObject(requestContent);
            httpContent = new StringContent(json, Encoding.UTF8, "application/json");
        }
            
        if (requiredLogin)
        {
            if (_httpContextAccessor.HttpContext != null)
            {
                var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
            }
        }
            
        var response = await client.PostAsync(url, httpContent);
        var body = await response.Content.ReadAsStringAsync();
        if (response.IsSuccessStatusCode)
        {
            return JsonConvert.DeserializeObject<TResponse>(body);
        }

        throw new Exception(body);
    }
}
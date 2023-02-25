using System.Net.Http.Headers;
using System.Text;
using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Services.Serialize;
using Microsoft.AspNetCore.Authentication;

namespace CodeSharing.Portal.Services;

public class BaseApiClient
{
    private readonly IConfiguration _configuration;
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly ISerializeService _serializeService;
    
    protected BaseApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IHttpContextAccessor httpContextAccessor, ISerializeService serializeService)
    {
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
        _httpContextAccessor = httpContextAccessor;
        _serializeService = serializeService;
    }

    protected async Task<Result<List<T>>> GetListAsync<T>(string url, bool requiredLogin = false)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);

        // Have authorized
        if (requiredLogin)
            if (_httpContextAccessor.HttpContext != null)
            {
                var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
            }
        
        var response = await client.GetAsync(url);
        var datas = (Result<List<T>>)_serializeService.Deserialize(await response.Content.ReadAsStringAsync(),
            typeof(Result<List<T>>))!;

        return datas;
    }

    protected async Task<Result<T>> GetAsync<T>(string url, bool requiredLogin = false)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);

        // Have authorized
        if (requiredLogin)
            if (_httpContextAccessor.HttpContext != null)
            {
                var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
            }

        var response = await client.GetAsync(url);

        var body = await response.Content.ReadAsStringAsync();

        var datas = _serializeService.Deserialize<Result<T>>(body);

        return datas ?? new Result<T>();
    }

    protected async Task<Result<TResponse>> PostAsync<TRequest, TResponse>(string url, TRequest requestContent,
        bool requiredLogin = true)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);
        StringContent? httpContent = null;
        if (requestContent != null)
        {
            var json = _serializeService.Serialize(requestContent);
            httpContent = new StringContent(json, Encoding.UTF8, "application/json");
        }

        if (requiredLogin)
            if (_httpContextAccessor.HttpContext != null)
            {
                var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
            }

        var response = await client.PostAsync(url, httpContent);
        var body = await response.Content.ReadAsStringAsync();
        if (response.IsSuccessStatusCode)
            return _serializeService.Deserialize<Result<TResponse>>(body) ?? new Result<TResponse>();
        
        throw new Exception(body);
    }

    protected async Task<Result<TResponse>> PutAsync<TRequest, TResponse>(string url, TRequest requestContent,
        bool requiredLogin = true)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);
        HttpContent? httpContent = null;
        if (requestContent != null)
        {
            var json = _serializeService.Serialize(requestContent);
            httpContent = new StringContent(json, Encoding.UTF8, "application/json");
        }

        if (requiredLogin)
            if (_httpContextAccessor.HttpContext != null)
            {
                var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
            }

        if (httpContent != null)
        {
            var response = await client.PutAsync(url, httpContent);
            var body = await response.Content.ReadAsStringAsync();

            if (response.IsSuccessStatusCode)
                return _serializeService.Deserialize<Result<TResponse>>(body) ?? new Result<TResponse>();
        
            throw new Exception(body);
        }
        return new Result<TResponse>();
    }

    protected async Task<Result<TResponse>> DeleteAsync<TResponse>(string url, bool requiredLogin = true)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);

        if (requiredLogin)
            if (_httpContextAccessor.HttpContext != null)
            {
                var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
            }

        var response = await client.DeleteAsync(url);
        var body = await response.Content.ReadAsStringAsync();

        if (response.IsSuccessStatusCode)
            return _serializeService.Deserialize<Result<TResponse>>(body) ?? new Result<TResponse>();
        
        throw new Exception(body);
    }
}
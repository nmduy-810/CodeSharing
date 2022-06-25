using System.Net.Http.Headers;
using CodeSharing.ViewModels.Commons;
using CodeSharing.WebPortal.Interfaces;
using Microsoft.AspNetCore.Authentication;
using Newtonsoft.Json;

namespace CodeSharing.WebPortal.Services;

public class UploadApiClient : BaseApiClient, IUploadApiClient
{
    private readonly IConfiguration _configuration;
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public UploadApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IHttpContextAccessor httpContextAccessor) : base(httpClientFactory, configuration, httpContextAccessor)
    {
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
        _httpContextAccessor = httpContextAccessor;
    }

    public async Task<UploadImageVm?> UploadImage(IFormFile? upload)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);
        using var requestContent = new MultipartFormDataContent();

        // Image
        if (upload != null)
        {
            byte[] data;
            using (var br = new BinaryReader(upload.OpenReadStream()))
            {
                data = br.ReadBytes((int)upload.OpenReadStream().Length);
            }

            var bytes = new ByteArrayContent(data);
            requestContent.Add(bytes, "upload", upload.FileName);
        }

        if (_httpContextAccessor.HttpContext != null)
        {
            var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
        }

        var response = await client.PostAsync("/api/uploads/UploadImage", requestContent);
        var body = await response.Content.ReadAsStringAsync();
        return response.IsSuccessStatusCode
            ? JsonConvert.DeserializeObject<UploadImageVm>(body)
            : null;
    }
}
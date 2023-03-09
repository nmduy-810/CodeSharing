using System.Net.Http.Headers;
using CodeSharing.Core.Services.Serialize;
using CodeSharing.DTL.Models.Commons;
using CodeSharing.Portal.Interfaces;
using Microsoft.AspNetCore.Authentication;

namespace CodeSharing.Portal.Services;

public class UploadApiClient : BaseApiClient, IUploadApiClient
{
    private readonly IConfiguration _configuration;
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly ISerializeService _serializeService;
    
    public UploadApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration,
         IHttpContextAccessor httpContextAccessor, ISerializeService serializeService)
                : base(httpClientFactory, configuration, httpContextAccessor, serializeService)
    {
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
        _httpContextAccessor = httpContextAccessor;
        _serializeService = serializeService;
    }

    public async Task<UploadImageVm?> UploadImage(IFormFile? upload)
    {
        var client = _httpClientFactory.CreateClient("BackendApi");
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
            ? _serializeService.Deserialize<UploadImageVm>(body)
            : null;
    }
}
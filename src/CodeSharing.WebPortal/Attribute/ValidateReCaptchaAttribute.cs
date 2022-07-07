using CodeSharing.ViewModels.Commons;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;

namespace CodeSharing.WebPortal.Attribute;

public class ValidateReCaptchaAttribute : ActionFilterAttribute
{
    private const string ReCaptchaModelErrorKey = "ReCaptcha";
    private const string RecaptchaResponseTokenKey = "g-recaptcha-response";
    private const string ApiVerificationEndpoint = "https://www.google.com/recaptcha/api/siteverify";
    private readonly Lazy<string> _reCaptchaSecret;
    
    public ValidateReCaptchaAttribute(IConfiguration configuration)
    {
        _reCaptchaSecret = new Lazy<string>(() => configuration["ReCaptcha:Secret"]);
    }
    
    public override async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        await DoReCaptchaValidation(context);
        await base.OnActionExecutionAsync(context, next);
    }
    
    private async Task DoReCaptchaValidation(ActionContext context)
    {
        if (!context.HttpContext.Request.HasFormContentType)
        {
            // Get request? 
            AddModelError(context, "No reCaptcha Token Found");
            return;
        }
        string token = context.HttpContext.Request.Form[RecaptchaResponseTokenKey];
        if (string.IsNullOrWhiteSpace(token))
        {
            AddModelError(context, "No reCaptcha Token Found");
        }
        else
        {
            await ValidateRecaptcha(context, token);
        }
    }
    
    private static void AddModelError(ActionContext context, string error)
    {
        context.ModelState.AddModelError(ReCaptchaModelErrorKey, error);
    }
    
    private async Task ValidateRecaptcha(ActionContext context, string token)
    {
        using var webClient = new HttpClient();
        
        var content = new FormUrlEncodedContent(new[]
        {
            new KeyValuePair<string, string>("secret", _reCaptchaSecret.Value),
            new KeyValuePair<string, string>("response", token)
        });
        
        var response = await webClient.PostAsync(ApiVerificationEndpoint, content);
        var json = await response.Content.ReadAsStringAsync();
        
        var reCaptchaResponse = JsonConvert.DeserializeObject<ReCaptchaResponse>(json);
        if (reCaptchaResponse == null)
        {
            AddModelError(context, "Unable To Read Response From Server");
        }
        else if (!reCaptchaResponse.Success)
        {
            AddModelError(context, "Invalid reCaptcha");
        }
    }
}
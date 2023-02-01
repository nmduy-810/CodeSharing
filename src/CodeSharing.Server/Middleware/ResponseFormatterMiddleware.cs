using System.Diagnostics;
using System.Net;
using CodeSharing.Utilities.Helpers;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace CodeSharing.Server.Middleware;

public class ResponseFormatterMiddleware
{
    private readonly RequestDelegate _next;

    public ResponseFormatterMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        var originBody = context.Response.Body;
        
        // create a stopwatch, using measure the time taken to process the request
        var stopWatch = new Stopwatch();
        
        stopWatch.Start(); // start stopWatch
        
        using var responseBody = new MemoryStream(); // create a memory stream to store the response body temporarily
        context.Response.Body = responseBody;
        await _next(context);
        
        stopWatch.Stop(); // resets the position of the response memory stream to the beginning.
        
        responseBody.Seek(0, SeekOrigin.Begin);
        
        //It reads the content of the response memory stream
        using var streamReader = new StreamReader(responseBody);
        
        var strActionResult = await streamReader.ReadToEndAsync();
        JObject? objActionResult = JsonConvert.DeserializeObject<JObject>(strActionResult);
        context.Response.Body = originBody;
        var modelState = context.Features.Get<ModelStateFeature>()?.ModelState;
        
        // It retrieves the ModelState from the HttpContext's features and checks if it is valid.
        if (modelState != null)
        {
            // If the ModelState is not valid
            if (!modelState.IsValid)
            {
                //  Creates a custom response model named Result with the ModelState, the elapsed time from the Stopwatch, and sets the HTTP status code to BadRequest.
                var responseModel = new Result<string>(modelState)
                {
                    Took = stopWatch.ElapsedMilliseconds,
                    Status = (int)HttpStatusCode.BadRequest
                };
                context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                context.Response.ContentType = "application/json";
                
                //  Writes the modified JSON object back to the response body and sends it to the client.
                await context.Response.WriteAsync(JsonConvert.SerializeObject(responseModel));
            }
        }
        else if (objActionResult != null)
        {
            objActionResult["took"] = stopWatch.ElapsedMilliseconds;
            objActionResult["time"] = DateTime.Now.ToString("MM/dd/yyyy h:mm tt");
            if (context.Response.StatusCode == StatusCodes.Status200OK)
            {
                objActionResult["message"] = "OK";
                objActionResult["status"] = (int)HttpStatusCode.OK;
                await context.Response.WriteAsync(JsonConvert.SerializeObject(objActionResult));
            }
            else if (context.Response.StatusCode == StatusCodes.Status500InternalServerError)
            {
                objActionResult["status"] = context.Response.StatusCode;
                objActionResult["message"] = HttpStatusCode.InternalServerError.ToString();
                await context.Response.WriteAsync(JsonConvert.SerializeObject(objActionResult));
            }
            else await context.Response.WriteAsync(JsonConvert.SerializeObject(objActionResult));
        }
    }
}

// Extension method used to add the middleware to the HTTP request pipeline.
public static class ResponseFormatterMiddlewareExtensions
{
    public static IApplicationBuilder UseResponseFormatterMiddleware(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<ResponseFormatterMiddleware>();
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace CodeSharing.Server.Middleware;

public class ModelStateFeature
{
    public ModelStateDictionary ModelState { get; set; }
    
    public ModelStateFeature(ModelStateDictionary state)
    {
        this.ModelState = state;
    }
}

public class ModelStateFeatureFilter : IActionResult
{
    public Task ExecuteResultAsync(ActionContext context)
    {
        var state = context.ModelState;
        context.HttpContext.Features.Set(new ModelStateFeature(state));
        return Task.CompletedTask;
    }
}
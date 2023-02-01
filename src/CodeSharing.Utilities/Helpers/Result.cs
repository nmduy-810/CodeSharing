
using CodeSharing.Utilities.Commons;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace CodeSharing.Utilities.Helpers;

public class Result<T>
{
    public bool Success { get; set; }
    public int Status { get; set; }
    public string Title { get; set; } = default!;
    public string Message { get; set; } = default!;
    public long Took { get; set; }
    public DateTime Time { get; set; }
    public T Data { get; set; } = default!;
    public List<ValidationError> Errors { get; set; }

    public Result()
    {
        Success = false;
        Errors = new List<ValidationError>();
    }
    
    public Result(ModelStateDictionary modelState)
    {
        Message = "BAD_REQUEST";
        Title = "Validation Exception";
        Time = DateTime.Now;
        Errors = modelState.Keys
            .SelectMany(key => modelState[key]?.Errors.Select(x => new ValidationError(key, x.ErrorMessage, modelState[key]!.AttemptedValue)) ?? Array.Empty<ValidationError>())
            .ToList();
    }
    
    public void SetResult(T data, string? errorCode = null)
    {
        // Case have a error (failed)
        if (!string.IsNullOrEmpty(errorCode))
        {
            Errors = new List<ValidationError>
            {
                new(errorCode, string.Empty)
            };

            Success = false;
            Status = ErrorCodes.StatusCode.BadRequest;
            Title = ErrorCodes.TitleCode.Failed;
        }
        else
        {
            Data = data;
            Success = true;
            Status = ErrorCodes.StatusCode.Success;
            Title = ErrorCodes.TitleCode.Success;
            
        }
    }
}
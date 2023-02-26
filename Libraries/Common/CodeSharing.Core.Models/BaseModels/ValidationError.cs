using CodeSharing.Core.Resources.Constants;
using Newtonsoft.Json;

namespace CodeSharing.Core.Models.BaseModels;

public class ValidationError
{
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string? Field { get; }
    
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string? Code { get; set; }
    
    public string? Message { get; }
    
    public string? RejectValue { get; }
    
    public ValidationError(string? errorCode, string? rejectValue)
    {

        Message = ErrorCodeConstant.Collections!.GetValueOrDefault(errorCode);
        Code = errorCode;
        RejectValue = rejectValue;
    }
    
    public ValidationError(Exception ex, string? errorCode)
    {

        Message = ErrorCodeConstant.Collections!.GetValueOrDefault(errorCode);
        Code = errorCode;
        RejectValue = ex.Message;
    }
    
    public ValidationError(string field, string errorMessage, string? rejectValue)
    {
        string?[] errorMessages = errorMessage.Split(',');
        Field = field != string.Empty ? field : null;
        Message = CreateMessage(field, errorMessages, out string? errorCode);
        Code = errorCode;
        RejectValue = rejectValue;
    }
    
    private string? CreateMessage(string field, string?[]? errorMessages, out string? errorCode)
    {
        if (errorMessages == null || errorMessages.Length == 0)
        {
            errorCode = string.Empty;
            return errorCode;
        }
        errorCode = errorMessages[0];
        if (errorCode == ErrorCodeConstant.StatusCode.SizeLimit)
        {
            string? format = ErrorCodeConstant.Collections.GetValueOrDefault(errorCode);
            var max = errorMessages.FirstOrDefault(x => x != null && x.StartsWith("MAX"));
            var min = errorMessages.FirstOrDefault(x => x != null && x.StartsWith("MIN"));
            
            if (string.IsNullOrEmpty(max))
                max = "undefined";
            else
                max = max.Replace("MAX", "");

            if (string.IsNullOrEmpty(min))
                min = "0";
            else
                min = min.Replace("MIN", "");

            if (format != null)
                return String.Format(format, min, max);
        }

        if (errorCode == ErrorCodeConstant.StatusCode.WrongFormat)
        {
            string? format = ErrorCodeConstant.Collections.GetValueOrDefault(errorCode);
            if (format != null)
                return String.Format(format, field);
        }

        if (errorCode != null && ErrorCodeConstant.Collections.TryGetValue(errorCode, out string? errorMessage))
        {
            return errorMessage;
        }

        return errorCode;
    }
}
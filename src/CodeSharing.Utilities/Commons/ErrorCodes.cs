using System.Net;

namespace CodeSharing.Utilities.Commons;

public abstract class ErrorCodes
{
    public abstract class StatusCode
    {
        #region HttpStatusCode
        public const int Success = (int)HttpStatusCode.OK;
        public const int BadRequest = (int)HttpStatusCode.BadRequest;
        public const int Unauthozired = (int)HttpStatusCode.Unauthorized;
        public const int Forbidden = (int)HttpStatusCode.Forbidden;
        public const int FileNotFound = (int)HttpStatusCode.NotFound;
        public const int InternalServerError = (int)HttpStatusCode.InternalServerError;
        public const int ServiceUnavailable = (int)HttpStatusCode.ServiceUnavailable;
        #endregion HttpStatusCode
        
        #region Common
        public const string WrongFormat = "1000";
        public const string SizeLimit = "1001";
        public const string Required = "1002";
        #endregion Common
    }

    public abstract class MessageCode
    {
        public const string ItemNotFound = "Item not found in database";
        public const string ErrorProcessCreate = "Error process create";
        public const string ErrorProcessUpdate = "Error process update";
        public const string ErrorProcessDelete = "Error process delete";
    }

    public abstract class TitleCode
    {
        public const string Success = "Success";
        public const string Failed = "Failed";
        public const string BadRequest = "Bad request";
    }

    public static readonly Dictionary<string, string?> Collections = new()
    {
        #region Common
        { StatusCode.WrongFormat, "Sai định dạng {0}" },
        { StatusCode.SizeLimit, "Kích thước chỉ cho phép từ {0} đến {1}" },
        { StatusCode.Required, "Hạng mục không được phép rỗng" },
        #endregion Common
    };
}
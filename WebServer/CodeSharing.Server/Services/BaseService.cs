using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Core.Services.Utils;

namespace CodeSharing.Server.Services;

public class BaseService : IBaseService
{
    protected readonly IUtils _utils;

    public BaseService(IUtils utils)
    {
        _utils = utils;
    }
}
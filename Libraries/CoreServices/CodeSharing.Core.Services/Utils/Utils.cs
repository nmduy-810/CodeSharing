using AutoMapper;
using CodeSharing.Core.Services.Utils.Interfaces;
using CodeSharing.Core.Utils;

namespace CodeSharing.Core.Services.Utils;

public class Utils : IUtils
{
    private readonly IMapper _mapper;

    public Utils(IMapper mapper)
    {
        _mapper = mapper;
    }

    public IList<T> Transform<TU, T>(IList<TU> entity)
    {
        IList<T> res = new List<T>();
        if (entity.IsNotEmpty())
        {
            foreach (TU u in entity)
            {
                res.Add(_mapper.Map<T>(u));
            }
        }
        return res;
    }

    public T Transform<TU, T>(TU entity)
    {
        return _mapper.Map<T>(entity);
    }
}
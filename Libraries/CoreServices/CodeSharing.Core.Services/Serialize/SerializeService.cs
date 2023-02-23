using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace CodeSharing.Core.Services.Serialize;

public class SerializeService : ISerializeService
{
    public string Serialize<T>(T obj)
    {
        return JsonConvert.SerializeObject(obj, new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver(),
            NullValueHandling = NullValueHandling.Ignore,
            Converters = new List<JsonConverter>
            {
                new StringEnumConverter()
                {
                    NamingStrategy = new CamelCaseNamingStrategy()
                }
            }
        });
    }

    public string Serialize<T>(T obj, Type type)
    {
        return JsonConvert.SerializeObject(obj, type, new JsonSerializerSettings());
    }

    public T? Deserialize<T>(string text)
    {
        return JsonConvert.DeserializeObject<T>(text);
    }

    public object? Deserialize(string value, Type type)
    {
        return JsonConvert.DeserializeObject(value, type, (JsonSerializerSettings?)null);
    }
}
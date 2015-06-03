using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Arkham.Services
{
    public class JsonDb<T> : IJsonDb<T>
    {
        T _item;

        public JsonDb(string jsonFile)
        {
            _item = JsonConvert.DeserializeObject<T>(File.ReadAllText(jsonFile));
        }

        public T Get() {
            return _item;
        }
    
    }

    public interface IJsonDb<T>
    {
        T Get();
    }
}

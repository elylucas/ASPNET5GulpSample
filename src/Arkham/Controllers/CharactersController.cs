using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Arkham.Services;
using Arkham.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Arkham.Controllers
{
    [Route("api/[controller]")]
    public class CharactersController : Controller
    {
        private IJsonDb<List<Character>> _jsonDb;

        public CharactersController(IJsonDb<List<Character>> jsonDb)
        {
            _jsonDb = jsonDb;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Character> Get()
        {
            return _jsonDb.Get();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Character Get(int id)
        {
            return _jsonDb.Get().Find(X => X.Id == id);
        }

 
    }
}

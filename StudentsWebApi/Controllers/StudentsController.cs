using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using StudentsWebApi.Models;
using StudentsWebApi.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StudentsWebApi.Controllers
{
    [Route("api/[controller]")]
    public class StudentsController : Controller
    {
        private IStudentsRepository<Student, long> repository;

        public StudentsController(IStudentsRepository<Student, long> studentsRepository)
        {
            repository = studentsRepository;
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Student> Get()
        {
            return repository.GetAll();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Student Get(int id)
        {
            return repository.Get(id);
        }


        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]Student value)
        {
            repository.Add(value);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Student value)
        {
            repository.Update(id, value);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            repository.Delete(id);
        }
    }
}

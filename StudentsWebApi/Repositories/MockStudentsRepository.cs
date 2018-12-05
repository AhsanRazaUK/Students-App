using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using StudentsWebApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace StudentsWebApi.Repositories
{
    public class MockStudentsRepository : IStudentsRepository<Student, long>
    {

        private string FilePath;

        private List<Student> students = new List<Student>();
        public MockStudentsRepository(IHostingEnvironment environment)
        {

            FilePath = Path.Combine(environment.WebRootPath, "../Resources/Students.json");

            var json = File.ReadAllText(FilePath);

            students = JsonConvert.DeserializeObject<List<Student>>(json);
        }
        public long Add(Student b)
        {
            if (b == null)
            {
                throw new ArgumentNullException("b");
            }

            // Assign a new Id
            var maxId = students.Max(s => s.StudentID);
            b.StudentID = maxId + 1;

            students.Add(b);

            WriteData(students);

            return 1;
        }

        public long Delete(long id)
        {
            students.RemoveAll(p => p.StudentID == id);

            WriteData(students);

            return 1;
        }

        public Student Get(long id)
        {
            return students.Find(s => s.StudentID == id);
        }


        public long Update(long id, Student b)
        {
            if (b == null)
            {
                throw new ArgumentNullException("b");
            }

            int index = students.FindIndex(s => s.StudentID == b.StudentID);
            if (index == -1)
            {
                return 0;
            }
            students.RemoveAt(index);
            students.Add(b);

            WriteData(students);

            return 1;
        }

        public IEnumerable<Student> GetAll()
        {
            return students;
        }

        private bool WriteData(List<Student> students)
        {
            // Write out the Json

            students = students.OrderBy(i => i.StudentID).ToList();

            var json = JsonConvert.SerializeObject(students, Formatting.Indented);
            File.WriteAllText(FilePath, json);

            return true;
        }
    }
}


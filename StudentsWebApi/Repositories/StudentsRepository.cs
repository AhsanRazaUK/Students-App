using StudentsWebApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace StudentsWebApi.Repositories
{
    public class StudentsRepository : IStudentsRepository<Student, long>
    {
        private ApplicationContext context;

        public StudentsRepository(ApplicationContext applicationContext)
        {
            context = applicationContext;
        }
        public long Add(Student b)
        {
            context.Students.Add(b);
            return context.SaveChanges();
        }

        public long Delete(long id)
        {
            var studentID = 0;
            var student = context.Students.FirstOrDefault(s => s.StudentID == id);
            if (student != null)
            {
                context.Students.Remove(student);
                studentID = context.SaveChanges();
            }

            return studentID;
        }

        public Student Get(long id)
        {
            return context.Students.FirstOrDefault(s => s.StudentID == id);
        }

        public IEnumerable<Student> GetAll()
        {
            return context.Students.ToList();
        }

        public long Update(long id, Student b)
        {
            var studentID = 0;
            var student = context.Students.Find((int)id);
            if (student != null)
            {
                student.FirstName = b.FirstName;
                student.Surname = b.Surname;
                studentID = context.SaveChanges();
            }

            return studentID;
        }
    }
}

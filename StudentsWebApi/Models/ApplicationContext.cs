using Microsoft.EntityFrameworkCore;

namespace StudentsWebApi.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }
        public DbSet<Student> Students { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptions)
        {

        }
    }
}

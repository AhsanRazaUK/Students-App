using System.Collections.Generic;

namespace StudentsWebApi.Repositories
{
    public interface IStudentsRepository<TEntity, U> where TEntity : class
    {

        IEnumerable<TEntity> GetAll();
        TEntity Get(U id);
        long Add(TEntity b);
        long Update(U id, TEntity b);
        long Delete(U id);
    }

}

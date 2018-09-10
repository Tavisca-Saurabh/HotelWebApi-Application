using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelWebApi.Models;

namespace TravelWebApi.Interfaces
{
    public interface ITravelEntity
    {
        Product Get(Guid id);
        List<Product> GetAll();
        bool Add(Product product);
        Product Update(Product product);
        bool Delete(Guid id);
        bool Book(Guid id);
        bool Save(Product product);

    }
}

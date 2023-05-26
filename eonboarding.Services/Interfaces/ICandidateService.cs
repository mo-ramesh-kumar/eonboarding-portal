using eonboarding.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eonboarding.Services.Interfaces
{
    public interface ICandidateService
    {
        IEnumerable<Candidate> GetAll();
        Candidate GetById(int id);
    }
}

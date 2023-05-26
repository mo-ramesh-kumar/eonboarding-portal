namespace eonboarding.Services;
using AutoMapper;
using eonboarding.DAL;
using eonboarding.Models;
using eonboarding.Services.Interfaces;

public class CandidateService : ICandidateService
{
    private AppDBContext _context;
    private readonly IMapper _mapper;

    public CandidateService(
        AppDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public IEnumerable<Candidate> GetAll()
    {
        return _context.Candidates;
    }

    public Candidate GetById(int id)
    {
        return getCandidate(id);
    }

    public void Delete(int id)
    {
        var Candidate = getCandidate(id);
        _context.Candidates.Remove(Candidate);
        _context.SaveChanges();
    }

    // helper methods

    private Candidate getCandidate(int id)
    {
        var Candidate = _context.Candidates.Find(id);
        if (Candidate == null) throw new KeyNotFoundException("Candidate not found");
        return Candidate;
    }
}
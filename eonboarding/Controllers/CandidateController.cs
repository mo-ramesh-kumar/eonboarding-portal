namespace eonboarding.Controllers;

using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using eonboarding.Services;
using eonboarding.Services.Interfaces;

[ApiController]
[Route("api/[controller]")]
public class CandidatesController : ControllerBase
{
    private ICandidateService _CandidateService;
    private IMapper _mapper;

    public CandidatesController(
        ICandidateService CandidateService,
        IMapper mapper)
    {
        _CandidateService = CandidateService;
        _mapper = mapper;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var Candidates = _CandidateService.GetAll();
        return Ok(Candidates);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var Candidate = _CandidateService.GetById(id);
        return Ok(Candidate);
    }

    //[HttpPost]
    //public IActionResult Create(CreateRequest model)
    //{
    //    _CandidateService.Create(model);
    //    return Ok(new { message = "Candidate created" });
    //}

    //[HttpPut("{id}")]
    //public IActionResult Update(int id, UpdateRequest model)
    //{
    //    _CandidateService.Update(id, model);
    //    return Ok(new { message = "Candidate updated" });
    //}

    //[HttpDelete("{id}")]
    //public IActionResult Delete(int id)
    //{
    //    _CandidateService.Delete(id);
    //    return Ok(new { message = "Candidate deleted" });
    //}
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using eonboarding.Models;

namespace eonboarding.Controllers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InterviewsController : ControllerBase
    {
        private readonly EonboardingContext _context;

        public InterviewsController(EonboardingContext context)
        {
            _context = context;
        }

        // GET: api/Interviews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Interview>>> GetInterviews()
        {
          if (_context.Interviews == null)
          {
              return NotFound();
          }
            return await _context.Interviews.ToListAsync();
        }

        // GET: api/Interviews/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Interview>> GetInterview(int id)
        {
          if (_context.Interviews == null)
          {
              return NotFound();
          }
            var Interview = await _context.Interviews.FindAsync(id);

            if (Interview == null)
            {
                return NotFound();
            }

            return Interview;
        }

        // PUT: api/Interviews/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInterview(int id, Interview Interview)
        {
            if (id != Interview.Id)
            {
                return BadRequest();
            }

            _context.Entry(Interview).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InterviewExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Interviews
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Interview>> PostInterview(Interview Interview)
        {
          if (_context.Interviews == null)
          {
              return Problem("Entity set 'EonboardingContext.Interviews'  is null.");
          }
            _context.Interviews.Add(Interview);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (InterviewExists(Interview.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetInterview", new { id = Interview.Id }, Interview);
        }

        // DELETE: api/Interviews/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInterview(int id)
        {
            if (_context.Interviews == null)
            {
                return NotFound();
            }
            var Interview = await _context.Interviews.FindAsync(id);
            if (Interview == null)
            {
                return NotFound();
            }

            _context.Interviews.Remove(Interview);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InterviewExists(int id)
        {
            return (_context.Interviews?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}

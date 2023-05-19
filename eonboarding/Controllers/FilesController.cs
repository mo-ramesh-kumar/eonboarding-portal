using eonboarding.Filters;
using eonboarding.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace eonboarding.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {       
        // full path to file in temp location

        string filePath = Path.Combine("uploaded", Path.GetTempFileName());

        [HttpGet]
        public async Task<ActionResult> Get() {
            DirectoryInfo place = new DirectoryInfo(filePath);

            // Using GetFiles() method to get list of all
            // the files present in the Train directory
            FileInfo[] Files = place.GetFiles();
          
            List<string> files = new List<string>();
            // Display the file names
            foreach (FileInfo i in Files)
            {
                files.Add(i.Name);
            }

            return Ok(files);
        }
              

        [HttpPost]
        [ValidateAntiForgeryToken]
        [DisableFormValueModelBinding]
        [RequestSizeLimit(100000000)]
        public async Task<IActionResult> Upload()
        {
           

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await Request.StreamFile(stream);
            }

            // process uploaded files
            // Don't rely on or trust the FileName property without validation.

            return Ok();
        }


        /// <summary>
        /// Download File
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        [HttpGet("DownloadFile")]
        public async Task<ActionResult> Download(int id)
        {
            if (id < 1)
            {
                return BadRequest();
            }

            try
            {
               
                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}


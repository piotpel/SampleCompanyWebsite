using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobsController
    {
        private readonly DataContext dataContext;

        public JobsController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Job>>> GetAllJobs()
        {
            return await dataContext.Jobs.ToListAsync();
        }

        [HttpGet("{jobId}")]
        public async Task<ActionResult<Job>> GetJobById(int jobId)
        {
            return await dataContext.Jobs.FirstOrDefaultAsync(x => x.JobId == jobId);
        }
    }
}

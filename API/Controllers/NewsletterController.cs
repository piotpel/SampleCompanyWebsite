using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NewsletterController : ControllerBase
    {
        private readonly DataContext context;

        public NewsletterController(DataContext dataContext)
        {
            this.context = dataContext;
        }
        [HttpGet]
        public async Task<ActionResult<Newsletter>> GetNewsletterById(int id)
        {
            var newsletter =  context.Newsletters.FirstOrDefaultAsync(x => x.NewsletterId == id);
            if(newsletter == null)
            {
                return NotFound();
            }
            return Ok(newsletter);
        }

        [HttpPost("add-newsletter")]
        public async Task<ActionResult<Newsletter>> AddNewsletter([FromBody] Newsletter newsletterFormData)
        {
            var newsletter = new Newsletter
            {
                FirstName = newsletterFormData.FirstName,
                Email = newsletterFormData.Email
            };
            context.Newsletters.Add(newsletter);
            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetNewsletterById), new { id = newsletter.NewsletterId }, newsletter);
        }
    }
}

using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NewsController
    {
        private readonly DataContext context;

        public NewsController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<News>>> GetAllNews()
        {
            return await context.News.ToListAsync();
        }

        [HttpGet("{newsId}")]
        public async Task<ActionResult<News>> GetNewsById(int newsId)
        {
            return await context.News.FirstOrDefaultAsync(x => x.NewsId == newsId);
        }
    }
}

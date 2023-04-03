using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext:DbContext
    {
        public DataContext() { }

        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<News> News { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Newsletter> Newsletters { get; set; }
    }
}

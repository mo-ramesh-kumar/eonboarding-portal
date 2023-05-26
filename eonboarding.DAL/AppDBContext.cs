using eonboarding.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;

namespace eonboarding.DAL
{
    public class AppDBContext : DbContext
    {

        protected readonly IConfiguration Configuration;

        public AppDBContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server with connection string from app settings
            options.UseSqlServer(Configuration.GetConnectionString("WebApiDatabase"));
        }    

        public DbSet<Candidate> Candidates { get; set; }       
       
    }
}

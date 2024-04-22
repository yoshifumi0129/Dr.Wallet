using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GroupCSample2.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<GroupCSample2.Models.Balance> Balances { get; set; } = default!;
        public DbSet<GroupCSample2.Models.Category> Category { get; set; } = default!;
        public DbSet<GroupCSample2.Models.UserAccount> UserAccount { get; set; } = default!;
    }
}
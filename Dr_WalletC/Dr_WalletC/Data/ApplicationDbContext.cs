using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Dr_WalletC.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Dr_WalletC.Models.Balance> Balance { get; set; } = default!;
        public DbSet<Dr_WalletC.Models.Category> Category { get; set; } = default!;
        public DbSet<Dr_WalletC.Models.UserAccount> UserAccount { get; set; } = default!;
    }
}
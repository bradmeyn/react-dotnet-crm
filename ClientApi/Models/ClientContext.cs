using Microsoft.EntityFrameworkCore;

namespace ClientApi.Models;

public class ClientContext : DbContext
{
    public ClientContext(DbContextOptions<ClientContext> options)
        : base(options)
    {
    }

    public DbSet<Client> Clients { get; set; } = null!;
}

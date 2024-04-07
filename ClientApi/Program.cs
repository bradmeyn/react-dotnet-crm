using Microsoft.EntityFrameworkCore;
using ClientApi.Models;
using Npgsql;

// Load environment variables from .env file
DotNetEnv.Env.Load();

var builder = WebApplication.CreateBuilder(args);

// Get the connection string for the database from environment variables
var connectionString = Environment.GetEnvironmentVariable("DATABASE_URL") ?? throw new InvalidOperationException("Database URL not found in environment variables.");
// print the connection string to the console
Console.WriteLine($"Connection string: {connectionString}");

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<ClientContext>(options =>
       options.UseNpgsql(connectionString));


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

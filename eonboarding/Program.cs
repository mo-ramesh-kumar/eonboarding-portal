

using eonboarding.DAL;
using eonboarding.Helpers;
using eonboarding.Models;
using eonboarding.Services.Interfaces;
using eonboarding.Services;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//builder.Services.AddScoped<EonboardingContext, EonboardingContext>();

var connectionString = builder.Configuration.GetConnectionString("WebApiDatabase");
builder.Services.AddDbContext<EonboardingContext>(x => x.UseSqlServer(connectionString));

builder.Services.AddControllers().AddJsonOptions(x =>
{
// serialize enums as strings in api responses (e.g. Role)
x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());

// ignore omitted parameters on models to enable optional params (e.g. User update)
x.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
});


var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseStaticFiles();
app.UseRouting();

app.UseCors(x => x
       .AllowAnyOrigin()
       .AllowAnyMethod()
       .AllowAnyHeader());

app.UseMiddleware<ErrorHandlerMiddleware>();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();

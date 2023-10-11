using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql;
using Microsoft.AspNetCore.Http.Features;
using System.IO;
using WikiDoxServer.Controllers;
using Microsoft.AspNetCore.Mvc.NewtonsoftJson;

namespace WikiDoxServer
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            String dbConf = "Server=localhost;Database=arkospad;UID=arkospad;Password=Bl4f4s3L12345";
           /* try
            {                
                if (File.Exists("db.settings.conf"))
                    dbConf = File.ReadAllText("db.settings.conf").Replace("\r","").Replace("\n","");
            }catch(Exception ex)
            {
                System.Console.WriteLine("Could not load db.settings.conf");
                throw new Exception();
            }
           */

            try
            {
                services.AddDbContext<Context>(opt =>
                    opt.UseMySql(dbConf,ServerVersion.AutoDetect(dbConf)));
                        //dbConf/*"server=localhost;username=root;password=;database=wikidox"*/), ServiceLifetime.Transient);
            }
            catch(Exception ex)
            {
                Console.WriteLine("Could not connect to MySQL server.");
                throw new Exception();
            }
            services.AddControllers().AddNewtonsoftJson();

            // services.AddCors(c =>
            // {
            //    c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin());
            // });

            services.Configure<FormOptions>(options =>
            {
                options.ValueCountLimit = 200; // 200 items max
                options.ValueLengthLimit = 1024 * 1024 * 100; // 100MB max len form data
            });
            
            services.AddDistributedMemoryCache();
            services.AddHostedService<SessionWorker>();
            services.AddSession(options =>
            {                
                // Set a short timeout for easy testing.
                options.IdleTimeout = TimeSpan.FromSeconds(99999);
                options.Cookie.HttpOnly = true;                
            });

            //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddControllers();
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute("default", "{controller=Home}/{action=Index}");
            });

            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<Context>();
                context.Database.EnsureCreated();
               
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();            
            app.UseSession();
            app.UseCors(options => options.AllowAnyMethod().AllowCredentials().AllowAnyHeader());
            app.UseDeveloperExceptionPage();
            if (env.IsDevelopment())
            {
              //      app.UseDeveloperExceptionPage();
            }
            else
            {
              //  app.UseHsts();
            }

            //app.UseHttpsRedirection();
         

        }
    }
}

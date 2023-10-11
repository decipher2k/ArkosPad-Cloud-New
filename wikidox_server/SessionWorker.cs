using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace WikiDoxServer
{

    public class SessionWorker : IHostedService
    {
        private Timer _timer;
        private readonly IServiceScopeFactory scopeFactory;


        public SessionWorker(IServiceScopeFactory scopeFactory)
        {
            this.scopeFactory = scopeFactory;

        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _timer = new Timer(DoWork, null, TimeSpan.Zero,
                    TimeSpan.FromMinutes(5));
            return Task.CompletedTask;
        }

        private void DoWork(object state)
        {/*   foreach (String key in Globals.sessions.Keys)
            {
                if ((DateTime.Now - Globals.sessions[key].lastUpdate).TotalDays>1)
                {
                    Globals.sessions.Remove(key);
                    break;
                }
            }        */
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }
    }    
}

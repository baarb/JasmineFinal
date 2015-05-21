using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JasmineFinal.Startup))]
namespace JasmineFinal
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

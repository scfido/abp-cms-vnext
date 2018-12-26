using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Cms.Localization.Cms;
using Volo.Abp.UI.Navigation;

namespace Cms.Menus
{
    public class CmsMenuContributor : IMenuContributor
    {
        public async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name == StandardMenus.Main)
            {
                await ConfigureMainMenuAsync(context);
            }
        }

        private async Task ConfigureMainMenuAsync(MenuConfigurationContext context)
        {
            var l = context.ServiceProvider.GetRequiredService<IStringLocalizer<CmsResource>>();

            context.Menu.Items.Insert(0, new ApplicationMenuItem("Cms.Home", l["Menu:Home"], "/"));
        }
    }
}

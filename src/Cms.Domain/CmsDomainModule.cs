using Microsoft.Extensions.DependencyInjection;
using Cms.Localization.Cms;
using Cms.Settings;
using Volo.Abp.Auditing;
using Volo.Abp.AuditLogging;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Identity;
using Volo.Abp.Localization;
using Volo.Abp.Localization.Resources.AbpValidation;
using Volo.Abp.Modularity;
using Volo.Abp.Settings;
using Volo.Abp.VirtualFileSystem;

namespace Cms
{
    [DependsOn(
        typeof(AbpIdentityDomainModule),
        typeof(AbpAuditingModule),
        typeof(BackgroundJobsDomainModule),
        typeof(AbpAuditLoggingDomainModule)
        )]
    public class CmsDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<VirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<CmsDomainModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<CmsResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/Cms");
            });

            Configure<SettingOptions>(options =>
            {
                options.DefinitionProviders.Add<CmsSettingDefinitionProvider>();
            });
        }
    }
}

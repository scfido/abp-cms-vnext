using Volo.Abp;

namespace Cms
{
    public abstract class CmsApplicationTestBase : AbpIntegratedTest<CmsApplicationTestModule>
    {
        protected override void SetAbpApplicationCreationOptions(AbpApplicationCreationOptions options)
        {
            options.UseAutofac();
        }
    }
}

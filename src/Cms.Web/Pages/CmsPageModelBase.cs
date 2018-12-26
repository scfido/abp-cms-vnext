using Cms.Localization.Cms;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Cms.Pages
{
    public abstract class CmsPageModelBase : AbpPageModel
    {
        protected CmsPageModelBase()
        {
            LocalizationResourceType = typeof(CmsResource);
        }
    }
}
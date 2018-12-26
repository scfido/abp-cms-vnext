using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using Cms.Localization.Cms;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Cms.Pages
{
    public abstract class CmsPageBase : AbpPage
    {
        [RazorInject]
        public IHtmlLocalizer<CmsResource> L { get; set; }
    }
}

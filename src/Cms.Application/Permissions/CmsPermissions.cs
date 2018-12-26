using System;

namespace Cms.Permissions
{
    public static class CmsPermissions
    {
        public const string GroupName = "Cms";

        //Add your own permission names. Example:
        //public const string MyPermission1 = GroupName + ".MyPermission1";

        public static string[] GetAll()
        {
            //Return an array of all permissions
            return Array.Empty<string>();
        }
    }
}
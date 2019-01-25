// "start": "cross-env PORT=3000 BROWSER=none CONTENT_BASE=wwwroot umi dev"

const MAIN_MENU = {
    "result":
        {
            "name": "MainMenu",
            "displayName": "Main menu",
            "customata": null,
            "items": [{
                "name": "Todo.Index",
                "icon": "list",
                "displayName": "Todo",
                "order": 0,
                "url": "/todo",
                "customData": null,
                "target": null,
                "isEnabled": true,
                "isVisible": true,
                "items": [{
                    "name": "Todo.Test",
                    "icon": "list",
                    "displayName": "Todo.Test",
                    "order": 0,
                    "url": "/todo/test",
                    "customData": null,
                    "target": null,
                    "isEnabled": true,
                    "isVisible": true,
                    "items": []
                }]
            }]
        },
    "targetUrl": null,
    "success": true,
    "error": null,
    "unAuthorizedRequest": false,
    "__abp": true
}

const ADMIN_MENU = {
    "result":
        {
            "name": "Admin",
            "displayName": "[Admin]",
            "customData": null,
            "items": [{
                "name": "Admin.System",
                "icon": "database",
                "displayName": "[系统管理]",
                "order": 0,
                "url": "/admin/system/organization",
                "customData": null,
                "target": null,
                "isEnabled": true,
                "isVisible": true,
                "items": [{
                    "name": "Admin.System.Organization",
                    "icon": "fork",
                    "displayName": "[组织机构]",
                    "order": 0,
                    "url": "/admin/system/organization",
                    "customData": null,
                    "target": null,
                    "isEnabled": true,
                    "isVisible": true,
                    "items": []
                }, {
                    "name": "Admin.System.Department",
                    "icon": "idcard",
                    "displayName": "[部门]",
                    "order": 0,
                    "url": "/admin/system/department",
                    "customData": null,
                    "target": null,
                    "isEnabled": true,
                    "isVisible": true,
                    "items": []
                }, {
                    "name": "Admin.System.Roles",
                    "icon": "team",
                    "displayName": "[角色]",
                    "order": 0,
                    "url": "/admin/system/roles",
                    "customData": null,
                    "target": null,
                    "isEnabled": true,
                    "isVisible": true,
                    "items": []
                }, {
                    "name": "Admin.System.Users",
                    "icon": "user",
                    "displayName": "[用户]",
                    "order": 0, "url": "/admin/system/person",
                    "customData": null,
                    "target": null,
                    "isEnabled": true,
                    "isVisible": true,
                    "items": []
                }, {
                    "name": "Admin.System.AuditLogs",
                    "icon": "safety",
                    "displayName": "[审计日志]",
                    "order": 0,
                    "url": "/admin/system/auditLogs",
                    "customData": null,
                    "target": null,
                    "isEnabled": true,
                    "isVisible": true,
                    "items": []
                }, {
                    "name": "Admin.System.Tenant",
                    "icon": "setting",
                    "displayName": "[设置]",
                    "order": 0,
                    "url": "/admin/system/tenantsettings",
                    "customData": null,
                    "target": null,
                    "isEnabled": true,
                    "isVisible": true,
                    "items": []
                }]
            }, {
                "name": "Admin.Generator",
                "icon": "codepen",
                "displayName": "[代码生成]",
                "order": 0,
                "url": "/admin/codegenerator",
                "customData": null,
                "target": null,
                "isEnabled": true,
                "isVisible": true,
                "items": []
            },
            {
                "name": "Admin.Passport",
                "icon": "desktop",
                "displayName": "[认证服务]",
                "order": 0,
                "url": "/admin/passport/clients",
                "customData": null,
                "target": null,
                "isEnabled": true,
                "isVisible": true,
                "items": [{
                    "name": "Admin.Passprot.Clients",
                    "icon": "desktop",
                    "displayName": "[客户端]",
                    "order": 0,
                    "url": "/admin/passport/clients",
                    "customData": null,
                    "target": null,
                    "isEnabled": true,
                    "isVisible": true,
                    "items": []
                },
                {
                    "name": "Admin.Passprot.Resources",
                    "icon": "wallet",
                    "displayName": "[资源]",
                    "order": 0,
                    "url": "/admin/passport/resources",
                    "customData": null,
                    "target": null,
                    "isEnabled": true,
                    "isVisible": true,
                    "items": []
                }]
            }]
        },
    "targetUrl": null,
    "success": true,
    "error": null,
    "unAuthorizedRequest": false,
    "__abp": true
};

export default {

    "GET /api/services/app/Navigation/GetUserMenu": (req, res) => {
        if (req.query["type"] === "MainMenu")
            res.end(JSON.stringify(MAIN_MENU));
        else
            res.end(JSON.stringify(ADMIN_MENU));
    }

}
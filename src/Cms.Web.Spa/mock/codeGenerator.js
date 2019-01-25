let orgs = [
    { "code": "310000012160000001", "parentCode": "0", "name": "上海市分行", "simplyName": "【】", "order": 1, "path": "/310000012160000001/", "type": { "id": "4a580c3d-fbfc-471a-bdda-53d439b37d20", "name": "总行" }, "area": { "code": "310118", "name": "青浦区" }, "description": "", "lables": [], "isDisable": false }, { "code": "310000012160000002", "parentCode": "310000012160000001", "name": "闵行支行", "simplyName": "bansn", "order": 2, "path": "/310000012160000001/310000012160000002/", "type": { "id": "28f4be66-af08-4064-9407-b5b8346bb5af", "name": "营业网点" }, "area": { "code": "310230", "name": "崇明县" }, "description": "夏龙飞：13601627680吕民：13585863030 薛海涛:13651975602 座机:64120873\n夏龙飞\n夏龙飞\n夏龙飞\n夏龙飞：64120873\n64120873", "lables": [], "isDisable": false }, { "code": "310000012160000005", "parentCode": "310000012160000002", "name": "闵行华漕支行", "simplyName": "", "order": 5, "path": "/310000012160000001/310000012160000002/310000012160000005/", "type": { "id": "28f4be66-af08-4064-9407-b5b8346bb5af", "name": "营业网点" }, "area": { "code": "310112", "name": "闵行区" }, "description": "", "lables": [], "isDisable": false }, { "code": "310000012160000006", "parentCode": "310000012160000002", "name": "闵行虹桥商务区支行", "simplyName": "", "order": 6, "path": "/310000012160000001/310000012160000002/310000012160000006/", "type": { "id": "28f4be66-af08-4064-9407-b5b8346bb5af", "name": "营业网点" }, "area": { "code": "310112", "name": "闵行区" }, "description": "", "lables": [], "isDisable": false }, { "code": "310000012160000007", "parentCode": "310000012160000002", "name": "闵行七宝支行", "simplyName": "", "order": 7, "path": "/310000012160000001/310000012160000002/310000012160000007/", "type": { "id": "00000000-0000-0000-0000-000000000000", "name": "" }, "area": { "code": "310112", "name": "闵行区" }, "description": "", "lables": [], "isDisable": false }, { "code": "310000012160000008", "parentCode": "310000012160000002", "name": "闵行虹桥支行", "simplyName": "", "order": 8, "path": "/310000012160000001/310000012160000002/310000012160000008/", "type": { "id": "00000000-0000-0000-0000-000000000000", "name": "" }, "area": { "code": "310112", "name": "闵行区" }, "description": "", "lables": [], "isDisable": false }, { "code": "310000012160000019", "parentCode": "310000012160000002", "name": "闵行漕宝路支行", "simplyName": "", "order": 8, "path": "/310000012160000001/310000012160000002/310000012160000019/", "type": { "id": "00000000-0000-0000-0000-000000000000", "name": "" }, "area": { "code": "310112", "name": "闵行区" }, "description": "", "lables": [], "isDisable": false }];
let roleAllDatas = [
    {
        "code": "b322cfad-57b6-11e7-84ef-080027e0090b",
        "name": "管理员",
        "order": 1,
        "description": "拥有系统最高操作权限，不可修改、删除",
        "enable": true
    },
    {
        "code": "b322e5d5-57b6-11e7-84ef-080027e0090b",
        "name": "个金部",
        "order": 2,
        "description": "系统内置角色，不可删除",
        "enable": true
    },
    {
        "code": "b322e739-57b6-11e7-84ef-080027e0090b",
        "name": "高层领导",
        "order": 3,
        "description": "系统内置角色，不可删除",
        "enable": true
    },

    {
        "code": "b322f3a4-57b6-11e7-84ef-080027e0090b",
        "name": "乡城县支行",
        "order": 24,
        "description": "预览、回放",
        "enable": true
    },
    {
        "code": "b322f449-57b6-11e7-84ef-080027e0090b",
        "name": "得荣县支行",
        "order": 25,
        "description": "预览、回放",
        "enable": true
    }
];
let departmentAllDatas = [
    { "guid": "37f887f9-8367-4126-b20a-8ef81dc848d6", "name": "部门1", "isDisable": false, "order": 50, "parentGuid": "00000000-0000-0000-0000-000000000000", "owerCenterId": "00000000-0000-0000-0000-000000000000", "realCenterId": "00000000-0000-0000-0000-000000000000", "code": "1" }, { "guid": "723308fe-5c63-4e13-9b2d-a7ab56689640", "name": "部门3", "isDisable": false, "order": 50, "parentGuid": "37f887f9-8367-4126-b20a-8ef81dc848d6", "owerCenterId": "00000000-0000-0000-0000-000000000000", "realCenterId": "00000000-0000-0000-0000-000000000000", "code": "3" }, {
        "guid": "b85c414f-0212-45ac-b371-079a64e37610", "name": "部门2", "isDisable": false, "order": 100, "parentGuid": "00000000-0000-0000-0000-000000000000", "owerCenterId": "00000000-0000-0000-0000-000000000000",
        "realCenterId": "00000000-0000-0000-0000-000000000000", "code": "2"
    }
];
let userSearchDatas = {
    "persons": [
        {
            "code": "513300013000000592",
            "name": "管理员",
            "phone": "18380108721",
            "department": {
                "name": ""
            },
            "sex": "女",
            "org": {
                "code": "513300012160000001",
                "name": "513300012160000001"
            },
            'roles': [
                { "code": "1", "name": "行长行长行长行长" },
                { "code": "2", "name": "处长行长行长" },
                { "code": "28", "name": "处长行长行长" }],
            'positions': [
                { "code": "1", "name": "行长" },
                { "code": "2", "name": "处长" },
            ]
        }
    ],
    "page": {
        "size": 10,
        "index": 1,
        "countTotal": true,
        "totalRow": 1
    }
}
export default
    {
        "GET /CMS/Dictionary/GetDictionarys": (req, res) => {
            res.end(JSON.stringify([{ name: '项目1', value: '001' }, { name: '项目2', value: '002' }, { name: '项目3', value: '003' }]))
        },
        "GET /CMS/Organization/GetOrgs": (req, res) => {
            res.end(JSON.stringify({
                "orgs": orgs, "page": { "size": 1000000, "index": 1, "countTotal": true, "totalRow": 4 }
            }))
        },
        "GET /CMS/Organization/GetOrg": (req, res) => {
            let code = req && req.query && req.query.code;

            let orgArr = orgs.filter((item) => {
                return item.code == code
            });
            console.log((orgArr));

            let org = (orgArr == null || orgArr.length == 0) ? null : orgArr[0];

            res.end(JSON.stringify(org))
        },
        "GET /CMS/Person/GetPersonList": (req, res) => {
            res.end(JSON.stringify(userSearchDatas))
        },
        "GET /CMS/Role/GetAllRole": (req, res) => {
            res.end(JSON.stringify(roleAllDatas))
        },
        "GET /CMS/Department/GetAllDepartment": (req, res) => {
            res.end(JSON.stringify(departmentAllDatas))
        },
        "GET /CMS/Dictionary/getRoleDataSource ": (req, res) => {
            res.end(JSON.stringify([{ name: '角色1', value: '001' }, { name: '角色2', value: '002' }, { name: '角色3', value: '003' }]))
        },
        "GET /CMS/Dictionary/getDepartmentDataSource": (req, res) => {
            res.end(JSON.stringify([{ name: '部门1', value: '001' }, { name: '部门2', value: '002' }, { name: '部门3', value: '003' }]))
        },
        "GET /api/services/app/Datasource/GetDataSourceItems": (req, res) => {
            res.end(JSON.stringify([{ name: '自定义项1', value: '001' }, { name: '自定义项2', value: '002' }, { name: '自定义项3', value: '003' }]))
        }
    }
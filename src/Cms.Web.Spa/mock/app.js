// "start": "cross-env PORT=3000 BROWSER=none CONTENT_BASE=wwwroot umi dev"

const DataBase = {
    flag: true,
    database: ['cms1', 'cms2', 'cms3', 'cms4']
}

const cms1 = {
    key: 1,
    name: "cms1",    //表名
    Pkey: "id",           //主键
    feilds: [
        {
            columnName: "id",
            dataType: "string",
            description: "主键",
            notNull: true,
        },
        {
            columnName: "input",
            dataType: "string",
            description: "输入框",
            notNull: true,
        },
        {
            columnName: "select",
            dataType: "string",
            description: "下拉框",
            notNull: true,
        },
    ]
}

const cms2 = {
    key: 2,
    name: "cms2",    //表名
    Pkey: "ID",           //主键
    feilds: [
        {
            columnName: "id",
            dataType: "string",
            description: "主键",
            notNull: true,
        },
        {
            columnName: "parentID",
            dataType: "string",
            description: "关联ID",
            notNull: true,
        },
        {
            columnName: "input",
            dataType: "string",
            description: "输入框",
            notNull: true,
        },
        {
            columnName: "select",
            dataType: "string",
            description: "下拉框",
            notNull: true,
        },
    ]
}

export default {

    "GET /api/services/app/getDatabase": (req, res) => {
        var datas =  {
            "result": [
                {
                    "name": "cmstodos",
                    "fields": [
                      {
                        "columnName": "id",
                        "dataType": "Int32",
                        "description": "",
                        "key": true,
                        "notNull": true
                      },
                      {
                        "columnName": "title",
                        "dataType": "String",
                        "description": "",
                        "key": false,
                        "notNull": true
                      },
                      {
                        "columnName": "isdone",
                        "dataType": "Boolean",
                        "description": "",
                        "key": false,
                        "notNull": true
                      },
                      {
                        "columnName": "creationtime",
                        "dataType": "String",
                        "description": "",
                        "key": false,
                        "notNull": true
                      },
                      {
                        "columnName": "finishtime",
                        "dataType": "String",
                        "description": "",
                        "key": false,
                        "notNull": true
                      },
                      {
                        "columnName": "orgid",
                        "dataType": "String",
                        "description": "",
                        "key": false,
                        "notNull": true
                      },
                      {
                        "columnName": "orgname",
                        "dataType": "String",
                        "description": "",
                        "key": false,
                        "notNull": true
                      }
                    ]
                  },
            ],
            "targetUrl": null,
            "success": true,
            "error": null,
            "unAuthorizedRequest": false,
            "__abp": true
          }
        for (var i = 1; i < 10; i++) {
            datas.result.push(
                {
                    id: i,
                    name: "cms" + i,    //表名
                    fields: [
                        {
                            columnName: "id" + i,
                            dataType: "string",
                            description: "ID" + i,
                            notNull: true,
                            key: true
                        },
                        {
                            columnName: "name",
                            dataType: "string",
                            description: "姓名",
                            notNull: true,
                            key: true
                        },
                        {
                            columnName: "sex",
                            dataType: "bool",
                            description: "性别",
                            notNull: true,
                            key: false
                        },
                        {
                            columnName: "age",
                            dataType: "int",
                            description: "年龄",
                            notNull: true,
                            key: false
                        },
                    ]
                }
            );
        }
        res.end(JSON.stringify(datas))
    },

    "GET /api/services/app/getDatabaseInfo": (req, res) => {
        if (req.query['databaseName'] === 'cms1')
            res.end(JSON.stringify(cms1))
        else
            res.end(JSON.stringify(cms2))
    }
}
# abp-cms-vnext

- abp vNext 0.10.0
- 升级到.net core 2.2
- 数据库切换到mysql

## 初始化数据库

### 启动数据库

```sh
#启动mysql
docker run -d -p3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 mysql

#进入Cms.EntityFrameworkCore项目目录
cd src/Cms.EntityFrameworkCore
dotnet ef database update
```


# Graphql_Sequelize_demo
A Graphql Sequelize API  written In TypeScript Consumed by A typescript React application (Typescript Fullstack )

## Setting up the Databse
if you don`t have  MYSQL ,you can use docker 
 
  ```sh
   docker run \
  -p 0.0.0.0:7999:3306 \
  --name gsd-db \
  -e MYSQL_ROOT_PASSWORD=password \
  -e MYSQL_USER=gsd-dev \
  -e MYSQL_PASSWORD=password \
  -e MYSQL_DATABASE=gsd \
  -d mysql:5.7.20 
  ```
  
  This will create a Docker instance called` gsd-db`, running MySQL v5.7.20, with the root password being `password`.
  It also creates a database called `gsd`, creates a user called `gsd-dev` (with password `password`), and assigns that user full permissions onto the `gsd` database.
  
  ### the Database Url in env.example (with no passwword)
    
     DB_URL=mysql://root:@127.0.0.1:3306/gsd?charset=UTF8
  

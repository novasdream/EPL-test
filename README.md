# EPL-test

In this test i will share back and front in same repo.


## Step 1
### Checks

Keep the ports 3000 (web server), 3001 (WebService), 33006(mysql over docker) available

have installed 
```
yarn 1.21.0
node 8.15+
Docker 18.09.2
docker-compose 1.23.2
```

## Step 2
### Download Project
Download all project using 

```
git clone https://github.com/novasdream/EPL-test
```

## Step 3 
### On Backend Folder
####  Database

On terminal in backend folder 

```
docker-compose up
cat full.sql | docker exec -i backend_db_1 /usr/bin/mysql -u user --password=password db
```

#### Backend

```
npm install
npm run start
```

You can run calculation tests on backend using 
```
npm run test
```

## Step 4
### On WebServer Folder
#### WebServer

On terminal in webserver folder 
```
yarn install
yarn start
```


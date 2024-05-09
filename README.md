# applicacorp-backend-test - Luiz Henrique Palomo

## Clone Repo
To run the project clone the repository at https://github.com/PalomoLH/applicacorp-backend-test.git
To do that open your terminal and type

```
git clone https://github.com/PalomoLH/applicacorp-backend-test.git
```

Now open clonned folder with

```
cd applicacorp-backend-test
```

## Install Node.js and NPM
Then make sure you have node.js and npm installed at your machine, if not install it at https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

## Install dependencies
On the root of the project run

```
npm install
```

## Run project
To run the project execute this at the terminal

```
npm start
```

## How to Test
Open you preffered Rest API program (postman, insomnia) and do a get at `'http://localhost:3000/posts'`

Or you can run this at your terminal

```
curl --location 'http://localhost:3000/posts'
```

To add options you can pass a query string such as `'http://localhost:3000/posts?page=2&size=10'`

Or again run this at your terminal

```
curl --location 'http://localhost:3000/posts?page=2&size=10'
```
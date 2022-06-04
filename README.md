# # AuthProject - Typescript

## Overview

En este proyecto se busco realizar una interface de login que almacene usuarios en una base de datos, y que dependiendo el rol del usuario pueda acceder a determinados views. Para realizarlo también usaré Next.js, Typescript, login de Google y capaz algún login de Facebook. Si estas tecnologías te interesan y querés practicar te recomiendo que lo forkees para tener un ejemplo de como trabajarlo.

## Setup Inicial Back

Para crear la estructura del proyecto se ejecuto el comando:

```bash
npm init -y
npm install typescript -D
npx tsc --init
npm init -y
npm i cookie-parser cors dotenv express pg
npm i @types/cookie-parser @types/cors @types/express @types/morgan @types/node @types pg morgan nodemon ts-node --save-dev
npm install typeorm --save
npm install reflect-metadata --save
```

```env
DB_USER=********
DB_PASSWORD=********
DB_HOST="localhost"
DB_NAME=********
DB_PORT="5432"
NODE_ENV="development"
API_PORT="3001"
API_HOST="localhost"
CORS="http://localhost:3000"
```

## Routes

### POST /auth/login/token:

Response:

```
{
  "user": {
    "id": 1,
    "firstName": "juan ignacio",
    "lastName": "de los santos",
    "email": "juanignaciodelossantos01@gmail.com",
    "password": "$2a$10$uhftRMk5iyBuprPdIy578ekU7t9.RKopg.zTxAnqxbC6pi9iCD/36",
    "googleId": null,
    "createdAt": "2022-05-26T21:19:13.298Z",
    "updatedAt": "2022-05-26T21:19:13.298Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzNjQ2NTcyfQ.492vzBUfVDp2_E5QOuaN4H9MH2uk8dHYf1LJXTpGdTU"
}
```

### POST /auth/login:

Request:

```
{
  "email": "juanignaciodelossantos01@gmail.com",
  "password": "password",
}
```

Response:

```
{
  "firstName": "juan ignacio",
  "email": "juanignaciodelossantos01@gmail.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTQzMDc5NzV9.QDKL1DJ2V2Ow5iTVLObnw4xEOFcnKU2_Q3Lj2xw7qCc"
}
```

## Setup Inicial Front

Para crear la estructura del proyecto se ejecuto el comando:

```bash
npx create-react-app authproject-ts --template typescript
npm install react-cookie
npm install --save redux react-redux redux-thunk axios react-router-dom
npm install --save @types/react-router-dom @types/react-cookies
```

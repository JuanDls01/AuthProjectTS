# # AuthProject - Typescript

## Overview

En este proyecto se busco realizar una interface de login que almacene usuarios en una base de datos, y que dependiendo el rol del usuario pueda acceder a determinados views. Para realizarlo también usaré Next.js, Typescript, login de Google y capaz algún login de Facebook. Si estas tecnologías te interesan y querés practicar te recomiendo que lo forkees para tener un ejemplo de como trabajarlo.

## Setup Inicial

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

Si quieren iniciarlo manualmente les dejo el link de Next.js para leer la documentación:
https://nextjs.org/docs#manual-setup

// Aquí se encuentran todos nuestros valores de las variables de entorno: 
import dotenv from 'dotenv';
dotenv.config();

const config = {
    dbUser: process.env.DB_USER || 'postgres',
    dbPassword: process.env.DB_PASSWORD || 'Fenix1999',
    dbHost: process.env.DB_HOST || 'localhost',
    dbName: process.env.DB_NAME || 'authproject',
    dbPort: process.env.DB_PORT || '5432',
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.API_PORT || '3001',
    host: process.env.API_host || 'localhost',
    cors: process.env.CORS || 'localhost:3000',
    publicKey: process.env.PUBLIC_KEY || '',
    privateKey: process.env.PRIVATE_KEY || '',
    JWTSecret: process.env.JWT_SECRET_TOKEN || 'db56558d5bf4a3ded2333d9c2ba2e5fbc9e24143a4dd3e4f08a42152121de56697b6ff7c65adfd36bbb6e7ce3758d2d09a6a527d088a5100f87911702ce12a97',
}

export default config;
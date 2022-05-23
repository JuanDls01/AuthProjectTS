import express, { Application, Request, Response, NextFunction, } from "express";
import cookieParser from "cookie-parser";
import morgan from 'morgan';
import cors from 'cors';
import "reflect-metadata"

import config from '../lib/config';
import routes from './routes/index.routes';

const app: Application = express(); // We said to TS that app is an express Application.
// Set middlewares:
app.use(express.urlencoded({extended: true, limit: '50mb'})); // Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(express.json({limit: '50mb'})); // Middleware que transforma la req.body a un json
app.use(cookieParser()); // Is a middleware which parses cookies attached to the client request object
app.use(morgan('dev'));

// CORS: allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served
app.use(
    cors({
        origin: config.cors,
        credentials: true,
        methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    })
)

// Error handler: 
interface error {
    // Create an interface for err
    status: number;
    message: string;
}
app.use((err: error, req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
})

// Routes:
app.use('/api', routes);

export default app;
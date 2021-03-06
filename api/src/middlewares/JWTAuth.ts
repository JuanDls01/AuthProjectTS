import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import config from '../../lib/config';

export const JWTAuthenticator = async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const authHeader: string | undefined= req.headers['authorization']; // Here we found the JWT;
        const token = authHeader && authHeader.split(' ')[1];
        if(token === undefined) return res.send({error: 'No token provides'})
        // Now we check if the token is validate:
        // console.log(verify(token, config.privateKey))
        verify(token, config.JWTSecret, (err, user) => {
            // if the token is invalid, we send an error
            if(err) return res.status(500).send({error: 'Invalid token, logout'});
            // if the token is valid, we continue.
            next();
        })
    } catch (err) {
        console.log(err)
    }
}
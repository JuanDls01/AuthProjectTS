// This function generate a JSON Web Token:
// import { verify } from 'crypto';
import { sign } from 'jsonwebtoken';
import config from '../../lib/config';

export const generateAccessToken = (userData:object): string => {
    // This function create the access token, we have to pass a payload (it's the user information),
    // and the private key to the sign function.
    const secret:string = config.JWTSecret;
    const accessToken: string = sign(userData, secret);
    return accessToken
};
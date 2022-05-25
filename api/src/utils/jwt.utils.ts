// This function generate a JSON Web Token:
import { sign, SignOptions } from 'jsonwebtoken';
import config from '../../lib/config';

export const generateAccessToken = (user:object): string => {
    // This function create the access token, we have to pass a payload (it's the user information),
    // and the private key to the sign function. 
    const secret:string = config.privateKey;
    const accessToken: string = sign(user, secret);
    console.log(accessToken);
    return accessToken
};

// Checks if JWT token is valid:
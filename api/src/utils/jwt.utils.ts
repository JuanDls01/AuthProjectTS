// This function generate a JSON Web Token:
import { sign, SignOptions } from 'jsonwebtoken';
import config from '../../lib/config';

export const generateAccessToken = (user:object) => {
    // For create the access token we need to pass to sign a payload (it's the user information), and the private key
    const secret:string = config.privateKey;
    const accessToken: string = sign(user, secret);
    console.log(accessToken);
    return accessToken
}
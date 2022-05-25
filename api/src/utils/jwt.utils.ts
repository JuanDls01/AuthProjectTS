// This function generate a JSON Web Token:
import { verify } from 'crypto';
import { sign, SignOptions, VerifyOptions } from 'jsonwebtoken';
import config from '../../lib/config';

export const generateAccessToken = (user:object): string => {
    // This function create the access token, we have to pass a payload (it's the user information),
    // and the private key to the sign function. 
    const secret:string = config.privateKey;
    const accessToken: string = sign(user, secret);
    console.log(accessToken);
    return accessToken
};

// interface TokenPayload {
//     exp: number;
//     axxessTypes: string[];
//     name: string;
//     userId:number;
// }

// // Checks if JWT token is valid:
// export function validateToken(token: string):
// Promise<TokenPayload> {
//     const publicKey: string = config.publicKey;

//     const verifyOptions: VerifyOptions = {
//         algorithms: ['RS256'],
//     }

//     return new Promise((resolve, reject) => {
//         verify(token, publicKey, verifyOptions, (error, decoded: TokenPayload) => {
//             if (error) return reject(error);
//             resolve(decoded);
//         })
//     })
// }
// This function generate a JSON Web Token:
// import { verify } from 'crypto';
import { sign } from 'jsonwebtoken';
import config from '../../lib/config';

export const generateAccessToken = (userData:object): string => {
    // This function create the access token, we have to pass a payload (it's the user information),
    // and the private key to the sign function.
    console.log('hola') 
    const secret:string = config.privateKey;
    console.log(secret)
    const accessToken: string = sign(userData, secret);
    console.log(accessToken);
    return accessToken
};

// interface TokenPayload {
//     exp: number;
//     axxessTypes: string[];
//     name: string;
//     userId:number;
// }

// Checks if JWT token is valid:
// export function validateToken(token: string): Promise<TokenPayload> {
//     const publicKey: string = config.publicKey;

//     const verifyOptions: VerifyOptions = {
//         algorithms: ['RS256'],
//     }

//     return new Promise((resolve, reject) => {
//         verify(token, publicKey, verifyOptions, (error, decoded) => {
//             if (error) return reject(error);
//             resolve (decoded)
//         })
//         // verify(token, publicKey, verifyOptions, (error, decoded: TokenPayload) => {
//         //     if (error) return reject(error);
//         //     resolve(decoded);
//         // })
//     })
// }
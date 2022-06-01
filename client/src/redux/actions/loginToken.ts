import axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from '../store/index'

import { url } from './index';
import { ActionTypes } from "./types";

const LOGIN_TOKEN: string = 'logintoken';

interface User {
    id: number;
    email: string;
    role: string
}

export interface UserAuth {
    user: User | null;
    token: string | null;
    error: string | null;
}

interface bodyLoginToken {
    userId: number;
    token: string
}

export interface loginTokenAction {
    type: ActionTypes.LOGIN_TOKEN;
    payload: UserAuth;
}

export const loginToken = (body: bodyLoginToken): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => {
    return async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            const response = await axios.post<UserAuth>(`${url}/auth/login/token`, body, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${body.token}`,
                },
            });
            dispatch({
                type: LOGIN_TOKEN,
                payload: response.data
            })
        } catch (err) {
            console.log('action creator loginToken', err)
        }
    }
}

// import { Dispatch } from "react";

// export const LOGIN_TOKEN: string = "LOGIN_TOKEN";

// export interface userToken {
//     id: number;
//     firstName: string;
//     lastName: string;
//     email: string;
//     role: string;
// }

// export interface resLoginToken {
//     user?: userToken;
//     token?: string;
//     error?: string;
// }

// export interface Token {
//     bodyToken: string;
//     // userId: number;
// }

// export interface loginTokenAction {
//     type: string;
//     payload: resLoginToken;
// }

// const loginToken = (token: Token) => {
//     return async (dispatch: Dispatch<loginTokenAction>) => {
//         try {
//             const response = await axios.post<resLoginToken>(
//                 "/auth/login/token",
//                 token,
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: `Bearer ${token.bodyToken}`,
//                     },
//                 }
//             );
//             return dispatch({
//                 type: LOGIN_TOKEN,
//                 payload: response.data,
//             });
//         } catch (err) {
//             console.log(err);
//         }
//     };
// };

// export default loginToken;

import axios from "axios";
import { Dispatch } from "react";

export const LOGIN_TOKEN: string = "LOGIN_TOKEN";

export interface userToken {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

export interface resLoginToken {
    user?: userToken;
    token?: string;
    error?: string;
}

export interface Token {
    bodyToken: string;
    userId: number;
}

export interface loginTokenAction {
    type: string;
    payload: resLoginToken;
}

const loginToken = (token: Token) => {
    return async (dispatch: Dispatch<loginTokenAction>) => {
        try {
            const response = await axios.post<resLoginToken>(
                "/auth/login/token",
                token,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token.bodyToken}`,
                    },
                }
            );
            return dispatch({
                type: LOGIN_TOKEN,
                payload: response.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

export default loginToken;

import axios from 'axios';
import { ActionType } from './types';
import { Dispatch } from 'redux'

export interface loginAuthPayload {
    token: string | null,
    firstName: string | null,
    email: string | null,
}

export interface loginAuthAction {
    type: ActionType.LOGIN_USER,
    payload: loginAuthPayload,
}

interface input {
    email: string,
    password: string,
}

export const loginUser = (input: input) => {
    return async (dispatch: Dispatch<loginAuthAction>) => {
        try {
            const json = await axios.post("http//localhost:3001/api/auth/login", input);
            return dispatch({
                type: ActionType.LOGIN_USER,
                payload: json.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}
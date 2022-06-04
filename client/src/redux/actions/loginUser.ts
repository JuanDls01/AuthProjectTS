import axios from 'axios';
import { ActionType } from './types';
import { Dispatch } from 'redux'

export interface loginAuthPayload {
    token: string | null,
    firstName: string | null,
    email: string | null,
    error: string | null,
}

export interface loginAuthAction {
    type: ActionType.LOGIN_USER,
    payload: loginAuthPayload,
}

interface input {
    email: string,
    password: string,
}

const loginUser = async (input: input): Promise<loginAuthAction> => {
    const json = await axios.post<loginAuthPayload>("http//localhost:3001/api/auth/login", input);
    return {
        type: ActionType.LOGIN_USER,
        payload: json.data
    }
}

export default loginUser;
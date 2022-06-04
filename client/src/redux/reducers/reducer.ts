import { Action, Payload } from '../actions/index'
import { ActionType } from '../actions/types';

type initialState = Payload;

const initialState: initialState = {
    token: null,
    firstName: null,
    email: null,
    error: null,
}



// type Action = loginAuthAction

const loginReducer = (state: initialState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.LOGIN_USER: {
            return {
                ...state,
                token: action.payload.token,
                firstName: action.payload.firstName,
                email: action.payload.email,
            }
        }
        default:
            return state;
    }
}

export default loginReducer;

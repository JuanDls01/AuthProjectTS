import { ActionTypes } from '../actions/types';
import { UserAuth, loginTokenAction } from '../actions/loginToken';

const initialState: UserAuth = {
    user: null,
    token: null,
    error: null
}

export const loginTokenReducer = (state = initialState, action: loginTokenAction) => {
    switch (action.type) {
        case ActionTypes.LOGIN_TOKEN:
            return {
                ...state,
                user: action.payload.user ? action.payload.user : null,
                token: action.payload.token ? action.payload.token : null,
                error: action.payload.error ? action.payload.error : null,
            };
        default:
            return state;
    }
}
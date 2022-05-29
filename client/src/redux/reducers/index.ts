import { userToken, loginTokenAction, resLoginToken } from '../actions/loginToken';

import { actions } from '../actions';

const { LOGIN_TOKEN, } = actions;

interface stateReducer {
    user: userToken | string;
    token: string;
    tokenError: string | null;
}

interface actionReducer {
    type: string;
    payload: resLoginToken,
}

const initialState: stateReducer = {
    user: "",
    token: '',
    tokenError: null,
}

const rootReducer = (state: stateReducer = initialState, action: actionReducer) => {
    switch (action.type) {
        case LOGIN_TOKEN: {
            return {
                ...state,
                user: action.payload.user ? action.payload.user : "error",
                token: action.payload.token ? action.payload.token : "",
                tokenError: action.payload.error ? action.payload.error : null,
            };
        };
        default:
            return state;
    }
};

export default rootReducer;
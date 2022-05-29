
// import { ActionTypes } from "../actions/types";
import { loginTokenAction, resLoginToken, userToken } from "../actions/loginToken";

// interface stateLoginToken {
//     user: userToken | string;
//     token: string;
//     tokenError: string | null;
// }

// const initialState = {
//     user: {},
//     token: "",
//     error: "",
// }

// export const loginTokenReducer = (state: stateLoginToken, action: loginTokenAction) => {
//     switch (action.type) {
//         case ActionTypes.LOGIN_TOKEN:
//             return {
//                 ...state,
//                 user: action.payload.user ? action.payload.user : "error",
//                 token: action.payload.token ? action.payload.token : "",
//                 tokenError: action.payload.error ? action.payload.error : null,
//             }
//         default:
//             return state;
//     }
// };
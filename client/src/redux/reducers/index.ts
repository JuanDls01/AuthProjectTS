import { combineReducers } from "redux";
import loginReducer from "./reducer";

const reducers = combineReducers({
    loginUser: loginReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>
import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./reducer";

const reducers = combineReducers({
    loginUser: loginReducer
})

export default reducers;
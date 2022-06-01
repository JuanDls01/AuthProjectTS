import { combineReducers } from 'redux';
import { UserAuth } from '../actions/loginToken';
import { loginTokenReducer } from '../reducers/loginToken.reducer'

interface StoreState {
    authUser: UserAuth
}

const reducers = combineReducers({
    UserAuthState: loginTokenReducer,
});

export default reducers;
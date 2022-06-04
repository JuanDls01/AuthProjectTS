import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import reducers from '../reducers/index';

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)


export default store;
// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
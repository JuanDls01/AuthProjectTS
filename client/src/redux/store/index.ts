import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'; // Link to documentation: https://redux-toolkit.js.org/api/configureStore
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import thunk from 'redux-thunk';

import { Reducer } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';

// import rootReducer from "../reducer";

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
    // 
})

export default store;
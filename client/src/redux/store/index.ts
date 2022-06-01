import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'; // Link to documentation: https://redux-toolkit.js.org/api/configureStore
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import thunk from 'redux-thunk';

import { Reducer } from '@reduxjs/toolkit';
import reducers from '../reducers/index';

// import rootReducer from "../reducer";

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

// const store = configureStore({
//     reducer: reducers,
//     middleware: [thunk]
//     // (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
//     // 
// })

export default store;

export type RootState = ReturnType<typeof store.getState>
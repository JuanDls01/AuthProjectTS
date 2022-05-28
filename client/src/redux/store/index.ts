import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'; // Link to documentation: https://redux-toolkit.js.org/api/configureStore
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import thunk from 'redux-thunk';

// import rootReducer from "../reducer";

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// const store = configureStore({
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// })

// export default store;
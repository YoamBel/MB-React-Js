import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './RegistAndLogin/reducer';


const rootReducer =  combineReducers({
    user:userReducer,
   
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;

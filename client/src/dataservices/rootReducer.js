import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from "redux"
import thunkMiddleware from 'redux-thunk'
import  authReducer  from "./auth/authReducer"




export const rootReducer = createStore(combineReducers({
    auth: authReducer
}), applyMiddleware(thunkMiddleware))


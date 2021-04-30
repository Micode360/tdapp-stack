import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from "redux"
import thunkMiddleware from 'redux-thunk'
import  authReducer  from "./auth/authReducer"
import userReducer from "./user/userReducer"



export const rootReducer = createStore(combineReducers({
    auth: authReducer,
    user: userReducer
}), applyMiddleware(thunkMiddleware))


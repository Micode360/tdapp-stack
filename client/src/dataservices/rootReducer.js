import { createStore } from 'redux';
import { combineReducers } from "redux"
import  authReducer  from "./auth/authReducer"




export const rootReducer = createStore(combineReducers({
    section: authReducer
}))


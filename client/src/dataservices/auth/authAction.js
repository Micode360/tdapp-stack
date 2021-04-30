import axios from "axios";
import { 
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   LOGIN_SUCCESS,
   LOGIN_FAIL
 } from "../types"




    export const registerationAction = (state) => {
      return (dispatch, getState) => {
               axios.post('http://localhost:5000/auth/signUp', state)
                 .then(() => {
                   dispatch({ type:REGISTER_SUCCESS, payload:'Registeration success' })
                 }).catch((err) => {                 
                  if (err.response) {
                  dispatch({ type:REGISTER_FAIL, payload: err.response.data })
              }
                 })
      }
   }

   export const signInAction = (state) => {
      return (dispatch, getState) => {
               axios.post('http://localhost:5000/auth/signIn', state)
                 .then((response) => {
                   dispatch({ type:LOGIN_SUCCESS, payload: response.data })
                 }).catch((err) => {                 
                  if (err.response) {
                   dispatch({ type:LOGIN_FAIL, payload: err.response.data })
              }
            })
      }
   }










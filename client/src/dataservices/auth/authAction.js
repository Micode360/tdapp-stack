import axios from "axios";
import { 
   REGISTER_SUCCESS,
   REGISTER_FAIL
 } from "../types"




    export const registerationAction = (state) => {
      return (dispatch, getState) => {
               axios.post('http://localhost:5000/signUp/post', state)
                 .then((response) => {
                  dispatch({ type:REGISTER_SUCCESS, payload: response.data.message})
                 }).catch((err) => {
                  dispatch({ type:REGISTER_FAIL, payload: 'SignUp Failed' })
                 })
      }

   }










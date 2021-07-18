import axios from "axios"
import {
    POST_ACTIVITY_SUCCESS,
    POST_ACTIVITY_FAIL,
    LOAD_DATA
} from "../types"


export const loadData = (data) => {
    return (dispatch, getState) => {
        dispatch({
          type: LOAD_DATA,
          payload: data 
        })
    }
}


export const postActivity = (state) => {
    return (dispatch, getState) => {
        axios.post('http://localhost:5000/user/postActivity', state )
          .then((response) => {
               console.log(response, 'action');
            dispatch({ type:POST_ACTIVITY_SUCCESS, payload: response.data })
          }).catch((err) => {                 
           if (err.response) {
            dispatch({ type:POST_ACTIVITY_FAIL, payload: err.response.data })
       }
     })
}
}




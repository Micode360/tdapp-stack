import {
    LOGOUT_SUCCESS
} from '../types'


const initialState = {
    logOutSuccessMessage: null
};


export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case LOGOUT_SUCCESS:
                localStorage.removeItem('access-tkn');
             return { ...state, logOutSuccessMessage : action.type } 
        default:
            break;
    }
    return state

}
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from '../types'


const initialState = {
    authRegMessage: null,
    authErrorMessage: null,
    signInErrorMessage: null,
    signInSuccessPayload: null,
    logOutSuccessMessage: null
}


export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
             return { ...state, authRegMessage: action.payload }
        case REGISTER_FAIL:
            return { ...state, authErrorMessage: action.payload }
        case LOGIN_SUCCESS:
            localStorage.setItem('access-tkn', action.payload.token)
            return { ...state, signInSuccessPayload: action.payload }
        case LOGIN_FAIL:
        return { ...state, signInErrorMessage: action.payload }
        case LOGOUT_SUCCESS:
                localStorage.removeItem('access-tkn');
             return { ...state, logOutSuccessMessage : action.type } 
        default:
            break;
    }
    return state

}
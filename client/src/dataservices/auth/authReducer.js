import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../types'


const initialState = {
    authRegMessage: null,
    authErrorMessage: null,
    signInErrorMessage: null,
    signInSuccessPayload: null
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
        default:
            break;
    }
    return state

}
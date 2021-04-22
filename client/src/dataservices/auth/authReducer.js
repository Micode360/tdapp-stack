import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../types'


const initialState = {
    authRegMessage: null,
    authErrorMessage: null,
    signInErrorMessage: null
}


export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
             return { ...state, authRegMessage: action.payload }
        case REGISTER_FAIL:
            return { ...state, authErrorMessage: action.payload }
        case LOGIN_SUCCESS:
            console.log(action, 'login successful')
            return { ...state, authRegMessage: action.payload }
        case LOGIN_FAIL:
        console.log(action, 'login fail')
        return { ...state, signInErrorMessage: action.payload }
        default:
            break;
    }
    return state

}
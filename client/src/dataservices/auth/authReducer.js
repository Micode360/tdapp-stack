import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../types'


const initialState = {
    authRegMessage: null
}


export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            console.log(action)
             return { ...state, authRegMessage: action.payload }
            case REGISTER_FAIL:
            return { ...state, authRegMessage: action.payload }
        default:
            break;
    }
    return state

}
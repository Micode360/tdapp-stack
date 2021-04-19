// import {
//     REGISTER_SUCCESS
// } from '../types'


export default function authReducer (state = null, action) {
    // switch (action.type) {
    //     case REGISTER_SUCCESS:
    //         return state
    //     default:
    //         break;
    // }
     console.log({
        state: state,
        action: action
    }, 'auth reducer')

    return state
}
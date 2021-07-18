import {
    POST_ACTIVITY_SUCCESS,
    POST_ACTIVITY_FAIL,
    LOAD_DATA
} from '../types'


const initialState = {
    loadData: {
        initials: '',
        load: {}
    },
    postSuccessData: null,
    postErrorData: null
};


export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_DATA:
            return { ...state, loadData: action.payload }
        case POST_ACTIVITY_SUCCESS:
            console.log(state, 'state')
            return { ...state, postSuccessData: action.payload }
            case POST_ACTIVITY_FAIL:
                return { ...state, postErrorData: action.payload }
        default:
            break;
    }
    return state

}
import axios from "axios";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "../types"




export const storeData = async (action, formData) => {
    if (action !== REGISTER_SUCCESS) return REGISTER_FAIL;
    else {
            return axios.post('http://localhost:5000/register/post', formData)
    }
}

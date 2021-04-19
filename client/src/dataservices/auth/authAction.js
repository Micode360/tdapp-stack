import axios from "axios";
import { REGISTER_SUCCESS } from "../types"

export const registerationAction = async (state) => {
        axios.post('http://localhost:5000/signUp/post', state).then((res) => {
            return res.json();
    }).then(data => {
        console.log(data, 'action')
        return data
    }).catch((err)=>{
        console.log(err, 'error')
        return err;
    })
}





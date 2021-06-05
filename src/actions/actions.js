import {GET_ALLUSERS , GET_SINGLEUSER} from './constants'
import axios from "axios"


const API = "https://reqres.in/api/users"
export const getAllUser = () => async dispatch =>{
    try {
        const res = await axios.get(API)

        dispatch({
            type : GET_ALLUSERS,
            payload : res.data
        })
    } catch (err){
        console.log(err)
    }
} 
import {CLEAR_PROFILE, GET_ALLUSERS , GET_SINGLEUSER} from './constants'
import axios from "axios"


const API = "https://reqres.in/api/users?delay=1"
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

export const getSingleUser = (Id) => async dispatch => {
    //   console.log(Id)
        try {
            const response = await axios.get(`https://reqres.in/api/users/${Id}`)

            dispatch({
                type : GET_SINGLEUSER,
                payload : response.data.data
            })
        } catch (err) {
            console.log(err)
        }
}

export const clearProfile = () => dispatch => {
    dispatch({
        type : CLEAR_PROFILE
    })
}
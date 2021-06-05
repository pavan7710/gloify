import {CLEAR_PROFILE, GET_SINGLEUSER} from '../actions/constants'


const initialstate = {
    profile : null
}

 const profile = (state=initialstate , action) => {
     const {type , payload} = action

     switch(type){
         case GET_SINGLEUSER:
             return {
                 ...state,
                 ...payload
             }
        case CLEAR_PROFILE:
            return{
                ...state,
                profile: null
            }
        default : 
            return state
     }
 }

 export default profile
import {GET_ALLUSERS , GET_SINGLEUSER} from '../actions/constants'


const initialstate = {
    loading : true
}

 const userReducer = (state=initialstate , action) => {
     const {type , payload} = action

     switch(type){
         case GET_ALLUSERS:
             return {
                 ...state,
                ...payload,
                loading : false
             }
        
        default : 
            return state
     }
 }

 export default userReducer
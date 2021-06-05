import {combineReducers} from 'redux'
import userReducer from './userReducer'
import profile from './profileReducer'


const rootReducer = combineReducers({
    userReducer,
    profile
})

export default rootReducer
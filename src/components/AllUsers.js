import React , {useEffect} from 'react'
import {connect} from 'react-redux'
import { getAllUser } from '../actions/actions'

const AllUsers = ({getAllUser , users }) => {
   // console.log(users)
    useEffect(()=>{
        getAllUser()
    }, [getAllUser])

    return (
        <div>
            <p>pavan</p>
        </div>
    )
}

const mapStateToProps = (state) => {
   // console.log(state)
   // console.log(state.userReducer.data)
    return{
        users : state.userReducer.data
    }
}


export default connect(mapStateToProps , {getAllUser})(AllUsers)

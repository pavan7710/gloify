import React , {useEffect , Fragment} from 'react'
import {connect} from 'react-redux'
import { getAllUser } from '../actions/actions'
import Spinner from '../layout/Spinner'
import Usercard from './Usercard'
const AllUsers = ({getAllUser , users : {loading , data} }) => {
    //({users : {loading , data}})
 //  console.log(users)
  console.log(loading, data)
  console.log(data)
    useEffect(()=>{
        getAllUser()
    }, [getAllUser])

    return (
     <Fragment>
         {loading ? (<Fragment>
             <Spinner/>
         </Fragment>) : (
             <div className="row">

                 {data.map((user) => {
                     return(
                         <div  className="col-lg-4 col-md-3">
                         <Usercard key={user.id} user={user}/>
                         </div>
                     )

                 })}
            </div>
         )}
     </Fragment>
    )
}

const mapStateToProps = (state) => {
 //   console.log(state.userReducer.data)
    return{
        users : state.userReducer
    }
}


export default connect(mapStateToProps , {getAllUser})(AllUsers)

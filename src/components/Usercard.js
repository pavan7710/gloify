import React, { Fragment } from 'react'

const Usercard = ({user}) => {

  
    return (
     <div className="container">
           <div className="card" >
            <img className="card-img-top" src={user.avatar} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">FirstName:{user.first_name}</h5>
                <h5 className="card-title">LastName:{user.last_name}</h5>
                <h5 className="card-title">Email:{user.email}</h5>
            </div>
        </div>

     </div>
    )
}

export default Usercard

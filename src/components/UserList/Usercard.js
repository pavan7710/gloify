import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Usercard = ({user}) => {

    return (
           <div className="card m-3" >
            <img className="card-img-top" src={user.avatar} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">FirstName:{user.first_name}</h5>
                <h5 className="card-title">LastName:{user.last_name}</h5>
                <h5 className="card-title">Email:{user.email}</h5>

                <Link className="btn btn-primary" to={`/users/${user.id}`}>View Profile</Link>
            </div>
        </div>

    )
}

export default Usercard

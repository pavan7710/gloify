import React , {useEffect} from 'react'
import { connect } from 'react-redux'
import { getSingleUser } from '../../actions/actions'

const Userprofile = ({getSingleUser ,match , profile}) => {

    useEffect(()=>{
        getSingleUser(match.params.id)
    },[getSingleUser])
    const imageStyle = {
        height : '500px',
        width : '500px'
    }
    return (
        <div className="container text-center flex-column p-3 d-flex justify-content-center aligin-items-center">
            <div>
            <h3>
                {profile.first_name}
            </h3>
            </div>
            <div>
                <img style={imageStyle}   src={profile.avatar}/>
            </div>
            <div>
                <h3>
                    last name:{profile.last_name}
                </h3>

                <h3>
                    last name:{profile.email}
                </h3>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile : state.profile
    }
}

export default connect(mapStateToProps , {getSingleUser})(Userprofile)

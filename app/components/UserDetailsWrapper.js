import React,{PropTypes} from 'react';
import UserDetails from './UserDetails';


function UserDetailsWrapper({header,children}){
    return(
        <div className="col-sm-6">
            <p className="lead">{header}</p>
            {children}
        </div>
    )
}

UserDetailsWrapper.propTypes = {
    header: PropTypes.string.isRequired
}

export default UserDetailsWrapper;

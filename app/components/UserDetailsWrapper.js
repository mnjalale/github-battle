var React = require('react');
var PropTypes = React.PropTypes;
var UserDetails = require('./UserDetails');


function UserDetailsWrapper(props){
    return(
        <div className="col-sm-6">
            <p className="lead">{props.header}</p>
            {props.children}
        </div>
    )
}

UserDetailsWrapper.propTypes = {
    header: PropTypes.string.isRequired
}

module.exports = UserDetailsWrapper;

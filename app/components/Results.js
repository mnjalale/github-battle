var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var UserDetails = require('../components/UserDetails');

function puke(obj){
    return <pre>{JSON.stringify(obj,2,' ')}</pre>
}

function Results(props){
    return props.isLoading===true
        ? <p>Loading...</p>
        :   <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Results</h1>
        <div className="col-sm-8 col-sm-offset-2">
            <UserDetailsWrapper header="Player 1">
                <UserDetails score={props.scores[0]} info={props.playersInfo[0]} />
            </UserDetailsWrapper>
            <UserDetailsWrapper header="Player 2">
                <UserDetails score={props.scores[1]} info={props.playersInfo[1]} />
            </UserDetailsWrapper>

        </div>
    </div>
}

Results.propTypes ={
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

module.exports = Results;


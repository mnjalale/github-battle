var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render:function(){
        return(
            <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
                <h1>Github Battle</h1>
                <p className="lead">Some fancy motto</p>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-lg btn-success">Get Started</button>
                </Link>
            </div>
        )
    }
});

module.exports = Home;
var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
    contextTypes:{
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
            isLoading:true,
            playerInfo:[]
        }
    },
    componentDidMount:function(){
        var query = this.props.location.query;
        //https://egghead.io/playlists/the-this-key-word-250c37d9
        githubHelpers.getPlayersInfo([query.playerOne,query.playerTwo])
            .then(function(players){
                this.setState({
                    playerInfo:players,
                    isLoading:false

                });
                console.log(players);
            }.bind(this));
    },
    render: function(){
        return(
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playerInfo={this.state.playerInfo}/>
        )
    }
});

module.exports = ConfirmBattleContainer;

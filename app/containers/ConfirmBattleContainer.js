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
            playersInfo:[]
        }
    },
    componentDidMount:function(){
        var query = this.props.location.query;
        //https://egghead.io/playlists/the-this-key-word-250c37d9
        githubHelpers.getPlayersInfo([query.playerOne,query.playerTwo])
            .then(function(players){
                this.setState({
                    playersInfo:players,
                    isLoading:false

                });
                console.log(players);
            }.bind(this));
    },
    handleInitiateBattle:function(){
        this.context.router.push({
            pathName:'/results',
            state:{
                playersInfo: this.state.playersInfo
            }
        });
    },
    render: function(){
        return(
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={this.handleInitiateBattle}
                playersInfo={this.state.playersInfo}/>
        )
    }
});

module.exports = ConfirmBattleContainer;

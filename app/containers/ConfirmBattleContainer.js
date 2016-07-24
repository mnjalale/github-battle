import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import { getPlayersInfo } from '../utils/githubHelpers';


const ConfirmBattleContainer = React.createClass({
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
        const { query } = this.props.location;
        //https://egghead.io/playlists/the-this-key-word-250c37d9
        getPlayersInfo([query.playerOne,query.playerTwo])
            .then(function(players){
                this.setState({
                    playersInfo:players,
                    isLoading:false

                });
            }.bind(this));
    },
    handleInitiateBattle:function(){
        this.context.router.push({
            pathname:'/results',
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

export default ConfirmBattleContainer;

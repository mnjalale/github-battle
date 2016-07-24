import React from 'react';
import Prompt from '../components/Prompt';

const PromptContainer = React.createClass({
    contextTypes:{
        router:React.PropTypes.object.isRequired
    },
    getInitialState(){
        return{
            username:''
        }
    },
    handleUpdateUser(e){
        this.setState({
            username:e.target.value
        });
    },
    handleSubmitUser(e){
        e.preventDefault();
        const { username }  = this.state;
        this.setState({
            username:''
        });

        const {playerOne} = this.props.routeParams;
        if(playerOne){
            this.context.router.push({
                pathname:'/battle',
                query:{
                    playerOne:playerOne,
                    playerTwo: username
                }
            })
        }else{
            //Go to player 2
            this.context.router.push(`/playerTwo/${username}`);
        }
    },
    render(){
        return (
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username}/>
        );
    }
});

export default PromptContainer;
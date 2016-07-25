import React from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends React.Component {
    constructor() {
        super();
        this.state= {
            username: ''
        }
    }

    handleUpdateUser(e) {
        this.setState({
            username: e.target.value
        });
    }

    handleSubmitUser(e) {
        e.preventDefault();
        const { username }  = this.state;
        this.setState({
            username: ''
        });

        const {playerOne} = this.props.routeParams;
        if (playerOne) {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: playerOne,
                    playerTwo: username
                }
            })
        } else {
            //Go to player 2
            this.context.router.push(`/playerTwo/${username}`);
        }
    }

    render() {
        return (
            <Prompt
                onSubmitUser={(event)=>this.handleSubmitUser(event)}
                onUpdateUser={(event)=>this.handleUpdateUser(event)}
                header={this.props.route.header}
                username={this.state.username}/>
        );
    }
}

PromptContainer.contextTypes={
    router:React.PropTypes.object.isRequired
};

export default PromptContainer;
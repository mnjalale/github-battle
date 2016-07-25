import React from 'react';
import Results from '../components/Results';
import { battle } from '../utils/githubHelpers'

class ResultsContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading:true,
            scores:[]
        }
    }
    async componentDidMount(){
        try{
            let scores = await battle(this.props.location.state.playersInfo);
            this.setState({
                scores,
                isLoading:false
            });
        }catch(error){
            console.warn('Errors occurred in ResultsContainer: ' + error);
        }
    }
    render(){
        return(
            <Results
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playersInfo}
                scores={this.state.scores}/>
        )
    }
}

export default ResultsContainer;


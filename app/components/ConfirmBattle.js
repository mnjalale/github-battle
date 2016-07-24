/**
 * Created by Martin on 18-Jul-16.
 */
import React, { PropTypes } from 'react';
import { space } from  '../styles';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from'./UserDetailsWrapper';
import MainContainer from './MainContainer';
import Loading from './Loading';

function puke(object){
    return <pre>{JSON.stringify(object,null,' ')}</pre>
}

function ConfirmBattle({isLoading,playersInfo,onInitiateBattle}){
    return isLoading===true
        ? <Loading text={'Confirming'} speed={300}/>
        :   <MainContainer>
                <h1>Confirm Players</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailsWrapper header="Player 1">
                        <UserDetails info={playersInfo[0]} />
                    </UserDetailsWrapper>
                    <UserDetailsWrapper header="Player 2">
                        <UserDetails info={playersInfo[1]} />
                    </UserDetailsWrapper>

                </div>
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-12" style={space}>
                        <button type="button" className="btu btn-lg btn-success" onClick={onInitiateBattle}>Initiate Battle</button>
                    </div>
                    <div className="col-sm-12" style={space}>
                        <Link to="/playerOne">
                            <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
                        </Link>
                    </div>
                </div>
            </MainContainer>

}

ConfirmBattle.propTypes={
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle:PropTypes.func.isRequired,
    playersInfo:PropTypes.array.isRequired
}

export default ConfirmBattle;

/**
 * Created by Martin on 18-Jul-16.
 */
var React = require('react');

function puke(object){
    return <pre>{JSON.stringify(object,null,' ')}</pre>
}

function ConfirmBattle(props){
    return props.isLoading===true
        ? <p>Loading...</p>
        : <div>Confirm Battle!: {puke(props)}</div>
}

module.exports = ConfirmBattle;

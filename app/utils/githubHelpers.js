var axios = require('axios');

var id = 'Your_Client_Id';
var sec='Your_Secret_Id';
var param = "?client_id" + id + "&client_secret" + sec;

function getUserInfo(username){
    return axios.get('http://api.github.com/users/' + username);
    //return axios.get('http://api.github.com/users/' + username + param)
}

var helpers ={
    getPlayersInfo: function(players){
        return axios.all(players.map(function(username){
            return getUserInfo(username);
        })).then(function(info){
            return info.map(function(user){
                return user.data;
            });
        }).catch(function(err){
            console.warn('Error in getPlayersInfo',err);
        });
    }
};

module.exports = helpers;



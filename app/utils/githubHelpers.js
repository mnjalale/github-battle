import axios from 'axios';

const id = 'Your_Client_Id';
const sec='Your_Secret_Id';
const param = "?client_id" + id + "&client_secret" + sec;

function getUserInfo(username='mnjalale'){
    return axios.get(`http://api.github.com/users/${username}`);
    //return axios.get('http://api.github.com/users/' + username + param)
}

function getRepos(username='mnjalale'){
    return axios.get(`http://api.github.com/users/${username}/repos?per_page=100`);
}

function getTotalStars(repos){
    return repos.data.reduce((prev,current)=> prev + current.stargazers_count,0);
}

function getPlayersData(player){
    return getRepos(player.login)
        .then(getTotalStars)
        .then((totalStars)=>{
            return {
                followers: player.followers,
                totalStars
            };
        });
}

function calculateScores(players){
    return [
        (players[0].followers * 3) +(players[0].totalStars),
        (players[1].followers * 3) +(players[1].totalStars)
    ];

}

export function getPlayersInfo(players){
    return axios.all(players.map((username)=>{
        return getUserInfo(username);
    })).then((info)=>{
        return info.map((user)=>{
            return user.data;
        });
    }).catch((err)=>{
        console.warn('Error in getPlayersInfo',err);
    });
}

export function battle(players){
    const playerOneData = getPlayersData(players[0]);
    const playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData,playerTwoData])
        .then(calculateScores)
        .catch((err)=>{
            console.log("Error in getPlayersInfo: " + err);
        });
}





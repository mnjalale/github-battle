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

async function getPlayersData(player){
    try{
        let repos = await getRepos(player.login);
        let totalStars = await getTotalStars(repos);
        return {
            followers: player.followers,
            totalStars
        };
    }catch(error){
        console.warn('Errors occurred in getPlayersData: ' + error);
    }
}

function calculateScores(players){
    return [
        (players[0].followers * 3) +(players[0].totalStars),
        (players[1].followers * 3) +(players[1].totalStars)
    ];

}

export async function getPlayersInfo(players){
    try{
        let info = await Promise.all(players.map((username)=>getUserInfo(username)));
        return info.map((user)=> user.data);
    }catch(error){
        console.warn('Error in getPlayersInfo',err);
    }
}

export async function battle(players){
    try{
        const playerOneData = getPlayersData(players[0]);
        const playerTwoData = getPlayersData(players[1]);
        const data = await Promise.all([playerOneData,playerTwoData]);
        return await calculateScores(data);
    }catch(error){
        console.warn('Error in getPlayersInfo: ',error)
    }
}





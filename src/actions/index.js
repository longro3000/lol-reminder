import axios from 'axios';
import history from '../history';
import champions from 'lol-champions';
import spells from 'lol-spells';

import Summoner from 'dump_data/SummonerData';
import LiveMatch from 'dump_data/ActiveMatch';

export const FETCH_SUMMONER = 'fetch_summoner';
export const FETCH_LIVE_MATCH = 'fetch_live_match';


let Region;
const Api_Key = 'RGAPI-8984769f-30c0-4da5-8416-dd1c0c8e44dd';

export const FetchSummoner = (region, summonerID) => async (dispatch) => {
    Region = region;
    const response = Summoner;
    /*const api = axios.create({
        baseURL: `https://${Region}.api.riotgames.com/lol/summoner/v4/summoners/by-name`,
    });

    const response = await api.get(`/${summonerID}?api_key=${Api_Key}`);*/  
    if (!response.status) {
        dispatch({ type: FETCH_SUMMONER, payload: response });
        history.push('./livematch');
    }
    else {

    }
};

export const FetchLiveMatch = (summonerID) => async (dispatch) => {
    const response = LiveMatch;
    /*const api = axios.create({
        baseURL: `https://${Region}./lol/spectator/v4/active-games/by-summoner/`,
    });

    const response = await api.get(`/${summonerID}`);*/
    if (!response.status) {
        dispatch({ type: FETCH_LIVE_MATCH, payload: response });
        history.push('./livematch');
    }
    else {

    }
}

export const FetchNotes = (player1, player2) => async (dispatch) => {
    
}
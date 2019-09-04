import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SummonerReducer from './SummonerReducer';
import LiveMatchReducer from './LiveMatchReducer';


export default combineReducers({
    summoner: SummonerReducer,
    liveMatch: LiveMatchReducer, 
    form: formReducer
});
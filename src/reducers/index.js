import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SummonerReducer from './SummonerReducer';
import LiveMatchReducer from './LiveMatchReducer';
import NotesReducer from './NotesReducer';



export default combineReducers({
    summoner: SummonerReducer,
    liveMatch: LiveMatchReducer,
    notes: NotesReducer,
    form: formReducer
});
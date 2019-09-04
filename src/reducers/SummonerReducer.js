import { FETCH_SUMMONER } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SUMMONER:
            return {...state, ...action.payload };
        default:
            return state;

    }
}
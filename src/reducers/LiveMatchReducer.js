import { FETCH_LIVE_MATCH } from 'actions';


export default (state={}, action) => {
    switch (action.type) {
        case FETCH_LIVE_MATCH:
            return {...state, ...action.payload };
        default:
            return state;
    }
}
import { FETCH_START_NOTES } from 'actions';

export default (state ={}, action) => {
    switch (action.type) {
        case FETCH_START_NOTES: 
            return {...state, ...action.payload};
        default:
            return state;
    }
}
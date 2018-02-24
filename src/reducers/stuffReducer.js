import initialState from './initialState';
import { FETCH_STUFF, RECEIVE_STUFF, INIT_STUFF, UPDATE_STUFF } from '../actions/actionTypes';

export default function stuff(state = initialState.stuff, action) {
    let newState;
    switch (action.type) {
        case FETCH_STUFF:
            console.log('FETCH_STUFF Action')
            return action;
        case RECEIVE_STUFF:
            newState = action.stuff;
            console.log('RECEIVE_STUFF Action')
            return newState;
        case INIT_STUFF:
            return state;
        case UPDATE_STUFF:
            newState = action.stuff;
            return Object.assign(newState);
        default:
            return state;
    }
}
import initialState from './initialState';
import { FETCH_STUFF, RECEIVE_STUFF, INIT_STUFF, UPDATE_STUFF } from '../actions/actionTypes';

export default function stuff(state = initialState, action) {
    let newState;
    switch (action.type) {
        case FETCH_STUFF:
            console.log('FETCH_STUFF Action')
            return action;
        case RECEIVE_STUFF:
            // newState = action.stuffApiData;
            newState = Object.assign({},state);
            newState.stuffApiData = [...action.stuffApiData];
            console.log('RECEIVE_STUFF Action')
            return newState;
        case INIT_STUFF:
            return state;
        case UPDATE_STUFF:
            newState = Object.assign({},state);
            newState.stuff=action.stuff;
            debugger;
            return newState;
        default:
            return state;
    }
}
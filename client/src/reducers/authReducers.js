import { FETCH_USER } from '../actions/types';

const initState = null; // user not logged in

export default function(state = initState, action) {

    switch (action.type) {

        case FETCH_USER:
            // api will return "" which is false below, so return false
            return action.payload || false;

        default:
            return state;
    }
}
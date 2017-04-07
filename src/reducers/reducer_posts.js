/**
 * Created by chris on 01/04/2017.
 */
import { FETCH_EVENTLIST, FETCH_DETAIL} from '../actions/index';

const INITIAL_STATE = {all : [] };


export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_EVENTLIST:
            return { ...state, all: action.payload.data};

        case FETCH_DETAIL:
            return { ...state, post: action.payload.data};

        default:
            return state;
    }
}
import { Map } from 'immutable';

export default function(state = Map(), action = {}) {

    switch(action.type) {
        case 'SET_PAIR':
            return state.merge(Map({
                pair: action.pair
            }));

        case 'SHOW_RESULT':
            return state.merge(Map({
                result: action.result
            }));
    }

    return state;
}
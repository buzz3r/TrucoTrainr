import { Map } from 'immutable';
import { compare, getPair } from '../logic/TrucoLogic';

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

        case 'SUBMIT_CARD': {

            const pair = state.get('pair');
            const result = compare(pair.get(0), pair.get(1));
            console.log(result, action.card);
            const correct = result === action.card;

            return state.merge(Map({
                pair: getPair(),
                result: Map({
                    correct,
                    result
                })
            }));
        }

        default:
            return state;
    }
}
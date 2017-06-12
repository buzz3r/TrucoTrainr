import { expect } from 'chai';
import compareReducer from './compareReducer'
import { createCard, Faces, Suits } from '../constants/Cards';
import { Map, List } from 'immutable';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

describe('The compareReducer', () => {

    it('should handle an undefined initial state', () => {

        const nextState = compareReducer(undefined, {});
        expect(nextState).to.equal(Map());
    });

    it('should handle an undefined action', () => {

        const nextState = compareReducer(undefined, undefined);
        expect(nextState).to.equal(Map());
    });

    it('should handle SET_PAIR by setting a pair of cards', () => {

      const initialState = Map();
      const aceOfSpades = createCard(Suits.spades, Faces.A);
      const queenOfHearts = createCard(Suits.hearts, Faces.Q);
      const expectedState = Map({
          pair: List.of(aceOfSpades, queenOfHearts)
      })
      const action = {
         type: 'SET_PAIR',
         pair: List.of(aceOfSpades, queenOfHearts)
      }

      const nextState = compareReducer(initialState, action);
      expect(nextState).to.be.equal(expectedState);
   });

    it('should handle SHOW_RESULT by adding result to state', () => {

        const action = {
            type: 'SHOW_RESULT',
            result: Map({
                correct: true,
                result: "A Spades"
            })
        }

        const expectedState = Map({
           result: Map({
               correct: true,
               result: "A Spades"
           })
        });

        expect(compareReducer(undefined, action)).to.equal(expectedState);
    });

    it('should handle SUBMIT_CARD by evalutation the submitted cards', () => {
        const firstCard = createCard(Suits.hearts, Faces.Q);
        const secondCard = createCard(Suits.spades, Faces.four);

        const initialState = Map({
            pair: List.of(firstCard, secondCard)
        });

        const action = {
            type: 'SUBMIT_CARD',
            card: firstCard
        }

        const expectedResult= Map({
                correct: true,
                result: firstCard
        });
        const result = compareReducer(initialState, action).get('result');
        expect(result).to.equal(expectedResult);
    });

    it('should set a new pair once a card has been submitted', () => {
        const firstCard = createCard(Suits.hearts, Faces.Q);
        const secondCard = createCard(Suits.spades, Faces.four);
        const pair = List.of(firstCard, secondCard);

        const initialState = Map({
            pair
        });
        const action = {
            type: 'SUBMIT_CARD',
            card: firstCard
        }

        const nextState = compareReducer(initialState, action);
        const newPair = nextState.get('pair');

        expect(pair).not.to.be.equal(newPair);
    });
});
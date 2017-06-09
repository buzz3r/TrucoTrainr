import { expect } from 'chai';
import * as TrucoService from './TrucoService';
import * as Cards from '../constants/Cards';

describe('The TrucoService', () => {
   it('can compare to cards', () => {

       const aceOfSpades = Cards.createCard(Cards.Suits.spades, Cards.Faces.A);
       const tenOfClubs = Cards.createCard(Cards.Suits.clubs, Cards.Faces.ten);
       const result = TrucoService.compare(aceOfSpades, tenOfClubs);
       expect(result).not.to.equal(undefined);
   });



});
import { expect } from 'chai';
import * as TrucoLogic from './TrucoLogic';
import * as Cards from '../constants/Cards';

describe('The TrucoLogic', () => {

   it('returns the card with the highest ranking', () => {
       const fourOfClubs = Cards.createCard(Cards.Suits.clubs, Cards.Faces.four);
       const threeOfClubs = Cards.createCard(Cards.Suits.clubs, Cards.Faces.three);
       let result = TrucoLogic.compare(fourOfClubs, threeOfClubs);
       expect(result).to.equal(fourOfClubs);

       result = TrucoLogic.compare(threeOfClubs, fourOfClubs);
       expect(result).to.equal(fourOfClubs);

       const sevenOfDiamonds = Cards.createCard(Cards.Suits.diamonds, Cards.Faces.seven);
       result = TrucoLogic.compare(sevenOfDiamonds, threeOfClubs);
       expect(result).to.equal(sevenOfDiamonds);

       const aceOfHearts = Cards.createCard(Cards.Suits.hearts, Cards.Faces.A);
       result = TrucoLogic.compare(aceOfHearts, aceOfHearts);
       expect(result).to.equal(null);

       result = TrucoLogic.compare(threeOfClubs, aceOfHearts);
       expect(result).to.equal(threeOfClubs);
   });

   it('returns a pair of two random cards', () => {
      const pair = TrucoLogic.getPair();
      expect(pair).not.to.be.null;
      expect(pair.size).to.equal(2);
   });




});
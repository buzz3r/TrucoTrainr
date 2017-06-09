import { expect } from 'chai';

import { Suits, Faces, createCard } from './Cards';

describe('A card game', () => {
    it('should have all suits', () => {
        expect(Suits.clubs).to.equal('Clubs');
        expect(Suits.spades).to.equal('Spades');
        expect(Suits.hearts).to.equal('Hearts');
        expect(Suits.diamonds).to.equal('Diamonds');
    })

    it('should have faces from 7 to A', () => {
        expect(Faces.two).to.equal('2');
        expect(Faces.three).to.equal('3');
        expect(Faces.four).to.equal('4');
        expect(Faces.five).to.equal('5');
        expect(Faces.six).to.equal('6');
        expect(Faces.seven).to.equal('7');
        expect(Faces.J).to.equal('J');
        expect(Faces.Q).to.equal('Q');
        expect(Faces.K).to.equal('K');
        expect(Faces.A).to.equal('A');
    });

    it('a card should have a face and suit', () => {
        const card = createCard(Suits.spades, Faces.A);
        expect(card.face).to.equal(Faces.A);
        expect(card.suit).to.equal(Suits.spades);
    });
});

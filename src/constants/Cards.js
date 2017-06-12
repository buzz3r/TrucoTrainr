
export const Suits = {
    spades: 'Spades',
    clubs: 'Clubs',
    hearts: 'Hearts',
    diamonds: 'Diamonds'
};

export const Faces = {
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    J: 'J',
    Q: 'Q',
    K: 'K',
    A: 'A',
}

export function createCard(suit, face) {
    return {
        suit,
        face,
        toString: function() {
            return face + ' of ' + suit;
        }
    }
}
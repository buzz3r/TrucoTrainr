
export const Suits = {
    spades: 'Spades',
    clubs: 'Clubs',
    hearts: 'Hearts',
    diamonds: 'Diamonds'
};

export const Faces = {
    seven: '7',
    eight: '8',
    nine: '9',
    ten: '10',
    J: 'J',
    Q: 'Q',
    K: 'K',
    A: 'A',
}

export function createCard(suit, face) {
    return {
        suit,
        face
    }
}
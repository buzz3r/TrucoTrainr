import {createCard, Suits, Faces } from '../constants/Cards'
import getRandomInt from './RandomHelper';
import { List } from 'immutable';

export function compare(firstCard, secondCard) {
    if(getRankingOfCard(firstCard) > getRankingOfCard(secondCard)) {
        return firstCard;
    } else if(getRankingOfCard(firstCard) < getRankingOfCard(secondCard)) {
        return secondCard;
    }

    return null;
}

export function getPair() {
    return List.of(getRandomCard(), getRandomCard());
}

function getRandomCard() {
    return createCard(getRandomSuit(), getRandomFace());
}

function getRandomSuit() {
    const index = getRandomInt(0, 4);
    switch(index) {
        case 0: return Suits.spades;
        case 1: return Suits.clubs;
        case 2: return Suits.diamonds;
        case 3: return Suits.hearts;
        default: return null;
    }
}

function getRandomFace() {
    const index = getRandomInt(0, 10);
    switch(index) {
        case 0: return Faces.two;
        case 1: return Faces.three;
        case 2: return Faces.four;
        case 3: return Faces.five;
        case 4: return Faces.six;
        case 5: return Faces.seven;
        case 6: return Faces.Q;
        case 7: return Faces.J;
        case 8: return Faces.K;
        case 9: return Faces.A;
        default: return null;
    }
}

function getRankingOfCard(card) {
    return Ranking[card.toString()];
}

const Ranking = createRanking();
function createRanking() {
    let ranking = {};
    ranking[createCard(Suits.clubs, Faces.four).toString()] = 100;
    ranking[createCard(Suits.hearts, Faces.seven).toString()] = 99;
    ranking[createCard(Suits.spades, Faces.A).toString()] = 98;
    ranking[createCard(Suits.diamonds, Faces.seven).toString()] = 97;
    ranking[createCard(Suits.diamonds, Faces.three).toString()] = 96;
    ranking[createCard(Suits.spades, Faces.three).toString()] = 96;
    ranking[createCard(Suits.hearts, Faces.three).toString()] = 96;
    ranking[createCard(Suits.clubs, Faces.three).toString()] = 96;
    ranking[createCard(Suits.spades, Faces.two).toString()] = 95;
    ranking[createCard(Suits.hearts, Faces.two).toString()] = 95;
    ranking[createCard(Suits.clubs, Faces.two).toString()] = 95;
    ranking[createCard(Suits.clubs, Faces.two).toString()] = 95;
    ranking[createCard(Suits.hearts, Faces.A).toString()] = 94;
    ranking[createCard(Suits.clubs, Faces.A).toString()] = 94;
    ranking[createCard(Suits.diamonds, Faces.A).toString()] = 94;
    ranking[createCard(Suits.diamonds, Faces.K).toString()] = 93;
    ranking[createCard(Suits.clubs, Faces.K).toString()] = 93;
    ranking[createCard(Suits.hearts, Faces.K).toString()] = 93;
    ranking[createCard(Suits.spades, Faces.K).toString()] = 93;
    ranking[createCard(Suits.diamonds, Faces.J).toString()] = 92;
    ranking[createCard(Suits.clubs, Faces.J).toString()] = 92;
    ranking[createCard(Suits.hearts, Faces.J).toString()] = 92;
    ranking[createCard(Suits.spades, Faces.J).toString()] = 92;
    ranking[createCard(Suits.diamonds, Faces.Q).toString()] = 91;
    ranking[createCard(Suits.clubs, Faces.Q).toString()] = 91;
    ranking[createCard(Suits.hearts, Faces.Q).toString()] = 91;
    ranking[createCard(Suits.spades, Faces.Q).toString()] = 91;
    ranking[createCard(Suits.spades, Faces.seven).toString()] = 90;
    ranking[createCard(Suits.clubs, Faces.seven).toString()] = 90;
    ranking[createCard(Suits.diamonds, Faces.six).toString()] = 90;
    ranking[createCard(Suits.clubs, Faces.six).toString()] = 90;
    ranking[createCard(Suits.hearts, Faces.six).toString()] = 90;
    ranking[createCard(Suits.spades, Faces.six).toString()] = 90;
    ranking[createCard(Suits.diamonds, Faces.five).toString()] = 89;
    ranking[createCard(Suits.clubs, Faces.five).toString()] = 89;
    ranking[createCard(Suits.hearts, Faces.five).toString()] = 89;
    ranking[createCard(Suits.spades, Faces.five).toString()] = 89;
    ranking[createCard(Suits.diamonds, Faces.four).toString()] = 88;
    ranking[createCard(Suits.hearts, Faces.four).toString()] = 88;
    ranking[createCard(Suits.spades, Faces.four).toString()] = 88;
    return ranking;
}
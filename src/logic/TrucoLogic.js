import {createCard, Suits, Faces } from '../constants/cards'


export function compare(firstCard, secondCard) {

    if(getRankingOfCard(firstCard) > getRankingOfCard(secondCard)) {
        return firstCard;
    } else if(getRankingOfCard(firstCard) < getRankingOfCard(secondCard)) {
        return secondCard;
    }

    return null;
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
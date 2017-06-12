import React from 'react';
import styled from 'styled-components';
import { Suits, Faces } from '../constants/Cards';
import './Card.css';

export default class Card extends React.Component {

    getColor(card) {
        return (card.suit === Suits.hearts || card.suit === Suits.diamonds)
            ? 'red' : 'black';
    }

    getBackgroundImage(card) {

        const suitIndex = this.getSuitIndex(card.suit);
        const faceIndex = this.getFaceIndex(card.face);

        return suitIndex + '_' + faceIndex + '.svg';
    }

    getFaceIndex(face) {
        switch(face) {
            case Faces.two: return 2;
            case Faces.three: return 3;
            case Faces.four: return 4;
            case Faces.five: return 5;
            case Faces.six: return 6;
            case Faces.seven: return 7;
            case Faces.Q: return 12;
            case Faces.J: return 11;
            case Faces.K: return 13;
            default: return 0;
        }
    }

    getSuitIndex(suit) {
        switch(suit) {
            case Suits.spades: return 0;
            case Suits.hearts: return 1;
            case Suits.clubs: return 2;
            case Suits.diamonds: return 3;
            default: return 0;
        }
    }

    render() {
        const card = this.props.card;

        const color = this.getColor(this.props.card);
        const backgroundImage = '/faces/' + this.getBackgroundImage(card);
        const Button = styled.button`
            position: relative;
            border-radius: 8px;
            margin: 0 1em;
            height: 30em;
            width: 20em;
            background: transparent;
            color: ${color};
            border: 2px solid ${color};
            background-image: url(${backgroundImage});
            background-size: 20em 30em;
        `

        return (
            <Button onClick={() => this.props.submitCard(card)}>
                <div className="face top">{card.face}</div>
                <div className="face bottom">{card.face}</div>
            </Button>
        );
    }
}
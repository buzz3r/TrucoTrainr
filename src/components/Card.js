import React from 'react';
import styled from 'styled-components';

export default class Card extends React.Component {

    render() {
        const Button = styled.button`
            border-radius: 3px;
            padding: 0.25em 1em;
            margin: 0 1em;
            background: transparent;
            color: palevioletred;
            border: 2px solid palevioletred;
        `

        const card = this.props.card;
        return (
            <Button onClick={() => this.props.submitCard(card)}>{card.toString()}</Button>
        );
    }
}
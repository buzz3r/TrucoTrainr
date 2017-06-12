import React from 'react';

export default class Result extends React.Component {

    render() {
        const resultMessage = this.props.result.get('correct') ?
            'Correct' : "Wrong";

        const cardName = this.props.result.get('result') ? this.props.result.get('result').toString() : '';

        return (
            <div>
                <h2>{resultMessage}</h2>
                <p>The right answer was: {cardName}</p>
            </div>
        );
    }
}
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';
import Card from './Card';
import Result from './Result';
import styled from 'styled-components'

export class CardCompare extends React.Component {

    getDrawButton() {
        return styled.button`
            border-radius: 3px;
            padding: 0.25em 1em;
            margin: 1em;
            height: 40em:
            width: 10em;
            background: transparent;
            color: palevioletred;
            border: 2px solid palevioletred;
        `;
    }

    render() {

        const cards = this.props.pair ?
            this.props.pair.map(card => <Card key={this.props.pair.indexOf(card)} card={card} submitCard={this.props.submitCard}></Card>)
            : null;

        const result = this.props.result ? <Result result={this.props.result} /> : null;
        const Button = this.getDrawButton();

        return (
          <div>
              {cards}
              <div>
                  <Button onClick={() => this.props.submitCard(null)}>Draw</Button>
              </div>
              <div>
                  {result}
              </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pair: state.get('pair'),
        result: state.get('result')
    }
}

export const CardCompareContainer = connect(mapStateToProps, actionCreators)(CardCompare);
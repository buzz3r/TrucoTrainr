import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';
import Card from './Card';
import Result from './Result';

export class CardCompare extends React.Component {

    render() {

        const cards = this.props.pair ?
            this.props.pair.map(card => <Card key={this.props.pair.indexOf(card)} card={card} submitCard={this.props.submitCard}></Card>)
            : undefined;

        const result = this.props.result ? <Result result={this.props.result} /> : undefined;

        return (
          <div>
              {cards}
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
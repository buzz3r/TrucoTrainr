import React from 'react';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } from 'react-dom/test-utils';
import { expect } from 'chai';
import { Map } from 'immutable';
import { Suits, Faces, createCard } from '../constants/Cards';
import Result from './Result';

describe('Card component',() => {

    it('should render the correct or false if dependent on the answer', () => {

        const card = createCard(Suits.hearts, Faces.Q);
        const result = Map({
            correct: true,
            result: card
        });

        const component = renderIntoDocument(
            <Result result={result}/>
        );
        const divs = scryRenderedDOMComponentsWithTag(component, 'div');
        console.log(divs);
        expect(divs[0].textContent).to.contain('Correct');
        expect(divs[0].textContent).to.contain(card.toString());
    });

});


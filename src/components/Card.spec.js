import React from 'react';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } from 'react-dom/test-utils';
import Card from './Card';
import { expect } from 'chai';
import { Suits, Faces, createCard } from '../constants/Cards';
import sinon from 'sinon';

describe('Card component',() => {

    it('should render a button with suit and face of the card', () => {

        const cb = sinon.spy();
        const card = createCard(Suits.hearts, Faces.Q);
        const component = renderIntoDocument(
            <Card card={card} submitCard={cb}/>
        );
        const button = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(button).not.to.be.null;
        expect(button[0].textContent).to.equal('QQ');
    });


    it('should invoke the submit function on click', () => {
        const cb = sinon.spy();
        const card = createCard(Suits.hearts, Faces.Q);
        const component = renderIntoDocument(
            <Card card={card} submitCard={cb}/>
        );
        const button = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(button[0]);

        expect(cb.called).to.be.ok;
    });

});


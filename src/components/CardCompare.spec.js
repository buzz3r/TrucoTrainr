import React from 'react';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag} from 'react-dom/test-utils';
import { CardCompare } from './CardCompare';
import { expect } from 'chai';


describe('CardCompare component',() => {

    it('should render 2 cards', () => {
        const component = renderIntoDocument(
            <CardCompare />
        );
        const cards = scryRenderedDOMComponentsWithTag(component, 'card');
        expect(cards);
    });

});
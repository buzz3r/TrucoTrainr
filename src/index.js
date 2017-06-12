import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import compareReducer from './reducers/CompareReducer';
import { List } from 'immutable';
import { Suits, Faces, createCard} from './constants/Cards';

const store = createStore(compareReducer, undefined,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({
    type: 'SET_PAIR',
    pair: List.of(createCard(Suits.hearts, Faces.Q), createCard(Suits.spades, Faces.A))
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

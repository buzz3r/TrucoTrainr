import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import compareReducer from './reducers/CompareReducer';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const store = createStore(compareReducer);
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});

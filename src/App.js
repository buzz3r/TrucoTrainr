import React, { Component } from 'react';
import './App.css';
import { CardCompareContainer } from './components/CardCompare';

class App extends Component {
  render() {
    return (
      <div className="App">
          <CardCompareContainer></CardCompareContainer>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Crawler from './Crawler';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Goods Crawler</h1>
        </header>
        <Crawler/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './main/index';
import Test from './main/test';
import './store/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Index/>
          <Test>This is a test</Test>
      </div>
    );
  }
}

export default App;

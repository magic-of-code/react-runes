import React, { Component } from 'react';

import Message from './Message';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Message name="Arch" text="A bunch of new text." timestamp={new Date()} />
        <Message text="Message without a name" timestamp={new Date()} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import MessagesList from './MessagesList';

import logo from './logo.svg';
import './App.css';

const messages = [
  {name: 'Arch', text: 'A bunch of new text.', timestamp: new Date()},
  {text: 'Message without a name', timestamp: new Date()},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={styles.messages}>
          <MessagesList compact={true} messages={messages} />
        </div>
      </div>
    );
  }
}

const styles = {
  messages: {
    width: '50%',
    margin: '0 auto',
  },
};

export default App;

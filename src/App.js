import React, { Component } from 'react';

import Editor from './Editor';
import FakeLoginScreen from './FakeLoginScreen';
import MessagesList from './MessagesList';

import createContainer from './createContainer';
import database from './database';

import logo from './logo.svg';
import './App.css';

const ROOM = 'general';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      name: 'Anonymous',
      messages: [],
      compact: true,
    };
    this.addMessage = this.addMessage.bind(this);
    this.login = this.login.bind(this);
    this.setCompact = this.setCompact.bind(this);

    database.messages.listen(ROOM, (message) => {
      const currentMessages = this.props.messages || [];
      const currentPlusNewMessages = currentMessages.concat(message);
      this.setState({messages: currentPlusNewMessages});
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({messages: nextProps.messages});
  }

  addMessage(newMessage) {
    const {messages: currentMessages, name} = this.state;
    const currentPlusNewMessages = currentMessages.concat({...newMessage, name});
    this.setState({messages: currentPlusNewMessages});

    database.messages.add(ROOM, {...newMessage, name});
  }

  login(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    this.setState({loggedIn: true, name: name || 'Anonymous'});
  }

  setCompact(event) {
    const input = event.target;
    const compact = input.checked;
    this.setState({compact});
  }

  render() {
    const {compact, loggedIn, messages} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {loggedIn
          ? (
            <div style={styles.messages}>
              <MessagesList compact={compact} messages={messages} />
              <Editor addMessage={this.addMessage} setCompact={this.setCompact} compact={compact} />
            </div>
          )
          : <FakeLoginScreen login={this.login} />
        }
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

export default createContainer((props, setData) => {
  database.messages.getAll(ROOM, (messages) => {
    setData({messages});
  });
})(App);

// export default App;

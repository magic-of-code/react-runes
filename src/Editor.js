import React from 'react';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.sendMessage = this.sendMessage.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const input = event.target;
    const value = input.value;
    this.setState({value});
  }

  sendMessage(event) {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;

    const timestamp = new Date();

    const {addMessage} = this.props;
    addMessage({text, timestamp});
    this.setState({value: ''});
  }

  render() {
    const {compact, setCompact} = this.props;
    const {value} = this.state;

    return (
      <form style={styles.editor} onSubmit={this.sendMessage}>
        <input
          value={value}
          autoComplete="off"
          name="text"
          style={styles.input}
          type="text"
          onChange={this.onChange}
        />
      <input type="checkbox" onChange={setCompact} checked={compact} /> Compact View
      </form>
    )
  }
}

const styles = {
  editor: {
    position: 'absolute',
    bottom: '20px',
    width: '50%',
    padding: '0 20px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    width: 'calc(100% - 20px)',
  },
};

export default Editor;

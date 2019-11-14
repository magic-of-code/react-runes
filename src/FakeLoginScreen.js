import React from 'react';

const FakeLoginScreen = ({login}) => {
  return (
    <form style={styles.form} onSubmit={login}>
      <h1>
        Login Screen
      </h1>
      <input style={styles.input} placeholder="name" name="name" type="text" />
      <button style={styles.button} type="submit">
        Log In
      </button>
    </form>
  );
};

const styles = {
  form: {
    width: '230px',
    margin: 'auto',
  },
  input: {
    width: '100%',
    fontSize: '20px',
  },
  button: {
    display: 'block',
    width: '100%',
    fontSize: '20px',
  },
};

export default FakeLoginScreen;

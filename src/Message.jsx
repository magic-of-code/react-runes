import React from 'react';
import PropTypes from 'prop-types';

const Message = ({name, text, timestamp}) => {
  const time = timestamp.toTimeString();
  return (
    <div>
      <span style={styles.time}>
        {time}
      </span>
      <span style={styles.name}>
        {name}
      </span>
      <p style={styles.text}>
        {text}
      </p>
    </div>
  );
};

Message.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
};

Message.defaultProps = {
  name: 'Anonymous',
};

const styles = {
  name: {
    fontWeight: 'bold',
  },
  text: {
    marginTop: 0,
  },
  time: {
    color: 'grey',
    fontSize: '.8rem',
    marginRight: '1rem',
  },
};

export default Message;

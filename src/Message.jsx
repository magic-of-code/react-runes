import React from 'react';
import PropTypes from 'prop-types';

const Message = ({compact, name, text, timestamp}) => {
  const time = timestamp.toTimeString();
  return (
    <div>
      <span style={styles.time}>
        {time}
      </span>
      <span style={styles.name}>
        {name}
      </span>
      <p style={compact ? styles.textCompact : styles.text}>
        {text}
      </p>
    </div>
  );
};

Message.propTypes = {
  compact: PropTypes.bool.isRequired,
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
  textCompact: {
    display: 'inline',
    marginLeft: '1rem',
  },
  time: {
    color: 'grey',
    fontSize: '.8rem',
    marginRight: '1rem',
  },
};

export default Message;

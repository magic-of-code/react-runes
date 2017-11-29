import React from 'react';
import PropTypes from 'prop-types';

const Message = ({name, text, timestamp}) => {
  const time = timestamp.toTimeString();
  return (
    <div>
      <span>
        {time}
      </span>
      <span>
        {name}
      </span>
      <p>
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

export default Message;

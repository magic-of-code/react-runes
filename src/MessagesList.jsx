import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const MessagesList = ({messages}) => {
  return (
    <div>
      {messages.map(({name, text, timestamp}, index) =>
        <Message key={index + timestamp.getTime()} name={name} text={text} timestamp={timestamp} />
      )}
    </div>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};

MessagesList.defaultProps = {
  messages: [],
};

export default MessagesList;

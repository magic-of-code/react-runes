import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const MessagesList = ({messages}) => {
  return (
    <div>
      {messages.map(message =>
        <Message name={message.name} text={message.text} timestamp={message.timestamp} />
      )}
    </div>
  );
};

export default MessagesList;

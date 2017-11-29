import React, { Component } from 'react';

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

export default Message;

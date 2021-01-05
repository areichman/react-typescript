import React from 'react';

type MessageProps = {
  name: string;
}

function Message({ name }: MessageProps) {
  return (
    <p>
      Hello {name}!
    </p>
  );
}

export default Message;

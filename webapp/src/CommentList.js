import React from 'react';

export default ({ comments }) => (
  <ul>
    {comments.map(({ id, content, status }) => {
      const updatedComment = status === 'approved' ? content : status
      return <li key={id}>{updatedComment}</li>;
    })}
  </ul>
);

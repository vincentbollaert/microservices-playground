import React from 'react';

export default ({ comments }) => (
  <ul>
    {comments.map(comment => {
      return <li key={comment.id}>{comment.content}</li>;
    })}
  </ul>
);

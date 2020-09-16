import React from 'react';

const Quote = ({ quote }) => {
  const { content, author } = quote;

  return (
    <blockquote className='rounded v-spacing'>
      <h2>{content}</h2>
      <span>
        <h2>
          {' - '}
          {author}
        </h2>
      </span>
    </blockquote>
  );
};

export default Quote;

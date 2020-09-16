import React from 'react';
import TimeAgo from 'react-timeago';
import PropTypes from 'prop-types';

const CardItem = ({ article }) => {
  const { title, url, urlToImage, author, publishedAt, source } = article;

  return (
    <div className='card'>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <div class='image-holder'>
          {urlToImage != null ? (
            <img className='img' src={urlToImage} alt={author}></img>
          ) : (
            <div className='img no-img flex center'>
              <h1>No Image</h1>
            </div>
          )}
        </div>
        <div class='time-container'>
          <h2>
            <TimeAgo date={publishedAt} /> · {source.name}
          </h2>
        </div>
        <h1>{title}</h1>
      </a>
    </div>
  );
};

CardItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default CardItem;

import React, { useContext } from 'react';
import NewsContext from '../../context/news/newsContext';

const Menu = () => {
  const newsContext = useContext(NewsContext);
  const { sources, setCurrent } = newsContext;

  return (
    <div className='menu rounded'>
      <div className='title'>
        <h1 style={{ color: '#000' }}>In the News</h1>
      </div>
      <hr />
      <div className='sources'>
        {sources.map((source) => (
          <div className='menu-list'>
            <button onClick={() => setCurrent(source)}>{source.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

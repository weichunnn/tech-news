import React, { useContext } from 'react';
import NewsContext from '../../context/news/newsContext';

const NewsFilter = () => {
  const newsContext = useContext(NewsContext);

  const { filterNews } = newsContext;

  const onSubmit = (e) => {
    e.preventDefault();
    let query = document.querySelector('.textbox').value;
    if (query !== '') {
      filterNews(query);
      setTimeout(() => {
        document.filterForm.reset();
      }, 3000);
      return false;
    }
  };

  return (
    <div class='filter'>
      <form name='filterForm' method='' onSubmit={onSubmit}>
        <input type='text' className='textbox' placeholder='Search Alps ...' />
        <input type='submit' className='button' title='Search' value='🔍' />
      </form>
    </div>
  );
};

export default NewsFilter;

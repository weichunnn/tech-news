import React, { useContext, useEffect } from 'react';
import NewsContext from '../../context/news/newsContext';
import CardItem from '../news/CardItem';
import NewsFilter from '../news/NewsFilter';
import Loading from '../layout/Loading';
import Menu from '../news/Menu';

const News = () => {
  const newsContext = useContext(NewsContext);

  const {
    articles,
    current,
    sources,
    getArticles,
    getSources,
    loading,
    filtered
  } = newsContext;

  useEffect(() => {
    if (current != null) {
      getArticles(current.id);
    } else if (sources == null) {
      getSources();
    }
    // eslint-disable-next-line
  }, [current, sources]);

  return (
    <div className='container'>
      <div className='filter'>
        <div className='title'>
          <h1>Discover</h1>
          <NewsFilter />
        </div>
      </div>
      {sources === null ? <Loading /> : <Menu />}
      {filtered === false ? (
        current != null ? (
          <h1 className='source-name'>{current.name}</h1>
        ) : (
          <div></div>
        )
      ) : (
        <h1 className='source-name'>Web Hits</h1>
      )}
      <div className='cards-list'>
        {articles != null ? (
          articles.length < 5 && loading ? (
            <Loading />
          ) : (
            articles.map((article) => <CardItem article={article} />)
          )
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default News;

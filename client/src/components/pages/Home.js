import React, { Fragment, useContext, useEffect } from 'react';
import NewsContext from '../../context/news/newsContext';
import AuthContext from '../../context/auth/authContext';
import { ReactComponent as NewsLogo } from '../svg/Newsletter.svg';
import Quote from '../home/Quote';
import RegisterForm from '../auth/RegisterForm';
import Loading from '../layout/Loading';

const Home = () => {
  const authContext = useContext(AuthContext);
  const newsContext = useContext(NewsContext);

  const { isAuthenticated } = authContext;
  const { quote, getQuote } = newsContext;

  useEffect(() => {
    getQuote();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  // Display loading Icon
  if (quote == null) {
    return (
      <div className='container' style={{ height: '80vh' }}>
        <Loading />
      </div>
    );
  }

  const form = !isAuthenticated && <RegisterForm />;

  return (
    <Fragment>
      <div className='container'>
        <div className='grid'>
          <div className='news-back rounded'>
            <NewsLogo className='newsletter-svg' />
          </div>
          <div className='home-details flex center'>
            <div>
              <h1>News Heads Up</h1>
              <br></br>
              <h2>
                Get the latest news updated all in 1 place. Go beyond the usual
                headlines and master the knowledge. Enjoyable reading and
                hassle-free.
              </h2>
              {form}
            </div>
          </div>
        </div>
        <div className='block rounded v-spacing'>
          <div className='text'>
            <h1>
              Not sure
              <br></br>
              <span style={{ color: '#FFFD77' }}>which News</span> to start
              from?
            </h1>
            <h2>Dont't worry, reading news updated hourly makes sense.</h2>
          </div>
        </div>
        <Quote quote={quote} />
      </div>
    </Fragment>
  );
};

export default Home;

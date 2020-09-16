import React, { useEffect, Fragment } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className='container about'>
        <div className='grid'>
          <div>
            <h2>
              <strong>About Us</strong>
            </h2>
            <h2>
              <strong>
                A global news website displaying the best in knowledge.
              </strong>
            </h2>
            <br></br>
            <p>
              Alps is a movement for knowledge cultivation through knowing the
              happening of every day. Launched in 2020, Alps's unique
              programming strategy has established it as the go to source of
              knowledge across all fields. Our expertise in sourcing these news
              and the way of presenting facts is unparalleled. We work hard to
              connect our audience to emotional, sensorial and factual stories
              designed to provoke inspiration and debate.
            </p>
          </div>
          <div className='background'>
            <lottie-player
              src='https://assets5.lottiefiles.com/packages/lf20_F4JpWs.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

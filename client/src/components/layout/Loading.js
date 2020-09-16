import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <div
      className='flex'
      style={{
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <lottie-player
        src='https://assets2.lottiefiles.com/packages/lf20_x62chJ.json'
        background='transparent'
        speed='1'
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
      ></lottie-player>
    </div>
  </Fragment>
);

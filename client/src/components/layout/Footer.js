import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = (
    <Fragment>
      <li>
        <NavLink activeClassName='active' to='/privacy'>
          <button>Privacy Policy</button>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/terms'>
          <button>Terms</button>
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <div className='looks footer flex'>
      <div className='left flex'>
        <ul className='flex'>{links}</ul>
      </div>
      <div className='right flex'>
        <h3>
          Made with{' '}
          <span aria-labelledby='jsx-a11y/accessible-emoji' role='img'>
            ❤️
          </span>{' '}
          in Malaysia © {currentYear} Alps, Inc
        </h3>
      </div>
    </div>
  );
};

export default Footer;

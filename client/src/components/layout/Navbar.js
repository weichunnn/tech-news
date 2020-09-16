import React, { Fragment, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, loaduser } = authContext;

  useEffect(() => {
    loaduser();
    //  eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  const about = (
    <NavLink activeClassName='active' to='/about'>
      <button>About Us</button>
    </NavLink>
  );

  const longNav = (
    <Fragment>
      <li>
        <NavLink activeClassName='active' exact to='/news'>
          <button>Latest News</button>
        </NavLink>
      </li>
      {!isAuthenticated ? (
        <Fragment>
          <li>
            <NavLink activeClassName='active' exact to='/login'>
              <button>Login</button>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/signup' className='selected'>
              <button>Sign Up</button>
            </NavLink>
          </li>
        </Fragment>
      ) : (
        <li>
          <a onClick={onLogout} href='#!'>
            <div className='selected'>
              <button>Log Out</button>
            </div>
          </a>
        </li>
      )}
    </Fragment>
  );

  const shortNav = (
    <ul>
      <li>
        <NavLink activeClassName='active' exact to='/'>
          <h1>Home</h1>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' exact to='/about'>
          <h1>About Us</h1>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' exact to='/news'>
          <h1>Latest News</h1>
        </NavLink>
      </li>
      {!isAuthenticated ? (
        <Fragment>
          <li>
            <NavLink activeClassName='active' exact to='/login'>
              <h1>Login</h1>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' exact to='/signup'>
              <h1>Sign Up</h1>
            </NavLink>
          </li>
        </Fragment>
      ) : (
        <li>
          <a onClick={onLogout} href='#!'>
            <h1>Logout</h1>
          </a>
        </li>
      )}
    </ul>
  );

  return (
    <div className='navbar'>
      <div className='long-nav looks flex'>
        <div className='left flex'>
          <h1 className='logo'>
            <NavLink to='/' className='black-no-underline'>
              <i className={icon} /> {title}
            </NavLink>
          </h1>
          <ul>{about}</ul>
        </div>
        <div className='right flex'>
          <ul className='flex'>{longNav}</ul>
        </div>
      </div>
      <div className='short-nav'>
        <div className='left flex'>
          <h1 className='logo'>
            <NavLink to='/' className='black-no-underline'>
              <i className={icon} /> {title}
            </NavLink>
          </h1>
        </div>
        <input type='checkbox' className='toggler' />
        <div className='hamburger flex center'>
          <div className='flex'></div>
        </div>
        <div className='nav-menu flex center'>
          <div className='flex center'>
            <div>{shortNav}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Alps',
  icon: 'far fa-newspaper fa-lg'
};

export default Navbar;

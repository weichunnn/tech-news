import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, register, error, clearErrors } = authContext;

  useEffect(() => {
    if (error) {
      toast.error('🔥' + error, {});
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  const onSubmit = (e) => {
    e.preventDefault();

    register({
      email,
      password
    });

    setUser({
      email: '',
      password: ''
    });
  };

  return isAuthenticated ? (
    <Redirect to='/news' />
  ) : (
    <Fragment>
      <div className='form'>
        <div className='title'>
          <h1>Get Started For Free</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className='inputRow'>
            <h2>Email</h2>
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              required
            ></input>
          </div>
          <div className='inputRow'>
            <h2>Password</h2>
            <input
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              minLength='8'
              required
            ></input>
          </div>
          <div className='inputRow selected'>
            <button type='submit'>
              <h2>Start Reading Now</h2>
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default RegisterForm;

import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const authContext = useContext(AuthContext);

  const { login, isAuthenticated, error, clearErrors } = authContext;

  useEffect(() => {
    if (error) {
      toast.error('🔥    ' + error, {});
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

    login({
      email,
      password
    });

    setUser({
      email,
      password: ''
    });
  };

  return isAuthenticated ? (
    <Redirect to='/news' />
  ) : (
    <Fragment>
      <div className='form'>
        <div className='title'>
          <h1>Log In to Alps</h1>
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
              required
            ></input>
          </div>
          <div className='inputRow selected'>
            <button type='submit'>
              <h2>Login</h2>
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LoginForm;

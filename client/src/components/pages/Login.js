import React from 'react';
import LoginForm from '../auth/LoginForm';

const Login = () => {
  return (
    <div className='login'>
      <div className='container flex center'>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

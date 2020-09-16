import React from 'react';
import RegisterForm from '../auth/RegisterForm';

const SignUp = () => {
  return (
    <div className='signup container'>
      <div className='grid'>
        <div className='background'></div>
        <div class='flex center'>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

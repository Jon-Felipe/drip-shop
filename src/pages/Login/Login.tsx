import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

// components
import Link from '../../components/common/Link/Link';
import Input from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';

// extras
import { LoginWrapper, SocialButtonWrapper } from './Login.styles';
import LoginImage from '../../../public/images/login_img.svg';

interface ILogin {
  email: string;
  password: string;
}

function Login() {
  const [loginDetails, setLoginDetails] = useState<ILogin>({
    email: '',
    password: '',
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setLoginDetails((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('login');
  }

  return (
    <LoginWrapper>
      <section className='form-section'>
        <form onSubmit={handleOnSubmit}>
          <h3 className='title'>Welcome back</h3>
          <p className='sub-text'>
            Browse all the latest fashion and trends. Don't have an account?{' '}
            <Link path='/register' text='Sign up' underlined='always' />
          </p>
          <div className='form-inputs'>
            <Input
              label='Email'
              type='text'
              name='email'
              value={loginDetails.email}
              onChange={handleOnChange}
              placeholder='name@email.com'
              required
            />
            <Input
              label='Password'
              type='password'
              name='password'
              value={loginDetails.password}
              onChange={handleOnChange}
              placeholder='••••••••'
              required
            />
          </div>
          <div className='divider'>
            <hr />
            <p>or</p>
            <hr />
          </div>
          <div>
            <SocialButtonWrapper>
              <span>
                <FcGoogle />
              </span>
              Sign in with Google{' '}
            </SocialButtonWrapper>
            <SocialButtonWrapper>
              <span>
                <FaApple />
              </span>
              Sign in with Apple{' '}
            </SocialButtonWrapper>
          </div>
          <div className='action-helpers'>
            <div className='remember'>
              <input type='checkbox' id='remember' name='remember' />
              <label htmlFor='remember'>Remember me</label>
            </div>
            <Button type='button' variant='text'>
              Forgot Password?
            </Button>
          </div>
          <Button type='submit'>Login</Button>
        </form>
      </section>

      <section className='image-section'>
        <img src={LoginImage} alt='login' />
      </section>
    </LoginWrapper>
  );
}

export default Login;

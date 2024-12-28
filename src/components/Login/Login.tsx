import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

// components
import Link from '../common/Link/Link';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

// extras
import { FormWrapper, SocialButtonWrapper } from './Login.styles';

export type LoginProps = {
  emailValue: string;
  passwordValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Login({ emailValue, passwordValue, onChange, onSubmit }: LoginProps) {
  return (
    <FormWrapper onSubmit={onSubmit}>
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
          value={emailValue}
          onChange={onChange}
          placeholder='name@email.com'
          required
        />
        <Input
          label='Password'
          type='password'
          name='password'
          value={passwordValue}
          onChange={onChange}
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
    </FormWrapper>
  );
}

export default Login;

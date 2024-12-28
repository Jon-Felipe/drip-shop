import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

// components
import Link from '../common/Link/Link';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

// extras
import { FormWrapper, SocialButtonWrapper } from './Register.styles';

export type RegisterProps = {
  emailValue: string;
  nameValue: string;
  passwordValue: string;
  confirmPasswordValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Register({
  emailValue,
  nameValue,
  passwordValue,
  confirmPasswordValue,
  onChange,
  onSubmit,
}: RegisterProps) {
  return (
    <FormWrapper onSubmit={onSubmit}>
      <h3 className='title'>Welcome</h3>
      <p className='sub-text'>
        Browse all the latest fashion and trends. Already have an account?{' '}
        <Link path='/login' text='Sign in' underlined='always' />
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
          label='Name'
          type='text'
          name='name'
          value={nameValue}
          onChange={onChange}
          placeholder='John Doe'
          required
        />
      </div>
      <div className='form-inputs'>
        <Input
          label='Password'
          type='password'
          name='password'
          value={passwordValue}
          onChange={onChange}
          placeholder='••••••••'
          required
        />
        <Input
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          value={confirmPasswordValue}
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
          Sign up with Google{' '}
        </SocialButtonWrapper>
        <SocialButtonWrapper>
          <span>
            <FaApple />
          </span>
          Sign up with Apple{' '}
        </SocialButtonWrapper>
      </div>
      <Button type='submit'>Register</Button>
    </FormWrapper>
  );
}

export default Register;

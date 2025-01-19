import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

// components
import Link from '../../components/common/Link/Link';
import Input from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';

// extras
import { RegisterWrapper, SocialButtonWrapper } from './Register.styles';
import RegisterImage from '../../../public/images/register_img.svg';

interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function Register() {
  const [registerDetails, setRegisterDetails] = useState<IRegister>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterDetails((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('login');
  }
  return (
    <RegisterWrapper>
      <section className='image-section'>
        <img src={RegisterImage} alt='register' />
      </section>

      <section className='form-section'>
        <form onSubmit={handleOnSubmit}>
          <h3 className='title'>Create your Account</h3>
          <p className='sub-text'>
            Browse all the latest fashion and trends. Already have an account?{' '}
            <Link path='/login' text='Sign in' underlined='always' />
          </p>
          <div className='form-inputs'>
            <div className='inputs'>
              <Input
                label='First Name'
                type='text'
                name='firstName'
                value={registerDetails.firstName}
                onChange={handleOnChange}
                placeholder='John'
                required
              />
              <Input
                label='Last Name'
                type='test'
                name='lastName'
                value={registerDetails.lastName}
                onChange={handleOnChange}
                placeholder='Doe'
                required
              />
            </div>
            <div className='inputs'>
              <Input
                label='Email'
                type='text'
                name='email'
                value={registerDetails.email}
                onChange={handleOnChange}
                placeholder='name@email.com'
                required
              />
              <Input
                label='Password'
                type='password'
                name='password'
                value={registerDetails.password}
                onChange={handleOnChange}
                placeholder='••••••••'
                required
              />
            </div>
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
          <Button type='submit'>Register</Button>
        </form>
      </section>
    </RegisterWrapper>
  );
}

export default Register;

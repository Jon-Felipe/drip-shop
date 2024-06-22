import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';
import { setUser } from '../slices/userSlice';

// components
import Input from '../components/Input';

// extras
import { IUser } from '../utils/types';

function Register() {
  const [userState, setUserState] = useState<IUser>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setUserState((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userObj: IUser = {
      id: Date.now().toString() || '',
      firstName: userState.firstName || '',
      lastName: userState.lastName || '',
      email: userState.email || '',
      password: userState.password || '',
    };

    dispatch(setUser(userObj));
    navigate('/');
  }

  return (
    <div className='p-4 w-full max-w-xl max-h-full mx-auto'>
      <div className='bg-white rounded-lg border'>
        <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
          <h3 className='text-xl font-semibold text-gray-900'>
            Create an account
          </h3>
        </div>
        <div className='p-4 md:p-5'>
          <form onSubmit={handleOnSubmit} className='space-y-4'>
            <div>
              <Input
                label='Email'
                type='email'
                name='email'
                value={userState.email}
                onChange={handleOnChange}
                placeholder='name@example.com'
                required={true}
              />
            </div>
            <div>
              <Input
                label='Your password'
                type='password'
                name='password'
                value={userState.password}
                onChange={handleOnChange}
                placeholder='••••••••'
                required={true}
              />
            </div>
            <div>
              <Input
                label='First Name'
                type='text'
                name='firstName'
                value={userState.firstName}
                onChange={handleOnChange}
                placeholder='John'
                required={true}
              />
            </div>
            <div>
              <Input
                label='Last Name'
                type='text'
                name='lastName'
                value={userState.lastName}
                onChange={handleOnChange}
                placeholder='Doe'
                required={true}
              />
            </div>
            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  id='terms'
                  aria-describedby='terms'
                  type='checkbox'
                  className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300'
                />
              </div>
              <div className='ml-3 text-sm'>
                <label
                  htmlFor='terms'
                  className='font-light text-gray-500 dark:text-gray-300'
                >
                  I accept the{' '}
                  <a
                    className='font-medium text-blue-700 text-primary-600 hover:underline'
                    href='#'
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type='submit'
              className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Register an account
            </button>
            <div className='text-sm font-medium text-gray-500'>
              Already registered?{' '}
              <a href='#' className='text-blue-700 hover:underline'>
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

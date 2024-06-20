import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { setUser } from '../slices/userSlice';

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
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                value={userState.email}
                onChange={handleOnChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='name@example.com'
                required
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                value={userState.password}
                onChange={handleOnChange}
                placeholder='••••••••'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                required
              />
            </div>
            <div>
              <label
                htmlFor='firstName'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                First Name
              </label>
              <input
                type='firstName'
                name='firstName'
                id='firstName'
                value={userState.firstName}
                onChange={handleOnChange}
                placeholder='John'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                required
              />
            </div>
            <div>
              <label
                htmlFor='lastName'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Last Name
              </label>
              <input
                type='lastName'
                name='lastName'
                id='lastName'
                value={userState.lastName}
                onChange={handleOnChange}
                placeholder='Doe'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                required
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

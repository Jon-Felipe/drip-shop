import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../hooks/hooks';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setUser } from '../slices/userSlice';

// components
import Input from '../components/Input';

// extras
import { IUser } from '../utils/types';

function Login() {
  const [userInfo, setUserInfo] = useState<Pick<IUser, 'email' | 'password'>>({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { user } = await login({
        email: userInfo.email,
        password: userInfo.password,
      }).unwrap();
      dispatch(setUser({ ...user }));
      toast.success('Login Successful');
      navigate('/');
    } catch (error) {
      toast.error('Invalid Credentials');
      console.log(error);
    }
    setUserInfo({ email: '', password: '' });
  }

  return (
    <div className='p-4 w-full max-w-xl max-h-full mx-auto'>
      <div className='bg-white rounded-lg border'>
        <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
          <h3 className='text-xl font-semibold text-gray-900'>
            Sign in to our platform
          </h3>
        </div>
        <div className='p-4 md:p-5'>
          <form className='space-y-4' onSubmit={handleOnSubmit}>
            <div>
              <Input
                type='email'
                name='email'
                value={userInfo.email}
                onChange={handleOnChange}
                placeholder='name@example.com'
                required={true}
              />
            </div>
            <div>
              <Input
                type='password'
                name='password'
                value={userInfo.password}
                onChange={handleOnChange}
                placeholder='••••••••'
                required={true}
              />
            </div>
            <button
              type='submit'
              className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Login to your account'}
            </button>
            <div className='text-sm font-medium text-gray-500'>
              Not registered?{' '}
              <a href='#' className='text-blue-700 hover:underline'>
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

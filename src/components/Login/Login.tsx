export type LoginProps = {};

// components
import Link from '../common/Link/Link';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

function Login({}: LoginProps) {
  return (
    <form className='max-w-screen-sm mx-auto'>
      <h3 className='text-2xl font-bold mb-2'>Welcome back</h3>
      <p className='text-sm font-light text-s text-stone-500'>
        Browse all the latest fashion and trends. Don't have an account?{' '}
        <span>
          <Link
            path='/sign-up'
            text='Sign up'
            weight='medium'
            underline='hover'
          />
        </span>
      </p>
      <div className='flex items-center justify-between gap-x-4 w-full my-4'>
        <Input
          name='email'
          type='email'
          label='Email'
          placeholder='name@email.com'
          required
        />
        <Input
          name='password'
          type='password'
          label='Password'
          placeholder='••••••••'
          required
        />
      </div>
      <div className='flex items-center mb-4'>
        <div className='bg-slate-200 w-full h-0.5'></div>
        <div className='px-5 text-center text-slate-600'>or</div>
        <div className='bg-slate-200 w-full h-0.5'></div>
      </div>
      <div className='w-full'>
        <Button text='Sign into your account' colour='dark' />
      </div>
    </form>
  );
}

export default Login;

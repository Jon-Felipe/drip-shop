import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

// components
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

// extras
import { FormWrapper, SocialButtonWrapper } from './Login.styles';

type Props = {};

function Login({}: Props) {
  return (
    <FormWrapper>
      <h3 className='title'>Welcome back</h3>
      <p className='sub-text'>
        Browse all the latest fashion and trends. Don't have an account?{' '}
        <span>Sign up</span>
      </p>
      <div className='form-inputs'>
        <Input
          label='Email'
          type='text'
          name='email'
          value=''
          onChange={() => {}}
          placeholder='name@email.com'
          required
        />
        <Input
          label='Password'
          type='password'
          name='password'
          value=''
          onChange={() => {}}
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

// components
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

// extras
import { FormWrapper } from './Login.styles';

type Props = {};

function Login({}: Props) {
  return (
    <FormWrapper>
      <h3 className='title'>Welcome Back</h3>
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
      <Button type='submit'>Login</Button>
    </FormWrapper>
  );
}

export default Login;

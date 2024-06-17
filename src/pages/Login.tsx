import { useState } from 'react';

// mui components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Login() {
  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  return (
    <Box maxWidth='sm' margin='80px auto 0'>
      <Box component='form'>
        <Typography component='h3' variant='h5' fontWeight='600'>
          {isRegistering ? 'Sign Up' : 'Login'}
        </Typography>
        {isRegistering && (
          <TextField
            label='Name'
            type='text'
            variant='outlined'
            fullWidth
            margin='normal'
          />
        )}
        <TextField
          label='Email'
          type='email'
          variant='outlined'
          fullWidth
          margin='normal'
        />
        <TextField
          label='Password'
          type='password'
          variant='outlined'
          fullWidth
          margin='normal'
        />
        <Box marginY={1}>
          <Button type='submit' variant='contained' fullWidth size='large'>
            {isRegistering ? 'Register' : 'Login'}
          </Button>
        </Box>
        <Typography>
          {isRegistering ? 'Already have an account?' : ' Create an account?'}
          <span>
            <Button onClick={() => setIsRegistering(!isRegistering)}>
              Click here
            </Button>
          </span>
        </Typography>
        <FormControlLabel
          control={<Checkbox />}
          label='By continuing, I agree to the terms of use & privacy policy.'
        />
      </Box>
    </Box>
  );
}

export default Login;

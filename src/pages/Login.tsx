// mui components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Login() {
  return (
    <Box maxWidth='sm' margin='80px auto 0'>
      <Box component='form'>
        <Typography component='h3' variant='h6' fontWeight='600'>
          Login
        </Typography>
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
            Submit
          </Button>
        </Box>
        <Typography>
          Create an account?{' '}
          <span>
            <Button>Click here</Button>
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

import { Outlet } from 'react-router-dom';

// mui componet
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Box marginTop={4} component='main'>
        <Container maxWidth='lg'>
          <Outlet />
        </Container>
      </Box>
    </>
  );
}

export default App;

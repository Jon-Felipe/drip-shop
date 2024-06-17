import { Outlet } from 'react-router-dom';

// mui componet
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Box marginTop={4} component='main'>
        <Container maxWidth='lg'>
          <Outlet />
        </Container>
      </Box>
    </>
  );
}

export default App;

import { Outlet } from 'react-router-dom';

// mui componet
import Box from '@mui/material/Box';

// components
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Box maxWidth='lg' margin='auto' marginTop={4}>
        <Outlet />
      </Box>
    </>
  );
}

export default App;

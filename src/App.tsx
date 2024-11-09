import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar title='DripShop' submenuLinks={['women', 'men', 'kids']} />
      <main className='max-w-screen-xl mx-auto mt-10 px-4 lg:px-6'>
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
}

export default App;

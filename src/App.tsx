import { Outlet } from 'react-router-dom';

// components
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className='max-w-screen-xl mx-auto mt-10 px-4 lg:px-6'>
        <Outlet />
      </main>
    </>
  );
}

export default App;

import React, { useState } from 'react';

// import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Header from './components/Header/Header.tsx';

function App() {
  const [search, setSearch] = useState<string>('');

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert('search');
  }

  return (
    <>
      <Header
        searchValue={search}
        searchOnChange={(e) => setSearch(e.target.value)}
        searchOnSubmit={handleOnSubmit}
      />
      <main>
        {/* <Outlet /> */}
        <ToastContainer />
      </main>
    </>
  );
}

export default App;

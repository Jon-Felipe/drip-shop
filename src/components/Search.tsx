import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

function Search() {
  const [search, setSearch] = useState<string>('');

  const navigate = useNavigate();

  function handleOnSearch() {
    if (!search) {
      toast.error('Please provide a search value');
      return;
    }
    navigate(`/products?search=${search}`);
  }

  return (
    <div className='w-full'>
      <label
        htmlFor='search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <MdOutlineSearch className='w-6 h-6 text-neutral-400' />
        </div>
        <input
          type='search'
          id='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
          placeholder='Search'
          required
        />
        <button
          type='submit'
          onClick={handleOnSearch}
          className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;

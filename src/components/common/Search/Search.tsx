import { MdSearch } from 'react-icons/md';

export type SearchProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText: string;
};

function Search({ placeholder, value, onChange, buttonText }: SearchProps) {
  return (
    <>
      <label
        htmlFor='search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <MdSearch className='w-6 h-6 text-gray-500' />
        </div>
        <input
          type='search'
          id='search'
          value={value}
          onChange={onChange}
          className='block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none'
          placeholder={placeholder}
          required
        />
        <button
          type='submit'
          className='text-white absolute end-2.5 bottom-1.5 bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-4 py-1'
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}

export default Search;

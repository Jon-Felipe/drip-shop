import { useAppSelector } from '../hooks/hooks';

function Profile() {
  const { user } = useAppSelector((store) => store.user);

  return (
    <form>
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div>
          <label
            htmlFor='first_name'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            First name
          </label>
          <input
            type='text'
            id='first_name'
            value={user?.firstName}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='John'
            required
          />
        </div>
        <div>
          <label
            htmlFor='last_name'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Last name
          </label>
          <input
            type='text'
            id='last_name'
            value={user?.lastName}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='Doe'
            required
          />
        </div>
        <div>
          <label
            htmlFor='phone'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Phone number
          </label>
          <input
            type='tel'
            id='phone'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='123-45-6789'
            required
          />
        </div>
        <div>
          <label
            htmlFor='dob'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Date of birth
          </label>
          <input
            type='date'
            id='dob'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            required
          />
        </div>
      </div>
      <div className='mb-6'>
        <label
          htmlFor='address'
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          Address
        </label>
        <input
          type='text'
          id='address'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          required
        />
      </div>
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div>
          <label
            htmlFor='text'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Country
          </label>
          <input
            type='text'
            id='country'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            required
          />
        </div>
        <div>
          <label
            htmlFor='city'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            City
          </label>
          <input
            type='text'
            id='city'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            required
          />
        </div>
      </div>
      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
      >
        Submit
      </button>
    </form>
  );
}

export default Profile;

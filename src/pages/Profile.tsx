import { useAppSelector } from '../hooks/hooks';

// component
import Input from '../components/Input';

function Profile() {
  const { user } = useAppSelector((store) => store.user);

  return (
    <form>
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div>
          <Input
            label='First name'
            type='text'
            name='firstName'
            value={user?.firstName}
            placeholder='John'
            required={true}
          />
        </div>
        <div>
          <Input
            label='Last name'
            type='text'
            name='lastName'
            value={user?.lastName}
            placeholder='Doe'
            required={true}
          />
        </div>
        <div>
          <Input
            label='Phone number'
            type='tel'
            name='phone'
            value=''
            placeholder='123-456-789'
            required={true}
          />
        </div>
        <div>
          <Input label='Date of birth' type='date' name='dob' value='' />
        </div>
      </div>
      <div className='mb-6'>
        <Input label='Address' type='text' name='address' value='' />
      </div>
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div>
          <Input label='Country' type='text' name='country' value='' />
        </div>
        <div>
          <Input label='City' type='text' name='city' value='' />
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

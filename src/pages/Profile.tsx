import { useAppSelector } from '../hooks/hooks';

// component
import Input from '../components/Input';

function Profile() {
  const { user } = useAppSelector((store) => store.user);

  return (
    <>
      <h4 className='text-xl lg:text-2xl font-semibold mb-4'>
        Update your profile
      </h4>
      <form>
        <div className='grid gap-6 mb-6 md:grid-cols-3'>
          <div>
            <Input
              label='First name'
              type='text'
              name='firstName'
              value={user?.firstName}
              onChange={() => console.log('first')}
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
              onChange={() => console.log('first')}
              placeholder='Doe'
              required={true}
            />
          </div>
          <div>
            <Input
              label='Email'
              type='email'
              name='email'
              value={user?.email}
              onChange={() => console.log('first')}
              placeholder='name@example.com'
              required={true}
              disabled={true}
            />
          </div>
        </div>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <Input
              label='Phone number'
              type='tel'
              name='phone'
              value=''
              onChange={() => console.log('first')}
              placeholder='123-456-789'
              required={true}
            />
          </div>
          <div>
            <Input
              label='Date of birth'
              type='date'
              name='dob'
              value=''
              onChange={() => console.log('first')}
            />
          </div>
        </div>
        <div className='mb-6'>
          <Input
            label='Address'
            type='text'
            name='address'
            value=''
            placeholder='123 example street'
            onChange={() => console.log('first')}
          />
        </div>
        <div className='grid gap-6 mb-6 md:grid-cols-3'>
          <div>
            <Input
              label='Country'
              type='text'
              name='country'
              value=''
              placeholder='South Africa'
              onChange={() => console.log('first')}
            />
          </div>
          <div>
            <Input
              label='City'
              type='text'
              name='city'
              value=''
              placeholder='Johannesburg'
              onChange={() => console.log('first')}
            />
          </div>
          <div>
            <Input
              label='Postal Code'
              type='text'
              name='postalcode'
              value=''
              placeholder='1234'
              onChange={() => console.log('first')}
            />
          </div>
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        >
          Update
        </button>
      </form>
    </>
  );
}

export default Profile;

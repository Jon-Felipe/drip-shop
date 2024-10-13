import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useUpdateUserMutation } from '../slices/usersApiSlice';
import { setUser } from '../slices/userSlice';

// component
import Input from '../components/Input';

// extras
import { IUser } from '../utils/types';

function Profile() {
  const { user } = useAppSelector((store) => store.user);

  const [userState, setUserState] = useState<Partial<IUser>>({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    dateOfBirth: user?.dateOfBirth || '',
    address: {
      street: user?.address?.street || '',
      city: user?.address?.city || '',
      country: user?.address?.country || '',
      postalcode: user?.address?.postalcode || '',
    },
  });

  const dispatch = useAppDispatch();
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setUserState((prevState) => {
      if (userState.address!.hasOwnProperty(name)) {
        return {
          ...prevState,
          address: { ...prevState.address!, [name]: value },
        };
      } else {
        return { ...prevState, [name]: value };
      }
    });
  }

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { updatedUser } = await updateUser(userState).unwrap();
      dispatch(setUser({ ...updatedUser }));
      toast.success('Profile Updated');
    } catch (error) {
      toast.error('Something Went Wrong');
      console.log(error);
    }
  }

  return (
    <>
      <h4 className='text-xl lg:text-2xl font-semibold mb-4'>
        Update your profile
      </h4>
      <form onSubmit={handleOnSubmit}>
        <div className='grid gap-6 mb-6 md:grid-cols-3'>
          <div>
            <Input
              label='First name'
              type='text'
              name='firstName'
              value={userState.firstName}
              onChange={handleOnChange}
              placeholder='John'
              required={true}
            />
          </div>
          <div>
            <Input
              label='Last name'
              type='text'
              name='lastName'
              value={userState.lastName}
              onChange={handleOnChange}
              placeholder='Doe'
              required={true}
            />
          </div>
          <div>
            <Input
              label='Email'
              type='email'
              name='email'
              value={userState.email}
              onChange={handleOnChange}
              placeholder='name@example.com'
              required={true}
            />
          </div>
        </div>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <Input
              label='Phone number'
              type='tel'
              name='phoneNumber'
              value={userState.phoneNumber}
              onChange={handleOnChange}
              placeholder='123-456-789'
            />
          </div>
          <div>
            <Input
              label='Date of birth'
              type='date'
              name='dob'
              value={userState.dateOfBirth}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className='mb-6'>
          <Input
            label='Address'
            type='text'
            name='street'
            value={userState.address?.street}
            placeholder='123 example street'
            onChange={handleOnChange}
          />
        </div>
        <div className='grid gap-6 mb-6 md:grid-cols-3'>
          <div>
            <Input
              label='City'
              type='text'
              name='city'
              value={userState.address?.city}
              placeholder='Johannesburg'
              onChange={handleOnChange}
            />
          </div>
          <div>
            <Input
              label='Country'
              type='text'
              name='country'
              value={userState.address?.country}
              placeholder='South Africa'
              onChange={handleOnChange}
            />
          </div>
          <div>
            <Input
              label='Postal Code'
              type='text'
              name='postalcode'
              value={userState.address?.postalcode}
              placeholder='1234'
              onChange={handleOnChange}
            />
          </div>
        </div>
        <button
          type='submit'
          disabled={isLoading}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        >
          {isLoading ? 'Submitting...' : 'Update'}
        </button>
      </form>
    </>
  );
}

export default Profile;

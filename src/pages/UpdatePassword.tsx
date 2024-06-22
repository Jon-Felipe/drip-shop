// components
import Input from '../components/Input';

function UpdatePassword() {
  return (
    <>
      <h4 className='text-xl lg:text-2xl font-semibold mb-4'>
        Update your password
      </h4>
      <form>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <Input
              label='Old password'
              type='password'
              name='oldPassword'
              value={''}
              onChange={() => console.log('first')}
              placeholder='••••••••'
              required={true}
            />
          </div>
        </div>
        <div className='grid gap-6 mb-6 md:grid-cols-2 mt-4'>
          <div>
            <Input
              label='New password'
              type='password'
              name='newPassword'
              value={''}
              onChange={() => console.log('first')}
              placeholder='••••••••'
              required={true}
            />
          </div>
          <div>
            <Input
              label='Confirm new password'
              type='password'
              name='confirmPassword'
              value={''}
              onChange={() => console.log('first')}
              placeholder='••••••••'
              required={true}
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

export default UpdatePassword;

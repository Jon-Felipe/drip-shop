import { Link, Outlet } from 'react-router-dom';
import {
  MdOutlinePerson,
  MdOutlineLock,
  MdOutlineInventory2,
  MdLogout,
} from 'react-icons/md';
import { useAppDispatch } from '../../hooks/hooks';
import { logout } from '../../slices/userSlice';

function ProfileLayout() {
  const dispatch = useAppDispatch();

  return (
    <>
      <section>
        <h3 className='text-xl lg:text-3xl font-semibold'>Account Settings</h3>
        <p className='mt-2'>Manage your profile and account settings</p>
      </section>
      <div className='grid lg:grid-cols-[300px_1fr] lg:gap-x-4 mt-8'>
        <section>
          <div className='flex flex-col gap-y-4'>
            <Link
              to='/profile'
              className='flex items-center gap-x-2 bg-blue-500 text-white rounded shadow py-2 px-4'
            >
              <MdOutlinePerson className='w-5 h-5' />
              <span>Account</span>
            </Link>
            <Link
              to='update-password'
              className='flex items-center gap-x-2 py-2 px-4'
            >
              <MdOutlineLock className='w-5 h-5' />
              <span>Password</span>
            </Link>
            <Link
              to='/my-orders'
              className='flex items-center gap-x-2 py-2 px-4'
            >
              <MdOutlineInventory2 className='w-5 h-5' />
              <span>My Orders</span>
            </Link>
            <button
              className='flex items-center gap-x-2 py-2 px-4'
              onClick={() => dispatch(logout())}
            >
              <MdLogout className='w-5 h-5' />
              <span>Logout</span>
            </button>
          </div>
        </section>
        <section>
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default ProfileLayout;

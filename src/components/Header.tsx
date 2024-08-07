import { Link } from 'react-router-dom';
import {
  MdOutlineSearch,
  MdMenu,
  MdFavorite,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import { useAppSelector } from '../hooks/hooks';

function Header() {
  const { user } = useAppSelector((store) => store.user);

  return (
    <header className=' bg-neutral-700'>
      <div className='flex items-center justify-between px-4 lg:px-6 py-2 lg:py-4 max-w-screen-xl mx-auto'>
        <div className='flex lg:hidden items-center gap-x-2'>
          <MdMenu className='w-7 h-7 text-white' />
          <MdOutlineSearch className='w-7 h-7 text-white' />
        </div>
        <nav className='hidden lg:flex lg:items-center lg:gap-x-4'>
          <Link to='/' className='text-white text-xs'>
            SHOP
          </Link>
          <Link to='/' className='text-white text-xs'>
            BLOG
          </Link>
        </nav>
        <nav className='inline-block lg:hidden'>
          <Link to='/' className='text-neutral-400 uppercase'>
            DripShop
          </Link>
        </nav>
        <nav className='flex items-center justify-between gap-x-4'>
          <Link to='/login' className='flex items-center gap-x-2 '>
            <span className='hidden xl:inline-block text-xs font-semibold text-white'>
              Wishlist
            </span>
            <MdFavorite className='w-5 h-5 text-neutral-400' />
          </Link>
          {user?.firstName ? (
            <>
              <Link to='/cart' className='flex items-center gap-x-2 '>
                <span className='hidden xl:inline-block text-xs font-semibold text-white'>
                  Cart
                </span>
                <MdOutlineShoppingCart className='w-5 h-5 text-white' />
              </Link>
              <Link to='/profile' className='text-xs font-semibold text-white'>
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link to='/login' className='text-xs font-semibold text-white'>
                Login
              </Link>
              <Link
                to='/register'
                className='text-xs font-light lg:font-semibold text-white'
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;

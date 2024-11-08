import { MdMenu } from 'react-icons/md';
import { Link as ReactRouterLink } from 'react-router-dom';

// components
import Link from '../common/Link/Link';

export type NavbarProps = {
  showNavbarLinks: boolean;
  setShowNavbarLinks: () => void;
};

function Navbar({ showNavbarLinks, setShowNavbarLinks }: NavbarProps) {
  return (
    <nav className='bg-white border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <ReactRouterLink
          to='/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>
            DripShop
          </span>
        </ReactRouterLink>
        <button
          type='button'
          onClick={setShowNavbarLinks}
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
        >
          <span className='sr-only'>Open main menu</span>
          <MdMenu className='w-5 h-5' />
        </button>
        <div
          className={`${
            showNavbarLinks ? '' : 'hidden'
          } w-full md:block md:w-auto`}
        >
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 gap-y-3 md:gap-y-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white'>
            <li>
              <Link path='/' text='Home' />
            </li>
            <li>
              <Link path='/' text='About' />
            </li>
            <li>
              <Link path='/' text='Services' />
            </li>
            <li>
              <Link path='/' text='Pricing' />
            </li>
            <li>
              <Link path='/' text='Contact' />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

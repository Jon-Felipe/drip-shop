import { Link as ReactRouterLink } from 'react-router-dom';
import {
  MdOutlineFavoriteBorder,
  MdOutlineShoppingBag,
  MdOutlinePerson,
} from 'react-icons/md';

// components
import Link from '../common/Link/Link';

export type NavbarProps = {
  title: string;
  submenuLinks: string[];
};

function Navbar({ title, submenuLinks }: NavbarProps) {
  return (
    <>
      <nav className='bg-stone-800'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
          <ReactRouterLink to='/' className='flex items-center space-x-3'>
            <span className='self-center text-white text-2xl font-semibold whitespace-nowrap'>
              {title}
            </span>
          </ReactRouterLink>
          <div className='flex items-center space-x-4'>
            <Link
              path='/favourites'
              text='favourite'
              icon={<MdOutlineFavoriteBorder className='w-6 h-6 text-white' />}
            />
            <Link
              path='/cart'
              text='favourite'
              icon={<MdOutlineShoppingBag className='w-6 h-6 text-white' />}
            />
            <Link
              path='/profile'
              text='favourite'
              icon={<MdOutlinePerson className='w-6 h-6 text-white' />}
            />
          </div>
        </div>
      </nav>
      <nav className='bg-stone-100'>
        <div className='max-w-screen-xl px-4 py-3 mx-auto'>
          <div className='flex items-center'>
            <ul className='flex flex-row font-medium mt-0 space-x-8 text-sm'>
              {submenuLinks.map((link, i) => (
                <li key={i}>
                  <Link path={`/${link}`} text={link} weight='medium' />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

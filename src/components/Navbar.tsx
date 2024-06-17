import { Link } from 'react-router-dom';

type Props = {};

const links = ['women', 'men', 'kids'];

function Navbar({}: Props) {
  return (
    <div className='hidden lg:block bg:white lg:bg-stone-100'>
      <nav className='px-4 lg:px-6 py-2 lg:py-4 max-w-screen-xl mx-auto flex items-center '>
        <div>
          <Link to='/' className='text-xl text-neutral-500'>
            DRIPSHOP.COM
          </Link>
        </div>
        <div className='flex items-center gap-x-3 ml-8'>
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/department/${link}`}
              className='uppercase text-neutral-400 text-sm'
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

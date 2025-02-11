import React from 'react';

// components
import Search from '../common/Search/Search';
import Link from '../common/Link/Link';

// extras
import {
  MdOutlineFavoriteBorder,
  MdOutlineShoppingBag,
  MdOutlinePerson,
} from 'react-icons/md';

// extras
import { HeaderWrapper } from './Header.styles';

export type HeaderProps = {
  searchValue: string;
  searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Header({ searchValue, searchOnChange, searchOnSubmit }: HeaderProps) {
  return (
    <HeaderWrapper>
      <div className='header'>
        <div className='title'>
          <Link path='/' text='DripShop' />
        </div>
        <div className='search'>
          <Search
            placeholder='Search...'
            name='search'
            value={searchValue}
            onChange={searchOnChange}
            onSubmit={searchOnSubmit}
          />
        </div>
        <div className='user-links'>
          <Link
            path='/favourites'
            text='favourites'
            icon={<MdOutlineFavoriteBorder />}
          />
          <Link path='/cart' text='cart' icon={<MdOutlineShoppingBag />} />
          <Link path='/login' icon={<MdOutlinePerson />} />
        </div>
      </div>
      <nav className='navbar-links'>
        <div className='links'>
          <Link path='/women' text='Women' />
          <Link path='/men' text='Men' />
          <Link path='/kids' text='Kids' />
          <Link path='/brands' text='Brands' />
        </div>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;

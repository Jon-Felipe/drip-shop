import React from 'react';

import Button from '../Button/Button';
import { SearchWrapper } from './Search.styles';

export type SearchProps = {
  label?: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  required?: boolean;
  btnText?: string;
};

function Search({
  label,
  placeholder,
  name,
  value,
  onChange,
  onSubmit,
  required = false,
  btnText,
}: SearchProps) {
  return (
    <SearchWrapper onSubmit={onSubmit}>
      {label && (
        <label htmlFor={name} className='label'>
          {label}
        </label>
      )}
      <div className='relative'>
        <input
          type='search'
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className='input'
        />
        <div className='search-btn'>
          <Button type='submit' size='small'>
            {btnText ?? 'Search'}
          </Button>
        </div>
      </div>
    </SearchWrapper>
  );
}

export default Search;

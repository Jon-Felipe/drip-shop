import React from 'react';

type Props = {
  value: React.SelectHTMLAttributes<HTMLSelectElement>['value'];
  onChange: React.SelectHTMLAttributes<HTMLSelectElement>['onChange'];
};

function Select({ value, onChange }: Props) {
  return (
    <form>
      <select
        value={value}
        onChange={onChange}
        className='border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
      >
        <option value='newest'>Newest</option>
        <option value='top'>Top Rated</option>
        <option value='price-low'>Price Low to High</option>
        <option value='price-high'>Price High to Low</option>
        <option value='discount'>Discount</option>
      </select>
    </form>
  );
}

export default Select;

import React from 'react';
import { ISelect } from '../utils/types';

type Props = {
  value: React.SelectHTMLAttributes<HTMLSelectElement>['value'];
  onChange: React.SelectHTMLAttributes<HTMLSelectElement>['onChange'];
  options: ISelect[];
};

function Select({ value, onChange, options }: Props) {
  return (
    <form>
      <select
        value={value}
        onChange={onChange}
        className='border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Select;

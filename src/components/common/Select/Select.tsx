import React from 'react';

export interface ISelect {
  id: string | number;
  text: string;
  value: string;
}

type SelectProps = {
  label: string;
  name: string;
  defaultLabel: string;
  options: ISelect[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select({
  label,
  name,
  defaultLabel,
  options,
  value,
  onChange,
}: SelectProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {label}
      </label>
      <select
        id={name}
        value={value}
        onChange={onChange}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
      >
        <option defaultValue='' disabled>
          {defaultLabel}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

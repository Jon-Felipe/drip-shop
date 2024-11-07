import React from 'react';

const selectVariants = {
  outline:
    'bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5',
  underline:
    'py-2.5 px-0 text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer',
};

export interface ISelect {
  id: string | number;
  text: string;
  value: string;
}

export type SelectProps = {
  label?: string;
  name: string;
  defaultLabel: string;
  options: ISelect[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  variant?: 'outline' | 'underline';
  disabled?: boolean;
};

function Select({
  label,
  name,
  defaultLabel,
  options,
  value,
  onChange,
  variant = 'outline',
  disabled = false,
}: SelectProps) {
  let variantClass = selectVariants[variant];

  return (
    <div className='w-full'>
      {label ?? (
        <label
          htmlFor={name}
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          {label}
        </label>
      )}
      <select
        id={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`block w-full text-sm ${variantClass}`}
      >
        <option disabled>{defaultLabel}</option>
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

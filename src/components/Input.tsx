import React from 'react';

type Props = {
  label?: string | undefined;
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  name: React.InputHTMLAttributes<HTMLInputElement>['name'];
  value: React.InputHTMLAttributes<HTMLInputElement>['value'];
  onChange: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
  placeholder?: React.InputHTMLAttributes<HTMLInputElement>['placeholder'];
  required?: React.InputHTMLAttributes<HTMLInputElement>['required'];
};

function Input({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
}: Props) {
  return (
    <>
      <label
        htmlFor={name}
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {label ? label : name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}

export default Input;

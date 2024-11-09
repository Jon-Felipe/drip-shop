import React from 'react';

export type InputProps = {
  name: string;
  label?: string;
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  required?: boolean;
};

function Input({
  name,
  label,
  type,
  placeholder,
  required = false,
}: InputProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default Input;

import React from 'react';

export type InputProps = {
  name: string;
  label?: string;
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

function Input({
  name,
  label,
  type,
  placeholder,
  required = false,
  disabled = false,
}: InputProps) {
  return (
    <div className='w-full'>
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
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none ${
          disabled ? 'cursor-not-allowed' : ''
        }`}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;

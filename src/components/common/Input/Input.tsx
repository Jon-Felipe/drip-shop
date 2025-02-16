import React from 'react';
import { InputWrapper } from './Input.styles';

export type InputProps = {
  label?: string;
  name: string;
  value: React.InputHTMLAttributes<HTMLInputElement>['value'];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

function Input({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  required = false,
  disabled = false,
}: InputProps) {
  return (
    <InputWrapper $disabled={disabled} data-testid='inputEl'>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </InputWrapper>
  );
}

export default Input;

import React from 'react';
import { InputWrapper } from './Input.styles';

type InputProps = {
  label?: string;
  name: string;
  value: React.InputHTMLAttributes<HTMLInputElement>['value'];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

const Input = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  required = false,
  disabled = false,
}: InputProps) => {
  return (
    <InputWrapper $disabled={disabled}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </InputWrapper>
  );
};

export default Input;

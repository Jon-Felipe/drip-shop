import React from 'react';
import { InputWrapper } from './Input.styles';

type InputProps = {
  label?: string;
  name: string;
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  disabled?: boolean;
};

const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  disabled = false,
}: InputProps) => {
  return (
    <InputWrapper $disabled={disabled}>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} placeholder={placeholder} disabled={disabled} />
    </InputWrapper>
  );
};

export default Input;

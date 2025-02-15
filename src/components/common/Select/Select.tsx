import React from 'react';

import { SelectWrapper } from './Select.styles';

export interface ISelect {
  id: string | number;
  text: string;
  value: string;
}

export type SelectProps = {
  label?: string;
  name: string;
  defaultOption: string;
  options: ISelect[];
  value: string;
  disabled?: boolean;
  variant?: 'outline' | 'underline';
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Select({
  label,
  name,
  defaultOption,
  options,
  value,
  disabled = false,
  variant = 'outline',
  onChange,
  onSubmit,
}: SelectProps) {
  return (
    <SelectWrapper onSubmit={onSubmit} $variant={variant}>
      {label && (
        <label htmlFor={name} className='label'>
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className='select'
        data-testid='selectEl'
      >
        <option value=''>{defaultOption}</option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
}

export default Select;

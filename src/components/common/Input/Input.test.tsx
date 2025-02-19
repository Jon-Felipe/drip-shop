import React, { useState } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input, { InputProps } from './Input';

const inputProps: InputProps = {
  label: 'First Name',
  name: 'firstName',
  value: '',
  onChange: vi.fn(),
  type: 'text',
  placeholder: 'First Name',
  required: false,
  disabled: false,
};

function MockInputComponent() {
  const [textValue, setTextValue] = useState<string>('');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextValue(e.target.value);
  }

  return <Input {...inputProps} value={textValue} onChange={handleOnChange} />;
}

describe('Input Component', () => {
  beforeEach(() => {
    render(<MockInputComponent />);
  });

  it('should render input component', () => {
    const input = screen.getByTestId(/inputel/i) as HTMLInputElement;
    const inputTextBox = screen.getByRole('textbox', { name: 'First Name' });
    const inputPlaceholder = screen.getByPlaceholderText('First Name');

    expect(input).toBeInTheDocument();
    expect(inputTextBox).toBeInTheDocument();
    expect(inputPlaceholder).toBeInTheDocument();
  });

  it('should type a value in input component', async () => {
    const user = userEvent.setup();
    const inputTextBox = screen.getByRole('textbox', { name: 'First Name' });

    await user.click(inputTextBox);
    await user.type(inputTextBox, 'First Name');

    expect(inputTextBox).toHaveValue('First Name');
  });
});

describe('Input Component props check', () => {
  it('should disable input if disabled prop is true', () => {
    const { getByRole } = render(<Input {...inputProps} disabled={true} />);
    const inputTextBox = getByRole('textbox', { name: 'First Name' });

    expect(inputTextBox).toBeDisabled();
  });

  it('should set input to required if required prop is true', () => {
    const { getByRole } = render(<Input {...inputProps} required={true} />);
    const inputTextBox = getByRole('textbox', { name: 'First Name' });

    expect(inputTextBox).toHaveAttribute('required');
  });
});

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select, { ISelect, SelectProps } from './Select';

const options: ISelect[] = [
  { id: 1, text: 'United States', value: 'us' },
  { id: 2, text: 'Canada', value: 'ca' },
  { id: 3, text: 'France', value: 'fr' },
  { id: 4, text: 'Germany', value: 'de' },
];

const mockOnChange = vi.fn();
const mockOnSubmit = vi.fn();

const selectProps: SelectProps = {
  label: 'Select an option',
  name: 'country',
  defaultOption: 'Choose a country',
  options,
  value: 'de',
  disabled: false,
  onChange: mockOnChange,
  onSubmit: mockOnSubmit,
};

describe('Select Component', () => {
  it('should render select component', () => {
    const { getByTestId, getByText } = render(<Select {...selectProps} />);

    const select = getByTestId(/selectel/i);
    const selectDefaultOption = getByText(/choose a country/i);
    expect(select).toBeInTheDocument();
    expect(selectDefaultOption).toBeInTheDocument();
  });

  it('should render select component with a list of options', () => {
    const { getByTestId } = render(<Select {...selectProps} />);

    const select = getByTestId(/selectel/i);
    const options = select.querySelectorAll('option');

    expect(options).toHaveLength(5);
    expect(options[0].textContent).toBe('Choose a country');
    expect(options[1].textContent).toBe('United States');
    expect(options[2].textContent).toBe('Canada');
    expect(options[3].textContent).toBe('France');
    expect(options[4].textContent).toBe('Germany');
  });

  it('should let user choose an option from select dropdown', () => {
    const user = userEvent.setup();
    const { getByTestId, getByRole } = render(<Select {...selectProps} />);

    const select = getByTestId(/selectel/i) as HTMLSelectElement;
    const selectedOption = getByRole('option', {
      name: /canada/i,
    }) as HTMLOptionElement;
    user.selectOptions(select, selectedOption);

    expect(selectedOption.value).toBe('ca');
  });

  it('should disable select component if disabled prop is set to true', () => {
    const { getByTestId } = render(<Select {...selectProps} disabled={true} />);

    const select = getByTestId(/selectEl/) as HTMLSelectElement;
    expect(select).toBeDisabled();
  });
});

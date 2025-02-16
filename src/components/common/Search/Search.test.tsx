import { useState } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search, { SearchProps } from './Search';

const searchProps: SearchProps = {
  label: 'Search',
  placeholder: 'Search',
  name: 'search',
  value: '',
  onChange: vi.fn(),
  onSubmit: vi.fn(),
  required: false,
  btnText: 'Search',
};

function MockSearchComponent() {
  const [searchValue, setSearchValue] = useState<string>('');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    searchProps.onChange(e);
  }

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchValue('');
    searchProps.onSubmit(e);
  }

  return (
    <Search
      {...searchProps}
      value={searchValue}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
    />
  );
}

describe('Search Component', () => {
  beforeEach(() => {
    render(<MockSearchComponent />);
  });

  it('should render the search component', () => {
    const searchEl = screen.getByTestId(/searchel/i);
    const searchPlaceholder = screen.getByPlaceholderText(/search/i);
    const searchButton = screen.getByRole('button', { name: /search/i });

    expect(searchEl).toBeInTheDocument();
    expect(searchPlaceholder).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('should render the search component with a label if label prop is set', () => {
    const searchLabel = screen.getByLabelText(/search/i);

    expect(searchLabel).toBeInTheDocument();
  });

  it('should type into search component', async () => {
    const user = userEvent.setup();

    const searchInput = screen.getByTestId(/inputel/i) as HTMLInputElement;
    await user.type(searchInput, 'shoes');

    expect(searchProps.onChange).toHaveBeenCalled();
    expect(searchInput.value).toBe('shoes');
    expect(searchProps.onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'shoes',
        }),
      })
    );
  });

  it('should clear input on search button click', async () => {
    const user = userEvent.setup();

    const searchInput = screen.getByTestId(/inputel/i) as HTMLInputElement;
    const searchButton = screen.getByRole('button', { name: /search/i });

    await user.type(searchInput, 'shoes');
    await user.click(searchButton);

    expect(searchInput.value).toBe('');
  });
});

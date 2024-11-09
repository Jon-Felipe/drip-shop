import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Search, { SearchProps } from './Search';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    placeholder: {
      type: 'string',
      description: 'The search input placeholder text',
    },
    value: {
      type: 'string',
      description: 'The search input value',
    },
    onChange: {
      type: 'function',
      description: 'The function helper to change the text input value',
      control: false,
    },
    buttonText: {
      type: 'string',
      description: 'The search input button text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

const Template: Story = {
  render: (args: SearchProps) => {
    const [searchValue, setSearchValue] = useState<string>('');

    function onHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setSearchValue(e.target.value);
    }

    function onHandleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setSearchValue('');
      alert('form submitted');
    }

    return (
      <form onSubmit={onHandleSubmit}>
        <Search
          placeholder={args.placeholder ?? 'Search'}
          value={searchValue}
          onChange={onHandleChange}
          buttonText={args.buttonText ?? 'Search'}
        />
      </form>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultSearch: Story = {
  ...Template,
};

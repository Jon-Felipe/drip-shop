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
    label: {
      type: 'string',
      description: 'The search label text',
    },
    placeholder: {
      type: 'string',
      description: 'The search input placeholder text',
    },
    name: {
      type: 'string',
      description: 'The name attribute used to specify the name of the input',
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
    onSubmit: {
      type: 'function',
      description: 'The function helper to submit the search form',
      control: false,
    },
    required: {
      type: 'boolean',
      description: 'Makes the input required or not required',
    },
    btnText: {
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
      <Search
        label={args.label ?? ''}
        placeholder={args.placeholder ?? 'Search'}
        name={args.name ?? 'search'}
        value={searchValue}
        onChange={onHandleChange}
        onSubmit={onHandleSubmit}
        btnText={args.btnText ?? 'Search'}
      />
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultSearch: Story = {
  ...Template,
};

export const LabeledSearch: Story = {
  ...Template,
  args: {
    label: 'Search Label',
  },
};

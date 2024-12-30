import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Header, { HeaderProps } from './Header';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    searchValue: {
      type: 'string',
      description: 'The search component text value.',
    },
    searchOnChange: {
      type: 'function',
      description: 'The search component on change function handler',
      control: false,
    },
    searchOnSubmit: {
      type: 'function',
      description: 'The search component on submit function handler',
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

const Template: Story = {
  render: (args: HeaderProps) => {
    const [search, setSearch] = useState<string>('');

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      setSearch(e.target.value);
    }

    return (
      <Header
        searchValue={args.searchValue ?? search}
        searchOnChange={onChange}
        searchOnSubmit={() => console.log('submit')}
      />
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultHeader: Story = {
  ...Template,
};

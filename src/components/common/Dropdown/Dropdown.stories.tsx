import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Dropdown, { DropdownProps, IDropdownList } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: {
      type: 'string',
      description: 'The dropdown component title',
    },
    listItems: {
      type: 'string',
      description:
        'The list of text items to display within the dropdown component',
    },
    isOpen: {
      type: 'boolean',
      description:
        'A boolean value to determine if the dropdown component is open or closed',
    },
    setIsOpen: {
      control: false,
      description: 'A function handler to open or close the dropdown component',
    },
  },
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const Template: Story = {
  render: (args: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const listItems: IDropdownList[] = [
      { id: 1, text: 'Shirts' },
      { id: 2, text: 'Pants' },
      { id: 3, text: 'Jackets + coats' },
      { id: 4, text: 'Jeans' },
    ];

    return (
      <Dropdown
        title={args.title ?? 'Category'}
        listItems={listItems}
        isOpen={args.isOpen ?? isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
      />
    );
  },
};

export const DefaultDropdown: Story = {
  ...Template,
};

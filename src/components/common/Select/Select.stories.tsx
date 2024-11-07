import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Select, { ISelect, SelectProps } from './Select';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: {
      type: 'string',
      description: 'The label text describing the selectable options',
      control: 'text',
    },
    name: {
      type: 'string',
      description:
        'A string value used to associate the label with the select element',
      control: 'text',
    },
    defaultLabel: {
      type: 'string',
      description: 'The default option within the select options',
      control: 'text',
    },
    options: {
      description:
        'An array of string values ({id: string, text: string, value: string}) to display as option values',
      control: false,
    },
    value: {
      type: 'string',
      description: 'The selected value from the list of options',
      control: false,
    },
    onChange: {
      type: 'function',
      description:
        'A function to handle changing of values from the list of options',
      control: false,
    },
    disabled: {
      type: 'boolean',
      description: 'A boolean value to disable or enable the select component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultSelect: Story = {
  render: (args: SelectProps) => {
    const options: ISelect[] = [
      { id: 1, text: 'United States', value: 'us' },
      { id: 2, text: 'Canada', value: 'ca' },
      { id: 3, text: 'France', value: 'fr' },
      { id: 4, text: 'Germany', value: 'de' },
    ];

    const [value, setValue] = useState<string>('');

    function onHandleChange(e: React.ChangeEvent<HTMLSelectElement>) {
      setValue(e.target.value);
    }

    return (
      <>
        <Select
          label={args.label ?? 'Select an option'}
          name={args.name ?? 'countries'}
          defaultLabel={args.defaultLabel ?? 'Choose a country'}
          options={options}
          value={value}
          onChange={onHandleChange}
          disabled={args?.disabled ?? false}
        />
      </>
    );
  },
};

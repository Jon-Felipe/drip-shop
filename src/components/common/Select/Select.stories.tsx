import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Select, { ISelect, SelectProps } from './Select';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
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
      description: 'The select component label',
      control: 'text',
    },
    name: {
      type: 'string',
      description:
        'A string value used to associate the label with the select element',
      control: 'text',
    },
    defaultOption: {
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
    disabled: {
      type: 'boolean',
      description: 'A boolean value to disable or enable the select component',
    },
    variant: {
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'outline',
        },
      },
      control: 'select',
      description:
        "An option between outline and underline to change the select components's appearance",
      options: ['outline', 'underline'],
    },
    onChange: {
      type: 'function',
      description:
        'A function to handle changing of values from the list of options',
      control: false,
    },
    onSubmit: {
      type: 'function',
      description: 'A function to handle submitting of the select component',
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const Template: Story = {
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

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setValue('');
    }

    return (
      <Select
        label={args.label ?? 'Select an option'}
        name={args.name ?? 'countries'}
        defaultOption={args.defaultOption ?? 'Choose a country'}
        options={options}
        value={value}
        variant={args.variant ?? 'outline'}
        disabled={args?.disabled ?? false}
        onChange={onHandleChange}
        onSubmit={onSubmit}
      />
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OutlineSelectVariant: Story = {
  ...Template,
};

export const UnderlineSelectVariant: Story = {
  ...Template,
  args: {
    variant: 'underline',
  },
};

export const DisabledSelect: Story = {
  ...Template,
  args: {
    disabled: true,
  },
};

export const NoLabelSelect: Story = {
  ...Template,
  args: {
    label: '',
  },
};

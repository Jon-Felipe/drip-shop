import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Select, { ISelect } from './Select';

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
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultSelect: Story = {
  render: () => {
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
          label='Select an option'
          name='countries'
          defaultLabel='Choose a country'
          options={options}
          value={value}
          onChange={onHandleChange}
        />
      </>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import Spinner from './Spinner';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    colour: {
      control: 'select',
      options: ['blue', 'dark', 'green', 'red', 'yellow'],
      description: 'Different spinner colour variants',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'blue',
        },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: 'Different spinner colour sizes',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'm',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className='flex items-center gap-x-2'>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SpinnerColourVariants: Story = {
  render: (args) => (
    <>
      <Spinner {...args} />
      <Spinner {...args} colour='dark' />
      <Spinner {...args} colour='green' />
      <Spinner {...args} colour='red' />
      <Spinner {...args} colour='yellow' />
    </>
  ),
};

export const SpinnerSizeVariants: Story = {
  render: (args) => (
    <>
      <Spinner {...args} size='xs' />
      <Spinner {...args} size='s' />
      <Spinner {...args} size='m' />
      <Spinner {...args} size='l' />
      <Spinner {...args} size='xl' />
    </>
  ),
};

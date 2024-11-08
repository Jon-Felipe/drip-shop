import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      description:
        'A list of available string values defining the different alert variants',
      table: {
        defaultValue: {
          summary: 'info',
        },
        type: {
          summary: 'string',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className='flex flex-col items-center gap-x-2'>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const AlertVariants: Story = {
  render: (args) => (
    <>
      <Alert {...args} variant='info' />
      <Alert {...args} variant='danger' />
      <Alert {...args} variant='success' />
      <Alert {...args} variant='warning' />
    </>
  ),
};

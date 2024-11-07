import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    text: 'Button',
    colour: 'blue',
    size: 'm',
    pill: false,
    disabled: false,
    loading: false,
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
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultButton: Story = {
  render: (args) => (
    <>
      <Button {...args} text='Blue' />
      <Button {...args} text='Light' colour='light' />
      <Button {...args} text='Dark' colour='dark' />
      <Button {...args} text='Green' colour='green' />
      <Button {...args} text='Red' colour='red' />
      <Button {...args} text='Yellow' colour='yellow' />
    </>
  ),
};

export const ButtonPills: Story = {
  render: (args) => (
    <>
      <Button {...args} text='Blue' pill />
      <Button {...args} text='Light' colour='light' pill />
      <Button {...args} text='Dark' colour='dark' pill />
      <Button {...args} text='Green' colour='green' pill />
      <Button {...args} text='Red' colour='red' pill />
      <Button {...args} text='Yellow' colour='yellow' pill />
    </>
  ),
};

export const ButtonSizes: Story = {
  render: (args) => (
    <>
      <Button {...args} text='Extra small' size='xs' />
      <Button {...args} text='Small' size='s' />
      <Button {...args} text='Base' size='m' />
      <Button {...args} text='Large' size='l' />
      <Button {...args} text='Extra large' size='xl' />
    </>
  ),
};

export const LoadingButton: Story = {
  args: {
    loading: true,
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
  },
};

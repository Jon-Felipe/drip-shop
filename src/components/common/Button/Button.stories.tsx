import type { Meta, StoryObj } from '@storybook/react';
import { MdFavorite } from 'react-icons/md';

import Button from './Button';
import { StoryButtonWrapper } from './Button.styles';

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
  argTypes: {
    variant: {
      control: 'radio',
      description: 'The button variant: text, contained and outlined',
      table: {
        defaultValue: {
          summary: 'contained',
        },
        type: {
          summary: 'string',
        },
      },
    },
    colour: {
      control: 'select',
      description: "The button's text, border and background colour",
      table: {
        defaultValue: {
          summary: 'default',
        },
        type: {
          summary: 'string',
        },
      },
    },
    children: {
      type: 'string',
      description: 'Used to pass in the buttons text value',
    },
    pill: {
      type: 'boolean',
      description: 'Adds more radius to the button to display as a pill button',
    },
    icon: {
      control: false,
      description: 'Displays an icon along with the buttons text',
    },
    disabled: {
      type: 'boolean',
      description: 'Used to set the buttons state to disabled',
    },
  },
  decorators: [
    (Story) => (
      <StoryButtonWrapper>
        <Story />
      </StoryButtonWrapper>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ContainedButton: Story = {
  render: (args) => (
    <>
      <Button {...args} colour='default' children='button' />
      <Button {...args} colour='green' children='button' />
      <Button {...args} colour='red' children='button' />
      <Button {...args} colour='yellow' children='button' />
      <Button {...args} colour='purple' children='button' />
    </>
  ),
};

export const TextButton: Story = {
  render: (args) => (
    <>
      <Button {...args} colour='default' children='button' variant='text' />
      <Button {...args} colour='green' children='button' variant='text' />
      <Button {...args} colour='red' children='button' variant='text' />
      <Button {...args} colour='yellow' children='button' variant='text' />
      <Button {...args} colour='purple' children='button' variant='text' />
    </>
  ),
};

export const OutlinedButton: Story = {
  render: (args) => (
    <>
      <Button {...args} colour='default' children='button' variant='outlined' />
      <Button {...args} colour='green' children='button' variant='outlined' />
      <Button {...args} colour='red' children='button' variant='outlined' />
      <Button {...args} colour='yellow' children='button' variant='outlined' />
      <Button {...args} colour='purple' children='button' variant='outlined' />
    </>
  ),
};

export const PillButton: Story = {
  render: (args) => (
    <>
      <Button
        {...args}
        colour='default'
        children='button'
        variant='outlined'
        pill
      />
      <Button
        {...args}
        colour='green'
        children='button'
        variant='contained'
        pill
      />
      <Button
        {...args}
        colour='red'
        children='button'
        variant='outlined'
        pill
      />
      <Button
        {...args}
        colour='yellow'
        children='button'
        variant='contained'
        pill
      />
      <Button
        {...args}
        colour='purple'
        children='button'
        variant='outlined'
        pill
      />
    </>
  ),
};

export const IconTextButton: Story = {
  render: (args) => (
    <>
      <Button
        {...args}
        colour='default'
        variant='outlined'
        children='Favourite'
        icon={<MdFavorite />}
      />
      <Button
        {...args}
        colour='green'
        variant='contained'
        children='Favourite'
        icon={<MdFavorite />}
      />
      <Button
        {...args}
        colour='purple'
        variant='outlined'
        children='Favourite'
        pill
        icon={<MdFavorite />}
      />
      <Button
        {...args}
        colour='yellow'
        variant='contained'
        children='Favourite'
        pill
        icon={<MdFavorite />}
      />
    </>
  ),
};

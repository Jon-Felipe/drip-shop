import type { Meta, StoryObj } from '@storybook/react';
import {
  MdShoppingCart,
  MdFavoriteBorder,
  MdDelete,
  MdAlarm,
  MdOutlineDone,
} from 'react-icons/md';

import IconButton, { IconButtonProps } from './IconButton';
import { IconButtonStoryWrapper } from './IconButton.styles';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    icon: {
      control: false,
      description: 'The icon to be displayed for the icon button component',
    },
    colour: {
      control: {
        type: 'select',
      },
      description: 'The colour variant of the icon button',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'blue',
        },
      },
    },
    variant: {
      description:
        'A choice between three icon button variants: text, contained or outlined',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'text',
        },
      },
    },
    rounded: {
      if: { arg: 'variant', neq: 'text' },
      description:
        'Toggle between true or false to set the radius of the icon button',
    },
    disabled: {
      description:
        'Toggle between true or false to enable or disable the icon button',
    },
    onClick: {
      type: 'function',
      description: 'Icon button on click function handler',
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const Template: Story = {
  render: (args: IconButtonProps) => {
    return <IconButton {...args} icon={<MdShoppingCart />} />;
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const IconButtonText: Story = {
  ...Template,
};

export const IconButtonContained: Story = {
  ...Template,
  args: {
    variant: 'contained',
  },
};

export const IconButtonOutlined: Story = {
  ...Template,
  args: {
    variant: 'outlined',
  },
};

export const IconButtonRounded: Story = {
  render: (args: IconButtonProps) => (
    <IconButtonStoryWrapper>
      <IconButton
        {...args}
        variant='contained'
        icon={<MdFavoriteBorder />}
        rounded
      />
      <IconButton {...args} variant='outlined' icon={<MdDelete />} rounded />
    </IconButtonStoryWrapper>
  ),
};

export const IconButtonColours: Story = {
  render: (args: IconButtonProps) => (
    <IconButtonStoryWrapper>
      <IconButton
        {...args}
        variant='text'
        icon={<MdFavoriteBorder />}
        colour='default'
      />
      <IconButton
        {...args}
        variant='contained'
        icon={<MdDelete />}
        colour='green'
      />
      <IconButton
        {...args}
        variant='outlined'
        icon={<MdShoppingCart />}
        colour='red'
        rounded
      />
      <IconButton
        {...args}
        variant='contained'
        icon={<MdAlarm />}
        colour='yellow'
      />
      <IconButton
        {...args}
        variant='outlined'
        icon={<MdOutlineDone />}
        colour='purple'
        rounded
      />
    </IconButtonStoryWrapper>
  ),
};

export const IconButtonDisabled: Story = {
  ...Template,
  args: {
    variant: 'text',
    disabled: true,
  },
};

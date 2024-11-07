import type { Meta, StoryObj } from '@storybook/react';
import {
  MdShoppingCart,
  MdFavoriteBorder,
  MdDelete,
  MdAlarm,
  MdOutlineDone,
} from 'react-icons/md';

import IconButton from './IconButton';

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
    children: {
      table: {
        disable: true,
      },
    },
    variant: {
      description:
        'A choice between three icon button variants: text, fill or outlined',
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
      description:
        'Toggle between true or false to set the radius of the icon button',
    },
    disabled: {
      description:
        'Toggle between true or false to enable or disable the icon button',
    },
    disableRipple: {
      description:
        'Toggle between true or false to enable or disable the icon button on hover ripple effect',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const IconButtonDefault: Story = {
  name: 'Icon Button',
  args: {
    children: <MdShoppingCart className='w-5 h-5' />,
  },
};

export const IconButtonText: Story = {
  args: {
    children: <MdDelete className='w-5 h-5' />,
    variant: 'text',
  },
};

export const IconButtonFill: Story = {
  args: {
    children: <MdFavoriteBorder className='w-5 h-5' />,
    variant: 'fill',
  },
};

export const IconButtonOutlined: Story = {
  args: {
    children: <MdFavoriteBorder className='w-5 h-5' />,
    variant: 'outlined',
  },
};

export const IconButtonRounded: Story = {
  args: {
    children: <MdOutlineDone className='w-5 h-5' />,
    rounded: true,
  },
};

export const IconButtonDisabled: Story = {
  args: {
    children: <MdAlarm className='w-5 h-5' />,
    disabled: true,
  },
};

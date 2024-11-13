import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import Link from './Link';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    path: {
      type: 'string',
      description:
        'A string value representing the url path of the link component',
      control: false,
    },
    text: {
      if: { arg: 'icon', exists: false },
      type: 'string',
      description: 'The text to be displayed',
    },
    variant: {
      control: {
        type: 'select',
      },
      description: 'The link component variant: text or contained',
      table: {
        defaultValue: {
          summary: 'text',
        },
        type: {
          summary: 'string',
        },
      },
    },
    underlined: {
      if: { arg: 'icon', exists: false },
      control: {
        type: 'radio',
      },
      description:
        'Used to display the link component with the underline text decoration style',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    icon: {
      if: { arg: 'icon', eq: true },
      control: false,
      description: 'The link component represented as an icon',
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <div className='flex items-center gap-x-4'>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Link>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TextLink: Story = {
  args: {
    path: '/',
    text: 'Home',
  },
};

export const ContainedLink: Story = {
  args: {
    path: '/',
    text: 'Home',
    variant: 'contained',
  },
};

export const IconLink: Story = {
  args: {
    path: '/',
    icon: <MdShoppingCart />,
  },
};

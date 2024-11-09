import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';

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
      type: 'string',
      description: 'The text to be displayed',
    },
    size: {
      control: {
        type: 'select',
      },
      if: { arg: 'icon', truthy: false },
      description: 'A list of text options to update the font size',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'm',
        },
      },
    },
    weight: {
      control: {
        type: 'select',
      },
      description: 'A list of text options to update the font weight',
      if: { arg: 'icon', truthy: false },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'normal',
        },
      },
    },
    uppercase: {
      type: 'boolean',
      if: { arg: 'icon', truthy: false },
      description: 'Display the text as uppercase or capitalized(default)',
    },
    underline: {
      control: 'radio',
      description:
        'A list of options to handle different underline variants applied to the link text',
      if: { arg: 'icon', truthy: false },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
    },
    icon: {
      description: 'Display as an icon link without text',
      if: { arg: 'icon' },
      control: false,
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
export const DefaultLink: Story = {
  args: {
    path: '/',
    text: 'Home',
  },
};

export const LinkSizes: Story = {
  render: (args) => (
    <>
      <Link {...args} size='xs' path='/' text='Link Text' />
      <Link {...args} size='sm' path='/' text='Link Text' />
      <Link {...args} path='/' text='Link Text' />
      <Link {...args} size='lg' path='/' text='Link Text' />
      <Link {...args} size='xl' path='/' text='Link Text' />
      <Link {...args} size='2xl' path='/' text='Link Text' />
    </>
  ),
};

export const LinkWeights: Story = {
  render: (args) => (
    <>
      <Link {...args} weight='thin' path='/' text='Link Text' />
      <Link {...args} weight='light' path='/' text='Link Text' />
      <Link {...args} path='/' text='Link Text' />
      <Link {...args} weight='medium' path='/' text='Link Text' />
      <Link {...args} weight='semibold' path='/' text='Link Text' />
      <Link {...args} weight='bold' path='/' text='Link Text' />
    </>
  ),
};

export const IconLinks: Story = {
  args: {
    path: '/',
    text: 'Home',
    icon: <MdFavoriteBorder className='w-6 h-6' />,
  },
};

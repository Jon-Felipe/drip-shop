import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

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
  argTypes: {},
  args: {
    text: 'This is a link',
    path: '/',
    colour: 'primary',
    size: 'base',
    underline: 'none',
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
export const BasicLinks: Story = {
  render: (args) => (
    <>
      <Link {...args} text='Default Primary Link' />
      <Link {...args} text='Success Link' colour='success' />
      <Link
        {...args}
        text='Large Secondary Link'
        colour='secondary'
        size='lg'
      />
      <Link
        {...args}
        text='Underline Error Link'
        colour='error'
        size='sm'
        underline='always'
      />
    </>
  ),
};

export const ColourLinks: Story = {
  render: (args) => (
    <>
      <Link {...args} text='Default Primary Link' />
      <Link {...args} text='Secondary Link' colour='secondary' />
      <Link {...args} text='Success Link' colour='success' />
      <Link {...args} text='Error Link' colour='error' />
    </>
  ),
};

export const SizeLinks: Story = {
  render: (args) => (
    <>
      <Link {...args} text='xs Link' size='xs' />
      <Link {...args} text='base Link' size='base' />
      <Link {...args} text='3xl Link' size='3xl' />
    </>
  ),
};

export const UnderlineLinks: Story = {
  render: (args) => (
    <>
      <Link {...args} text='Underline: None' underline='none' />
      <Link
        {...args}
        text='Underline: Hover'
        colour='success'
        underline='hover'
      />
      <Link
        {...args}
        text='Underline: Always'
        colour='secondary'
        size='lg'
        underline='always'
      />
    </>
  ),
};

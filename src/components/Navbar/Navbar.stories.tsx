import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Navbar, { NavbarProps } from './Navbar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    showNavbarLinks: {
      type: 'boolean',
      description:
        'Toggle between showing or hidding the navbar links on small screen sizes',
      control: false,
    },
    setShowNavbarLinks: {
      type: 'function',
      description:
        'Function handler for the hamburger button to show or hide the navbar links',
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const Template: Story = {
  render: (args: NavbarProps) => {
    const [showNavbar, setShowNavbar] = useState<boolean>(false);

    function onHandleShowNavbar() {
      setShowNavbar(!showNavbar);
    }

    return (
      <>
        <Navbar
          {...args}
          showNavbarLinks={showNavbar}
          setShowNavbarLinks={onHandleShowNavbar}
        />
      </>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NavbarLargeScreen: Story = {
  ...Template,
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};

export const NavbarSmallScreen: Story = {
  ...Template,
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
};

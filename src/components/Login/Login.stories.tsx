import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Login, { LoginProps } from './Login';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Login> = {
  title: 'Components/Login',
  component: Login,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    emailValue: {
      type: 'string',
      description: 'The text value for the email input.',
    },
    passwordValue: {
      type: 'string',
      description: 'The text value for the password input.',
    },
    onChange: {
      type: 'function',
      description:
        'A function helper to handle on change events for the inputs.',
      control: false,
    },
    onSubmit: {
      type: 'function',
      description:
        'A function helper to handle the submit event for the login form.',
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/login']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template: Story = {
  render: (args: LoginProps) => {
    const [userDetails, setUserDetails] = useState<{
      email: string;
      password: string;
    }>({ email: '', password: '' });

    function onHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const name = e.target.name;
      const value = e.target.value;

      setUserDetails((prevState) => {
        return { ...prevState, [name]: value };
      });
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log('form submitted');
    }

    return (
      <Login
        emailValue={args.emailValue ?? userDetails.email}
        passwordValue={args.passwordValue ?? userDetails.password}
        onChange={onHandleChange}
        onSubmit={onSubmit}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Login>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultLogin: Story = {
  ...Template,
};

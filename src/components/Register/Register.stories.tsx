import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Register, { RegisterProps } from './Register';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Register> = {
  title: 'Components/Register',
  component: Register,
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
    nameValue: {
      type: 'string',
      description: 'The text value for the name input.',
    },
    passwordValue: {
      type: 'string',
      description: 'The text value for the password input.',
    },
    confirmPasswordValue: {
      type: 'string',
      description: 'The text value for the confirm password input.',
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
      <MemoryRouter initialEntries={['/register']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template: Story = {
  render: (args: RegisterProps) => {
    const [userDetails, setUserDetails] = useState<{
      email: string;
      name: string;
      password: string;
      confirmPassword: string;
    }>({ email: '', name: '', password: '', confirmPassword: '' });

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
      <Register
        emailValue={args.emailValue ?? userDetails.email}
        nameValue={args.nameValue ?? userDetails.name}
        passwordValue={args.passwordValue ?? userDetails.password}
        confirmPasswordValue={
          args.confirmPasswordValue ?? userDetails.confirmPassword
        }
        onChange={onHandleChange}
        onSubmit={onSubmit}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Register>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultRegister: Story = {
  ...Template,
};

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MdInfo } from 'react-icons/md';

import Alert, { AlertProps } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      description:
        'A list of available string values defining the different alert variants.',
      table: {
        defaultValue: {
          summary: 'info',
        },
        type: {
          summary: 'string',
        },
      },
    },
    border: {
      control: {
        type: 'radio',
      },
      description: 'Adds a border or accent border around the alert component',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    message: {
      type: 'string',
      description: 'The message to be displayed within the alert component',
      control: false,
    },
    icon: {
      control: false,
      description: 'The icon to be displayed with the message text',
    },
  },
  decorators: [
    (Story) => (
      <div className='flex flex-col items-center gap-x-2'>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Alert>;

const Template: Story = {
  render: (args: AlertProps) => {
    const [showAlert, setShowAlert] = useState<boolean>(true);

    function handleOnClose() {
      setShowAlert(true);
      alert('This will close the alert');
    }

    return (
      <>
        <Alert
          variant={args.variant ?? 'info'}
          border={args.border}
          message={`This is the ${args.variant ?? 'info'} alert`}
          icon={args.icon ?? undefined}
          showAlert={showAlert}
          onCloseClick={handleOnClose}
        />
        <Alert
          variant={args.variant ?? 'danger'}
          border={args.border}
          message={`This is the ${args.variant ?? 'danger'} alert`}
          icon={args.icon ?? undefined}
          showAlert={showAlert}
          onCloseClick={handleOnClose}
        />
        <Alert
          variant={args.variant ?? 'success'}
          border={args.border}
          message={`This is the ${args.variant ?? 'success'} alert`}
          icon={args.icon ?? undefined}
          showAlert={showAlert}
          onCloseClick={handleOnClose}
        />
        <Alert
          variant={args.variant ?? 'warning'}
          border={args.border}
          message={`This is the ${args.variant ?? 'warning'} alert`}
          icon={args.icon ?? undefined}
          showAlert={showAlert}
          onCloseClick={handleOnClose}
        />
      </>
    );
  },
};

export const AlertVariants: Story = {
  ...Template,
};

export const AlertBordered: Story = {
  ...Template,
  args: {
    border: 'bordered',
  },
};

export const AlertBorderAccent: Story = {
  ...Template,
  args: {
    border: 'borderAccent',
  },
};

export const AlertWithIcon: Story = {
  ...Template,
  args: {
    icon: <MdInfo className='flex-shrink-0 inline w-4 h-4 me-3' />,
  },
};

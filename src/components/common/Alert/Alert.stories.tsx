import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Alert, { AlertProps } from './Alert';
import { StoryAlertWrapper } from './Alert.styles';

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
    severity: {
      control: 'select',
      description:
        'A list of available string values defining the different alert variants.',
      table: {
        defaultValue: {
          summary: 'success',
        },
        type: {
          summary: 'string',
        },
      },
    },
    bordered: {
      type: 'boolean',
      description: 'Adds a border around the alert component',
    },
    text: {
      type: 'string',
      description:
        'The text message to be displayed within the alert component',
    },
    showAlert: {
      type: 'boolean',
      description:
        'True or false value to either show or hide the alert component',
      control: false,
    },
    onCloseClick: {
      type: 'function',
      description: 'A function handler to close the alert component',
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <StoryAlertWrapper>
        <Story />
      </StoryAlertWrapper>
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
          severity={args.severity ?? 'info'}
          bordered={args.bordered}
          text={`This is the ${args.severity ?? 'info'} alert`}
          showAlert={showAlert}
          onCloseClick={handleOnClose}
        />
        <Alert
          severity={args.severity ?? 'danger'}
          bordered={args.bordered}
          text={`This is the ${args.severity ?? 'danger'} alert`}
          showAlert={showAlert}
          onCloseClick={handleOnClose}
        />
        <Alert
          severity={args.severity ?? 'success'}
          bordered={args.bordered}
          text={`This is the ${args.severity ?? 'success'} alert`}
          showAlert={showAlert}
          onCloseClick={handleOnClose}
        />
        <Alert
          severity={args.severity ?? 'warning'}
          bordered={args.bordered}
          text={`This is the ${args.severity ?? 'warning'} alert`}
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

export const AlertBorderedVariants: Story = {
  ...Template,
  args: { bordered: true },
};

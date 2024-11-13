import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    name: {
      type: 'string',
      description: 'The name used to identify and link the label to the input',
    },
    value: {
      type: 'string',
      description: 'The value to be provided to the input',
    },
    label: {
      type: 'string',
      description: 'An optional label for the input component',
    },
    type: {
      type: 'string',
      description: 'The different type attributes for the input element',
    },
    placeholder: {
      type: 'string',
      description: 'The placeholder text for the input component',
    },
    required: {
      type: 'boolean',
      description: 'Used to specify whether an input is required or optional',
    },
    disabled: {
      type: 'boolean',
      description:
        'Used to specify whether an input should be disabled or enabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LabeledInput: Story = {
  args: {
    label: 'First Name',
    name: 'firstName',
    type: 'text',
    placeholder: 'First Name',
  },
};

export const NoLabelInput: Story = {
  args: {
    name: 'firstName',
    type: 'text',
    placeholder: 'First Name',
  },
};

export const DisabledInput: Story = {
  args: {
    label: 'First Name',
    name: 'firstName',
    type: 'text',
    placeholder: 'First Name',
    disabled: true,
  },
};

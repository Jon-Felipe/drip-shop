import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import QuantityInput from './QuantityInput';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof QuantityInput> = {
  title: 'Components/QuantityInput',
  component: QuantityInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    quantity: {
      control: false,
      type: 'number',
      description:
        'The number value to display in the quantity input component',
    },
    onChange: {
      control: false,
      type: 'function',
      description: 'The quantity input component on change function handler',
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuantityInput>;

const Template: Story = {
  render: () => {
    const [quantity, setQuantity] = useState<number>(0);

    function handleOnChange(type: string) {
      if (type === 'plus') {
        setQuantity((prevState) => {
          return prevState + 1;
        });
      } else if (type === 'minus') {
        if (quantity === 0) {
          setQuantity(0);
        } else {
          setQuantity((prevState) => {
            return prevState - 1;
          });
        }
      }
    }

    return <QuantityInput quantity={quantity} onChange={handleOnChange} />;
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultQuantityInput: Story = {
  ...Template,
};

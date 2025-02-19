import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button, { ButtonProps } from './Button';

const buttonProps: ButtonProps = {
  type: 'button',
  children: <p>button</p>,
  onClick: () => console.log('button clicked'),
};

describe('Button Component', () => {
  it('should render button component', () => {
    const { getByRole } = render(<Button {...buttonProps} disabled={true} />);
    const buttonEl = getByRole('button', { name: /button/i });
    expect(buttonEl).toBeInTheDocument();
  });

  it('should button component be disabled if disabled prop is true', () => {
    const { getByRole } = render(<Button {...buttonProps} disabled={true} />);
    const buttonEl = getByRole('button', { name: /button/i });
    expect(buttonEl).toBeDisabled();
  });

  it('should handle on click function', async () => {
    const user = userEvent.setup();
    const onClickMock = vi.fn();

    const { getByRole } = render(
      <Button {...buttonProps} onClick={onClickMock} />
    );
    const buttonEl = getByRole('button', { name: /button/i });
    await user.click(buttonEl);
    expect(onClickMock.mock.calls.length).toEqual(1);
  });
});

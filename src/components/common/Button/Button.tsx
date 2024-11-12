import React from 'react';
import { ButtonWrapper } from './Button.styles';

const buttonColours = {
  blue: 'rgb(26 86 219)',
  green: 'rgb(4 108 78)',
  red: 'rgb(200 30 30)',
  yellow: 'rgb(227 160 8)',
  purple: 'rgb(108 43 217)',
};

type Props = {
  variant?: 'text' | 'contained' | 'outlined';
  colour?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  children: React.ReactNode;
  pill?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
};

function Button({
  variant = 'contained',
  colour = 'blue',
  children,
  pill = false,
  icon,
  disabled = false,
}: Props) {
  const buttonClass = buttonColours[colour];

  return (
    <ButtonWrapper
      $variant={variant}
      $colour={buttonClass}
      $pill={pill}
      $disabled={disabled}
      disabled={disabled}
    >
      {icon && variant !== 'text' && <span className='icon'>{icon}</span>}
      {children}
    </ButtonWrapper>
  );
}

export default Button;

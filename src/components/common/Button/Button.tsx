import React from 'react';
import { ButtonWrapper } from './Button.styles';

const buttonColours = {
  default: 'rgb(68 64 60)',
  green: 'rgb(4 108 78)',
  red: 'rgb(200 30 30)',
  yellow: 'rgb(227 160 8)',
  purple: 'rgb(108 43 217)',
};

type Props = {
  type: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'contained' | 'outlined';
  colour?: 'default' | 'green' | 'red' | 'yellow' | 'purple';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  pill?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
};

function Button({
  type = 'button',
  variant = 'contained',
  colour = 'default',
  size = 'medium',
  children,
  pill = false,
  icon,
  disabled = false,
}: Props) {
  const buttonColourClass = buttonColours[colour];

  return (
    <ButtonWrapper
      type={type}
      disabled={disabled}
      $variant={variant}
      $colour={buttonColourClass}
      $size={size}
      $pill={pill}
      $icon={icon}
      $disabled={disabled}
    >
      {icon && variant !== 'text' && <span className='icon'>{icon}</span>}
      {children}
    </ButtonWrapper>
  );
}

export default Button;

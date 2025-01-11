import React from 'react';
import { IconButtonWrapper } from './IconButton.styles';

const buttonColours = {
  default: 'rgb(68 64 60)',
  green: 'rgb(4 108 78)',
  red: 'rgb(200 30 30)',
  yellow: 'rgb(227 160 8)',
  purple: 'rgb(108 43 217)',
};

export type IconButtonProps = {
  icon: React.ReactNode;
  colour?: 'default' | 'green' | 'red' | 'yellow' | 'purple';
  variant?: 'text' | 'contained' | 'outlined';
  rounded?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

function IconButton({
  icon,
  colour = 'default',
  variant = 'text',
  rounded = false,
  disabled = false,
  onClick,
}: IconButtonProps) {
  const colourClass = buttonColours[colour];

  return (
    <IconButtonWrapper
      disabled={disabled}
      $colour={colourClass}
      $variant={variant}
      $rounded={rounded}
      $disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </IconButtonWrapper>
  );
}

export default IconButton;

import React from 'react';
import { IconButtonWrapper } from './IconButton.styles';

const buttonColours = {
  blue: 'rgb(26 86 219)',
  green: 'rgb(4 108 78)',
  red: 'rgb(200 30 30)',
  yellow: 'rgb(227 160 8)',
  purple: 'rgb(108 43 217)',
};

export type IconButtonProps = {
  icon: React.ReactNode;
  colour?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  variant?: 'text' | 'contained' | 'outlined';
  rounded?: boolean;
  disabled?: boolean;
};

function IconButton({
  icon,
  colour = 'blue',
  variant = 'text',
  rounded = false,
  disabled = false,
}: IconButtonProps) {
  const colourClass = buttonColours[colour];

  return (
    <IconButtonWrapper
      disabled={disabled}
      $colour={colourClass}
      $variant={variant}
      $rounded={rounded}
      $disabled={disabled}
    >
      {icon}
    </IconButtonWrapper>
  );
}

export default IconButton;

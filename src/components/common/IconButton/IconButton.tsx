import React from 'react';

const variants = {
  text: 'text-blue-700 enabled:hover:bg-blue-50',
  fill: 'text-white bg-blue-700 enabled:hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300',
  outlined:
    'text-blue-700 border border-blue-700 enabled:hover:bg-blue-700 enabled:hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300',
};

const disableRippleVariants = {
  text: 'text-blue-700',
  fill: 'text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300',
  outlined:
    'text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300',
};

type Props = {
  children: React.ReactNode;
  variant: 'text' | 'fill' | 'outlined';
  rounded?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
};

function IconButton({
  children,
  variant = 'text',
  rounded = false,
  disabled = false,
  disableRipple = false,
}: Props) {
  const iconButtonClass = disableRipple
    ? disableRippleVariants[variant]
    : variants[variant];

  return (
    <button
      className={`${iconButtonClass} ${
        rounded ? 'rounded-full' : 'rounded-lg'
      } p-2.5`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default IconButton;

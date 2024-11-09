import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

const linkTextSize = {
  xs: 'text-xs',
  sm: 'text-sm',
  m: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
};

const linkTextWeight = {
  thin: 'font-thin',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const linkUnderlineVariants = {
  always: 'underline',
  hover: 'hover:underline',
  none: 'no-underline',
};

export type LinkProps = {
  path: string;
  text: string;
  size?: 'xs' | 'sm' | 'm' | 'lg' | 'xl' | '2xl';
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  uppercase?: boolean;
  underline?: 'always' | 'hover' | 'none';
  icon?: React.ReactNode;
};

function Link({
  path,
  text,
  size = 'm',
  weight = 'normal',
  uppercase = false,
  underline = 'none',
  icon,
}: LinkProps) {
  const sizeClassName = linkTextSize[size];
  const weightClassName = linkTextWeight[weight];
  const underlineClassName = linkUnderlineVariants[underline];

  const linkClassName = icon
    ? ''
    : `${sizeClassName} ${weightClassName} text-stone-800 ${
        uppercase ? 'uppercase' : 'capitalize'
      } ${underlineClassName}`;

  return (
    <ReactRouterLink to={path} className={linkClassName}>
      {icon ? (
        <>
          <span className='sr-only'>{text}</span>
          {icon}
        </>
      ) : (
        text
      )}
    </ReactRouterLink>
  );
}

export default Link;

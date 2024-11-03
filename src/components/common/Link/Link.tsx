import { Link as ReactRouterDomLink } from 'react-router-dom';

const colourVariants = {
  primary: 'text-neutral-600',
  secondary: 'text-blue-600',
  success: 'text-green-600',
  error: 'text-red-600',
};

const sizeVariants = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

const underlineVariants = {
  always: 'underline',
  hover: 'hover:underline',
  none: 'no-underline',
};

type LinkProps = {
  text: string;
  path: string;
  colour?: 'primary' | 'secondary' | 'success' | 'error';
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';
  underline?: 'always' | 'hover' | 'none';
};

function Link({
  text,
  path,
  colour = 'primary',
  size = 'base',
  underline = 'none',
}: LinkProps) {
  let colourClasses = colourVariants[colour];
  let sizeClasses = sizeVariants[size];
  let underlineClasses = underlineVariants[underline];

  return (
    <ReactRouterDomLink
      to={path}
      className={`font-medium tracking-wide ${colourClasses} ${sizeClasses} ${underlineClasses}`}
    >
      {text}
    </ReactRouterDomLink>
  );
}

export default Link;

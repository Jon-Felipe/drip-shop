import React from 'react';
import { LinkWrapper } from './Link.styles';

type LinkProps = {
  path: string;
  text?: string;
  variant?: 'text' | 'contained';
  underlined?: 'always' | 'hover' | 'none';
  icon?: React.ReactNode;
};

function Link({
  path,
  text,
  variant = 'text',
  underlined = 'none',
  icon,
}: LinkProps) {
  return (
    <LinkWrapper to={path} $variant={variant} $underlined={underlined}>
      {icon ? <span className='icon'>{icon}</span> : text}
    </LinkWrapper>
  );
}

export default Link;

import React from 'react';
import { LinkWrapper } from './Link.styles';

type LinkProps = {
  path: string;
  text: string;
  variant: 'text' | 'contained';
  icon: React.ReactNode;
};

function Link({ path, text, variant = 'text', icon }: LinkProps) {
  return (
    <LinkWrapper to={path} $variant={variant}>
      {icon ? icon : text}
    </LinkWrapper>
  );
}

export default Link;

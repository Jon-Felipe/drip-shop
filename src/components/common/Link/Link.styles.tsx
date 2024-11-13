import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled(Link)<{
  $variant?: string;
  $underlined?: string;
}>`
  color: rgb(28 100 242);
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  font-family: 'Funnel Display', sans-serif;
  letter-spacing: 1px;
  color: ${(props) =>
    props.$variant === 'contained' ? 'white' : 'rgb(26 86 219)'};
  background-color: ${(props) =>
    props.$variant === 'contained' ? 'rgb(26 86 219)' : 'transparent'};
  padding: ${(props) =>
    props.$variant === 'contained' ? '0.625rem 1.25rem' : '0px'};
  border-radius: ${(props) =>
    props.$variant === 'contained' ? '0.5rem' : 'unset'};
  text-decoration: ${(props) =>
    props.$underlined === 'always' && props.$variant === 'text'
      ? 'underline'
      : 'none'};

  cursor: pointer;

  &:hover {
    text-decoration: ${(props) =>
      props.$underlined === 'hover' && props.$variant === 'text'
        ? 'underline'
        : 'none'};
    opacity: ${(props) => (props.$variant === 'contained' ? 0.8 : 1)};
  }
`;

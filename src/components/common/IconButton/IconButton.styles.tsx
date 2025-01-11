import styled from 'styled-components';

export const IconButtonWrapper = styled.button<{
  $colour?: string;
  $variant?: string;
  $rounded?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.$variant !== 'text' ? '12px' : 0)};
  background: ${(props) =>
    props.$variant === 'contained' ? props.$colour : 'unset'};
  color: ${(props) =>
    props.$variant === 'contained' ? 'white' : props.$colour};
  border: ${(props) =>
    props.$variant === 'outlined' ? `1px solid ${props.$colour}` : 'none'};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${(props) =>
    props.$rounded && props.$variant !== 'text'
      ? '24px'
      : !props.$rounded && props.$variant !== 'text'
      ? '12px'
      : 'unset'};

  &:hover {
    background-color: ${(props) =>
      props.$variant === 'outlined' ? props.$colour : ''};
    color: ${(props) => (props.$variant === 'outlined' ? 'white' : '')};
    opacity: ${(props) =>
      props.$variant === 'contained' || props.$variant === 'text' ? '80%' : ''};
  }

  svg {
    width: 23px;
    height: 23px;
  }
`;

export const IconButtonStoryWrapper = styled.div`
  display: flex;
  column-gap: 12px;
`;

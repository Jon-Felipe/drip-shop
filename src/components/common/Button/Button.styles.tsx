import styled from 'styled-components';

export const ButtonWrapper = styled.button<{
  $variant?: string;
  $colour?: string;
  $pill?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: ${(props) => (props.$pill ? '20px' : '8px')};
  font-size: 16px;
  font-weight: 500;
  color: ${(props) =>
    props.$variant === 'text'
      ? props.$colour
      : props.$variant === 'outlined'
      ? props.$colour
      : 'white'};
  text-transform: capitalize;
  background-color: ${(props) =>
    props.$variant === 'contained' ? props.$colour : 'white'};
  border: ${(props) =>
    props.$variant === 'outlined' ? `1px solid ${props.$colour}` : 'none'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    ${(props) =>
      props.$variant === 'outlined'
        ? `
        background-color: ${props.$colour};
        color: white;
    `
        : ''}
    ${(props) =>
      props.$variant === 'contained'
        ? `
        opacity: 90%;
    `
        : ''}
  }

  .icon {
    display: flex;
    align-items: center;
    margin-right: 6px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const StoryButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
`;

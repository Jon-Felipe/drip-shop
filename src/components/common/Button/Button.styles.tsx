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
  font-family: 'Funnel Display', sans-serif;
  font-weight: 500;
  color: ${(props) =>
    props.$variant === 'contained' ? '#fff' : props.$colour};
  text-transform: capitalize;
  background-color: ${(props) =>
    props.$variant === 'contained' ? props.$colour : '#fff'};
  border: ${(props) =>
    props.$variant === 'outlined' ? `1px solid ${props.$colour}` : 'none'};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) =>
      props.$variant === 'outlined' ? props.$colour : ''};
    color: ${(props) => (props.$variant === 'outlined' ? '#fff' : '')};
    opacity: ${(props) => (props.$variant !== 'outlined' ? '0.9' : '1')};
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

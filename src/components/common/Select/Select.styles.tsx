import styled from 'styled-components';

export const SelectWrapper = styled.form<{ $variant: string }>`
  display: block;
  width: 100%;

  .label {
    display: block;
    font-family: 'Funnel Display', sans-serif;
    font-size: 18px;
    margin-bottom: 6px;
  }

  .select {
    width: 100%;
    max-width: 250px;
    padding: 10px 5px;
    background-color: ${(props) =>
      props.$variant === 'outline' ? 'rgb(249 250 251)' : '#fff'};
    border: ${(props) =>
      props.$variant === 'outline' ? '1px solid rgb(209 213 219)' : 'none'};
    border-bottom: 1px solid rgb(209 213 219);
    border-radius: ${(props) => (props.$variant === 'outline' ? '8px' : '0')};
    font-family: 'Funnel Display', sans-serif;
    font-size: 14px;
  }
`;

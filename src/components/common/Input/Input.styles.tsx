import styled from 'styled-components';

export const InputWrapper = styled.div<{ $disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;

  label {
    font-family: 'Funnel Display', sans-serif;
    font-size: 0.875rem;
    letter-spacing: 1px;
    font-weight: 500;
    color: rgb(17 24 39);
    width: 100%;
  }

  input {
    padding: 0.625rem;
    background-color: rgb(249 250 251);
    font-family: 'Funnel Display', sans-serif;
    font-size: 0.875rem;
    letter-spacing: 1px;
    border: 1px solid rgb(209 213 219);
    border-radius: 0.5rem;
    cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'initial')};
  }

  input::placeholder {
    font-family: 'Funnel Display', sans-serif;
    font-size: 0.875rem;
    letter-spacing: 1px;
  }
`;

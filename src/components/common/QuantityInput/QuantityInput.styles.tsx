import styled from 'styled-components';

export const QuantityInputWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;

  .quantity-button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 15px;
      height: 15px;
    }
  }

  .quantity-text {
    font-family: 'Funnel Display', sans-serif;
    font-size: 18px;
  }
`;

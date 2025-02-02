import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 250px;
  .dropdown-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .dropdown-btn__title {
    letter-spacing: 1px;
    font-family: 'Funnel Display', sans-serif;
    font-size: 18px;
  }

  .dropdown-btn__icon {
    margin-top: 5px;
    font-size: 18px;
  }

  .listitems {
    margin-top: 20px;
    width: 100%;
  }

  .listitems__text {
    font-family: 'Funnel Display', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    margin: 5px 0;
    width: 100%;
  }
`;

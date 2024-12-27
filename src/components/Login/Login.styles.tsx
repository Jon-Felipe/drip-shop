import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: block;
  font-family: 'Funnel Display', sans-serif;

  .title {
    font-size: 30px;
    font-weight: 600;
    margin: 0 0 5px 0;
  }

  .sub-text {
    font-size: 16px;
    font-weight: 300;
    margin: 0px;

    span {
      font-weight: 600;
      color: rgb(26 86 219);
      cursor: pointer;
    }
  }

  .form-inputs {
    display: flex;
    align-items: center;
    column-gap: 14px;
    margin: 24px 0 0;
  }

  .divider {
    display: flex;
    align-items: center;
    column-gap: 14px;

    hr {
      width: 100%;
      height: 2px;
      background-color: rgb(229 231 235);
      border: none;
    }
  }

  .action-helpers {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    .remember {
      display: flex;
      align-items: flex-end;
      column-gap: 4px;
    }
  }
`;

export const SocialButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;
  width: 100%;
  background: none;
  border: 1px solid rgb(229 231 235);
  border-radius: 8px;
  font-family: 'Funnel Display', sans-serif;
  font-size: 16px;
  padding: 8px 0;
  margin-bottom: 20px;
  cursor: pointer;

  span {
    margin-top: 3px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

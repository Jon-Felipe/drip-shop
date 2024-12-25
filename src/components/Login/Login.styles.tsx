import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: block;
  font-family: 'Funnel Display', sans-serif;

  .title {
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 0px;
  }

  .sub-text {
    font-size: 16px;
    font-weight: 300;

    span {
      font-weight: 700;
      color: rgb(26 86 219);
      cursor: pointer;
    }
  }

  .form-inputs {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    width: 100%;
    margin-bottom: 16px;
  }
`;

import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  display: block;
  margin-top: 150px;
  padding: 0 20px;

  .image-section {
    img {
      display: none;
    }
  }

  .form-section {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    .title {
      font-size: 26px;
      font-weight: 600;
      margin: 0 0 5px 0;
    }

    .sub-text {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 16px;
    }

    .form-inputs {
      display: flex;
      flex-direction: column;
      width: 100%;

      .inputs {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        margin-bottom: 16px;
        width: 100%;
      }
    }

    .divider {
      display: flex;
      align-items: center;
      column-gap: 14px;
      margin-bottom: 16px;

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
        align-items: center;
        column-gap: 4px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .form-section {
      .form-inputs {
        flex-direction: row;
        column-gap: 16px;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    place-items: center;

    .image-section {
      width: 100%;
      height: 100%;
      img {
        display: inline-block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
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

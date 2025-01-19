import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: block;
  margin-top: 150px;
  padding: 0 20px;

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
      align-items: center;
      column-gap: 14px;
      width: 100%;
    }

    .divider {
      display: flex;
      align-items: center;
      column-gap: 14px;
      margin: 16px 0;

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

  .image-section {
    img {
      display: none;
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

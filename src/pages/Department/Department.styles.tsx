import styled from 'styled-components';

export const DepartmentWrapper = styled.div`
  margin-top: 40px;
  padding: 0 20px;
  width: 100%;
  max-width: 1140px;
  margin: 40px auto 0;
  display: grid;
  column-gap: 20px;

  .department__intro {
    h3 {
      font-size: 16px;
      margin-bottom: 10px;
      letter-spacing: 1px;
      line-height: 25px;
    }
    p {
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 20px;
    }
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 300px 1fr;
  }

  @media only screen and (min-width: 1145px) {
    padding: 0;
  }
`;

export const FilterWrapper = styled.section`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: block;
    padding: 20px;
  }
`;

export const ContentWrapper = styled.section``;

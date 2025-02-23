import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: block;
  padding: 0 20px;
  width: 100%;
  max-width: 1140px;
  margin: auto;

  @media only screen and (min-width: 1150px) {
    padding: 0;
  }
`;

export const DeparmentCardsWrapper = styled.section`
  margin: 40px 0;
  display: block;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const BrandWrapper = styled.section`
  display: block;
  margin: 40px 0;
  .brands-title {
    display: grid;
    grid-template-columns: 1fr 120px 1fr;
    align-items: center;
    margin-bottom: 40px;

    h3 {
      text-align: center;
      text-transform: uppercase;
      font-size: 14px;
    }
  }
`;

import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  max-width: 1140px;
  margin: auto;

  @media only screen and (min-width: 1150px) {
    padding: 0;
  }
`;

export const DeparmentCardsWrapper = styled.section`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
